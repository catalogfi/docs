---
sidebar_position: 1
---

# Introduction

All Catalog Accounts come in-built with an Instant Wallet. An Instant Wallet is a special type of wallet which enables instant transfers and cross-chain swaps, without requiring any form of trust. It does this through a 2-of-2 multi-sig requirement with the [Guardian](guardian) component, which allows users to bypass confirmation delays.

## Funding

Before a user funds an Instant Wallet, they send a request to the Guardian to sign a refund transaction in the event the Guardian stops signing transactions or goes offline. This transaction can be signed by the user at any point to withdraw their funds. Once the user has received this transaction, they can safely fund their Instant Wallet knowing they will have full control of their assets through the entire process.

## Sending

When a user wishes to send funds to another address, they simply sign the transaction and send it to the Guardian. The Guardian verifies that the transaction is not attempting a double-spend, and promptly provides the second signature. The Guardian provides a new refund transaction to the user, ensuring they still have the freedom to withdraw after their current one has been invalidated. The Guardian then gives an instant guarantee to the recipient that they will receive their funds. This mechanism enables Catalog's instant cross-chain swaps.

## Refunding

When a user wishes to withdraw their funds from their Instant Wallet, they simply sign and submit the pre-signed refund transaction provided by the Guardian.
