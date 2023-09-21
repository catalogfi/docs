---
sidebar_position: 3
---

# Guardian

The Guardian is a co-signing service for the Instant Account. The Guardian ensures secure transactions by eliminating the possibility of double spending without the need for confirmation delays. It achieves this by providing a second signature for all account operations, meaning it can guarantee no operation will be able to override existing ones. The Guardian does not require any trust from the user as it signs a refund transaction prior to any funding request, meaning the user can withdraw at any point in the event the Guardian becomes unresponsive.

As an extra layer of security, we introduce an underwriter mechanism to protect users in the event they fail to receive their funds after receiving a commitment from a Guardian.

## Underwriter

The Guardian Underwriter is designed to protect the system from irrational Guardians who are willing to attack the protocol (e.g. DoS) without any monetary gain. In a system where all participants are acting in their best interest, the underwriter is not used.

An underwriter requires two components:
1. A Bitcoin block relayer
2. An insurance contract

An insurance commitment is provided to a user after they pay the insurance premium to the Guardian. The insurance premium incentivizes liveliness of the Guardian, as the more commitments it signs the more fees it can earn through the premiums.

Example commitment:
```
{
    "redeemTxHash": The hash of the Guardian's redeem transaction,
    "lastBlock": The block by which the redeem transaction must be included,
    "insuranceAmount": Insurance amount,
    "claimant": Claimant address,
    "underwriterSignature": Signature of underwriter
}
```

The commitment is submitted by the claimant if their transaction is not finalized by the specified block number. If the Guardian does not provide a proof-of-inclusion for a claim request, insurance is paid out from the pool.
