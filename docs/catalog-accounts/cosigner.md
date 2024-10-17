---
sidebar_position: 3
---

# Cosigner

The Cosigner is a co-signing service for the Instant Account. The Cosigner ensures secure transactions by eliminating the possibility of double spending without the need for confirmation delays. It achieves this by providing a second signature for all account operations, meaning it can guarantee no operation will be able to override existing ones. The Cosigner does not require any trust from the user as it allows the user to unilaterally withdraw funds after an intially agreed upon time, meaning the user can withdraw at any point after the expiry in the event the Cosigner becomes unresponsive.

As an extra layer of security, we introduce an underwriter mechanism to protect users in the event they fail to receive their funds after receiving a commitment from the Cosigner.

## Underwriter

The Cosigner Underwriter is designed to protect the system from irrational Cosigners who are willing to attack the protocol (e.g. DoS) without any monetary gain. In a system where all participants are acting in their best interest, the underwriter is not used.

An underwriter requires two components:
1. A Bitcoin block relayer
2. An insurance contract

An insurance commitment is provided to a user after they pay the insurance premium to the Cosigner. The insurance premium incentivizes liveliness of the Cosigner, as the more commitments it signs the more fees it can earn through the premiums.

Example commitment:
```
{
    "redeemTxHash": The hash of the Cosigner's redeem transaction,
    "lastBlock": The block by which the redeem transaction must be included,
    "insuranceAmount": Insurance amount,
    "claimant": Claimant address,
    "underwriterSignature": Signature of underwriter
}
```

The commitment is submitted by the claimant if their transaction is not finalized by the specified block number. If the Cosigner does not provide a proof-of-inclusion for a claim request, insurance is paid out from the pool.
