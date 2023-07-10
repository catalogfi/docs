---
sidebar_position: 4
---

# API

## Description

The Guardian API follows the [JSON-RPC 2.0 specification](https://www.jsonrpc.org/specification).

## Authentication

Authentication is required for most API calls to make sure the request sender is actually the owner of the account. The user's Catalog Account is used as the single source of truth to identify the user. All following requests will need to be authorized by the associated private key. During the funding and sending process, the Bitcoin transaction signature is used for authentication instead of requiring a separate signature. In the case of a refund attempt, a secret is used for verification. This is because secret creation is verified by the Catalog Account, and should always be kept private.

## User Flow

Let's step through an example user flow to outline common API interactions.

### Creation

The user sends a `btc_createWallet` request to the Guardian, which returns the Instant Wallet address alongside the Guardian public key (i.e. the second signer of the 2-of-2 multisig). The user will then be able to deposit funds to the returning address to start using their Instant Wallet.

### Querying
    
The user sends a `btc_getWallet` request to the Guardian, which returns the wallet details, such as the address, public keys, and the current active UTXO if it exists.

### Funding

:::caution

Funding an Instant Wallet places a temporary hold on new funding and send requests as the Guardian does not process them while external transactions are being confirmed. All Instant Wallet funding transactions must originate from a user's Catalog Account. Additionally, the refund transaction must be kept secure as it is the only way to recover funds in the event the Guardian becomes unresponsive.

:::

**Funding an empty wallet**

1. The user constructs a funding transaction which sends funds to the wallet address she got from creation. If this is not a segwit transaction, they will need to sign this as the signature will affect the transaction hash. The user *does not* need to submit the transaction to the blockchain network.
2. The user generates a secret locally, and sends a `btc_getRefundTx` request to the Guardian. The Guardian will verify the request and return a refund transaction with the Guardian signature.
3. The user verifies the refund transaction and signature.
4. The user sends a `btc_submitDeposit` request to the Guardian, which contains the signed funding transaction. The Guardian will verify and store this transaction if valid (the signature from the funding transaction is used to verify the user).
5. The Relayer will broadcast the transaction. The user will only be able to use their Instant Wallet once the funding transaction is confirmed. They should not send additional funding requests until this process is completed.

**Funding a non-empty wallet**

1. The user fetches the current wallet status using the `btc_getWallet` method.
2. The user constructs a transaction which contains the current funding UTXO as the inital input. The initial output address must be that of the Instant Wallet. The user will need to sign all inputs except the first one.
```json
{
    "input": {
        fundingUtxo,
        User's other utxo1,
        User's other utxo2,
        ...
    },
    "output": {
        walletAddress,
        User's address (if there's any change)
    }
}
```
3. The user generates a secret locally, and sends a `btc_getRefundTx` request to the Guardian. The Guardian checks if the transaction inputs are signed (except the first one) and uses this to verify the request sender. The Guardian will not process send and other funding requests during this time, until this funding request is finalized. The Guardian will return the refund transaction with the Guardian signature. The Guardian will also provide a signature for the initial input, so the user can submit this funding UTXO.

### Sending

**Send all funds in a single request**

1. The user constructs the send transaction, which has the funding UTXO as the only input. Any recipient address(es) can be specified, as the Guardian only verifies the input.
2. The user signs the send transaction and submits a `btc_send` request to Guardian. The Guardian will use the transaction signature to authenticate the request sender. The Guardian will not process other Instant Wallet transactions during this time. It will then sign the input, and send the signed transaction to Relayer to broadcast to the network. The Guardian will also return the signature to allow the user to submit the send transaction themselves. If the server fails to provide this signature, the user can use the refund transaction to get their funds back.
3. In order to get the Guardian commitment, the user sends a `btc_commit` request and provides the secret generated during the funding process. This secret is used to verify the user's identity.

**Send a portion of the funds**

1. The user constructs the send transaction, which has the funding UTXO as the only input. This will include a change transaction back to the Instant Wallet address.
2. The user sends a `btc_getRefundTx` request to get a new refund transaction and signature. This allows the user to move the funds to the refund address as soon as the send transaction is successful.
3. The user sends a `btc_send` request to submit the send transaction. This transaction is signed by the user, allowing the Guardian to verify the sender.
4. In order to get the Guardian commitment, the user sends a `btc_commit` request and provides the secret generated during the original funding process. This secret is used to verify the user's identity.

## Methods

### `btc_createWallet`

Creates a new Instant Wallet for Bitcoin. If the wallet already exists, this will not recreate the wallet or create a new one.

**Request**

- `public_key` [string] (required): The compressed public key in hexadecimal format.

**Response**

- `wallet_address` [string]: The address of the new Instant Wallet.
- `guardian_public_key` [string]: The Guardian public key in hexadecimal format, i.e. the second signer of the 2-of-2 multi-sig.

### `btc_getWalletByAddress`

Get the Instant Wallet details with the given address.

**Request**

- `wallet_address` [string] (required): The Instant Wallet address.

**Response**

- `wallet_address` [string] (required): The Instant Wallet address.
- `status` [int] (required): Current status of the instant wallet (ready/funding/redeeming...)
- `guardian_public_key` [string]: The Guardian public key in hexadecimal format.
- `funding_utxo` [struct] (optional): The current funding UTXO details, if it exists.

```json
{
    ...
    "funding_utxo": {
        "tx_hash": "string",
        "tx_index": "int64",
        "tx_amount": "int64",
        "refund_wait_block": "int64",
        "refund_secret": "string",
        "refund_secret_hash": "string",
        "refund_raw": "string",
        "refund_guardian_signature": "string"
    }
}
```

### `btc_getWalletByPublicKey`

Get the Instant Wallet details with the given public key.

**Request**

- `public_key` [string] (required): The Instant Wallet public key.

**Response**

- `wallet_address` [string] (required): The Instant Wallet address.
- `status` [int] (required): Current status of the instant wallet (ready/funding/redeeming...)
- `guardian_public_key` [string]: The Guardian public key in hexadecimal format.
- `funding_utxo` [struct] (optional): The current funding UTXO details, if it exists.

```json
{
    ...
    "funding_utxo": {
        "tx_hash": "string",
        "tx_index": "int64",
        "tx_amount": "int64",
        "refund_wait_block": "int64",
        "refund_secret": "string",
        "refund_secret_hash": "string",
        "refund_raw": "string",
        "refund_guardian_signature": "string"
    }
}
```

### `btc_getRefundTx`

Get refund transaction details. This method is used prior to funding. If the wallet provided already has funds, this method will prevent the Guardian from processing other fund or send requests until this is complete. This method will return an error if the funding UTXO is not confirmed or is in the process of funding or sending.

**Request**

- `wallet_address` [string] (required): Wallet address to be funded.
- `secret_hash` [string] (required): Hexadecimal encoding of the secret hash.
- `utxo_hash` [string] (required): Hash of the funding UTXO.
- `utxo_index` [int64] (required): Index of the funding UTXO.
- `utxo_amount` [int64] (required): Amount of the funding UTXO.
- `deposit_tx` [string] (optional): The partially signed raw transaction, if the wallet is not empty.

**Response**

- `wait_block` [int64]: Wait block number in the refund script.
- `raw_tx` [string]: Raw refund transaction in hexadecimal format.
- `refund_guardian_signature` [string]: Guardian signature for the refund transaction.
- `deposit_guardian_signature` [string] (optional): Guardian signature for the new funding transaction, if `deposit_tx` is provided.

### `btc_submitDeposit`

Confirms a funding request once the deposit has reached sufficient confirmation.

Submit funding transaction details. If the provided details are valid, this method will prevent the Guardian from processing other fund or send requests until this is complete. The wallet will be ready-to-use once the funding transaction reaches sufficient confirmations.

**Request**

- `wallet_address` [string] (required): Wallet address to be funded.
- `secret_hash` [string] (required): Hexadecimal encoding of the secret hash.
- `raw_deposit_tx` [string] (required): Raw deposit transaction, fully signed by user and Guardian.

### `btc_send`

Send Bitcoin from an Instant Wallet. The user needs to include the send transaction hash in order to get a new refund transaction in return.

**Request**

- `wallet_address` [string] (required): Address of the wallet.
- `send_tx` [string] (required): Send transaction in raw bytes.
- `secret_hash` [string] (optional): Secret hash for the new refund transaction, if this is a partial send.

**Response**

- `guardian_signature` [string]: Guardian signature for the refund transaction.

### `btc_commit`

Receive a commitment that the user will receive the funds eventually.

**Request**

- `wallet_address` [string] (required): Address of the wallet.
- `tx_hash` [string] (required): Transaction hash for the send transaction.
- `secret` [string] (required): Secret for the refund script.
