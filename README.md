# Gilded Rose

Hi and welcome to team Gilded Rose.

We are a small inn with a prime location in a prominent city ran
by a friendly innkeeper named Allison. We also buy and sell only the finest
goods. Unfortunately, our goods are constantly degrading in quality as they
approach their sell by date.

We have a system in place that updates our inventory for us. It was developed
by a no-nonsense type named Leeroy, who has moved on to new adventures. Your
task is to add the new feature to our system so that we can begin selling a
new category of items.

## Specifications

First an introduction to our system:

- All items have a `sellIn` field which denotes the number of days we have to
  sell the item.
- All items have a `quality` field which denotes the item's value.
- At the end of each day our system lowers both values for every item.

Pretty simple, right? Well this is where it gets interesting:

- Once the `sellIn` days is less then zero, `quality` degrades twice as fast.
- The `quality` of an item is never negative.
- "Aged Brie" actually increases in `quality` the older it gets.
- The `quality` of an item is never more than `50`.
- "Sulfuras, Hand of Ragnaros," being a legendary item, never has to be sold nor does it decrease in `quality`.
- "Backstage passes to a TAFKAL80ETC concert", increase in `quality` as it's `sellIn` value decreases:
  - `quality` increases by `2` when there are `10` days or less left before the concert.
  - `quality` increases by `3` when there are `5` days or less left before the concert.
  - `quality` drops to `0` after the concert.

We have recently signed a supplier of conjured items. This requires an update
to our system:

- "Conjured" items degrade in `quality` twice as fast as normal items.

Feel free to make any changes to the `updateQuality` method and add any new code as long as everything still works correctly. However, do not alter the `Item` class as it belong to the goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code ownership.

Just for clarification, an item can never have its `quality` increase above 50, however "Sulfuras, Hand of Ragnaros" is a legendary item and as such its `quality` is 80 and it
never alters.

## Instructions

You are tasked with performing the following:

**1. Writing Tests**

Before refactoring the existing codebase, it's a good idea to write sufficient test-cases to codify the behavior of the current `updateQuality` implementation. You can use the specifications above as a guide for what tests you need to write. There is an example test in `gilded-rose.spec.js` to use as a guide.

The tests are written using [vitest](https://vitest.dev/) as the testing framework and are run using `$ npm run test` in your terminal.

**2. Refactoring**

Once you have a strong test suite to prevent you from breaking existing behavior, try to refactor the ugly `updateQuality` function, running the test suite periodically. Notice that the thing that makes `updateQuality` difficult to read is the number of nested conditionals. How can we utilize OOP to reduce the number of conditionals?

**3. Completing the New Feature**

Once your refactoring is complete, write a test to verify the new feature (making "Conjured" items degrade in quality twice as fast) and then implement the feature, ensuring it passes the new test.

That's it. Good luck, traveler!

Source: https://github.com/professor/GildedRose
