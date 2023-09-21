---
sidebar_position: 4
---

# Multi-CoW

Coincidence of Wants (CoW) is a model designed by CoW Protocol, which provides an off-chain optimisation to the traditional on-chain market making system. CoW enables users that hold an asset that the other wants to exchange assets directly, without the need for an external market maker or liquidity provider. This model makes perfect sense for Catalog's order book where each swap contains a common denominating cross-chain component which must be accommodated for.

Catalog introduces an adaptation of this model called Multi-CoW (Multichain Coincidence of Wants) to abstract away bridging complexities for coinciding trades.

For example, say Alice is looking to sell 1 BTC for DAI and Bob is looking to buy 1 BTC using USDC. With Multi-CoW, the Bitcoin component of the trade can be executed directly, without any cross-chain bridging. Then, the Catalog protocol simply converts USDC for DAI at the best available rate. This skips the atomic swapping step from BTC to Ethereum for Alice and vice versa for Bob, saving time and fees.
