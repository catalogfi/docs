---
sidebar_position: 1
---

# Introduction

Catalog Swaps use hashed timelock contracts (HTLCs) for execution, which function as a two-way virtual safe.

## How do they work?

To explain the process of initiating a Catalog Swap, let's assume that Alice and Bob have agreed to trade Bitcoin and Ethereum. Alice wants to trade 1 BTC for Bob's 15 ETH.

The first step is for Alice to create a HTLC where she will send her 1 BTC. Once she has deposited the funds, the contract generates a special key that only Alice can access. This key unlocks the funds that Alice sent to the contract. The contract generates a hashed representation of the key, which Alice sends to Bob. This allows Bob to confirm that Alice has locked the funds in the contract, but he cannot access or withdraw the funds yet. After receiving the hashed key, Bob uses it to generate a contract address, where he can deposit his 15 ETH. Since both parties have locked their funds in the HTLCs, all that's left is for Alice to claim the 15 ETH. She can do this because she has access to the key used by Bob to lock his coins. In the process of unlocking Bob's funds, Alice reveals the special key to Bob. Bob can use this key to claim the 1 BTC and finalize the trade.

![HTLC](img/htlc.png)
