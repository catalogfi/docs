---
sidebar_position: 3
---

# Guardian

The Guardian is a co-signing service for the Instant Account. The Guardian ensures secure transactions by eliminating the possibility of double spending without the need for confirmation delays. It achieves this by providing a second signature for all account operations, meaning it can guarantee no operation will be able to override existing ones. The Guardian does not require any trust from the user as it signs a refund transaction prior to any funding request, meaning the user can withdraw at any point in the event the Guardian becomes unresponsive.

As an extra layer of security, Catalog implements an insurance contract in the event a user fails to receive their funds after the Guardian provides its guarantee. The contract uses an oracle to check for proof-of-exclusion, which alongside the Guardian’s signed commitment, enables the user to redeem an equivalent amount of funds from the insurance pool.
