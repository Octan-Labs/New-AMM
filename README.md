# Novel AMM protocol with high CE & tailored market making strategies
## Fundamental problems
- Uniswap v2 is simple but low Capital Efficiency (CE)
- Uniswap v3 has high CE but complicated UX for LPs, non-fungible LP tokens. It requires manually adjusting bins &  unbalanced inventory.
## Solution (a novel AMM - Elastic PLOB): transform MM to asset allocation
We invent a novel price discovery mechanism, namely, **Elastic PLOB** to tailor CE & market making, while keeping simple UX, fungibility & reusability of LP tokens of Uniswap v2. PLOB stands for Parameterized Limit Order-Book, which inspires Octan model.

Octan proposes a novel AMM model, where LPs allocate their liquidity into the pool according to a bonding curve that mimics the general shape of a traditional limit orderbook (LOB). We introduce a novel concept, *Elastic Factor*, to allow the liquidity concentration of the AMM to be automatically adjusted according to the relative trading size. This elasticity ensures unbounded liquidity, thus the pool never runs out of liquidity regardless of the trading size. Our general Elastic model covers the special case of the constant-product market making model $xy=k$. More importantly, it opens a new door to create arbitrary AMM with customized local orderbook shape around the market price as well as tailored liquidity concentration.

The major contribution of this model is that, when the AMM is locally V-shaped, both impermanent loss (IL) and loss-versus-rebalancing (LVR) in this model asymptotically vanish when the trading frequency is high or, equivalently when the pool size is large. Therefore, the pool size will behave exactly like a rebalancing portfolio in the geometric Brownian motion model.

Some other novelties of the model are as follows.
- Possesses desired statistical properties of the traditional LOB model, for instance locally V-shaped (or square root price impact) and price reversals.
- Offers much higher concentrated liquidity than Uniswap V2. To be more precise, its capital efficiency is about 400 times higher than that of the Uniswap V2 model at typical $2\%$ around the mid price.
- Opens a new door for flexible market making (MM) strategies for LPs, thus transforming the MM problem to a multi-funds asset allocation problem. 

Note: loss-versus-rebalancing (LVR) is an important problem among among Nakamoto challenges proposed by A16Z. Octan Elastic model is a response to the problem.

This repo is in development.
Please stay tuned for our updates. Contact Telegram: @paven86  
Visit [Octan Finance pitchdeck](https://drive.google.com/file/d/1cTCvypJ9B4Q6s5kPFoZjSEcmGbUY2DEC/view?usp=sharing)
