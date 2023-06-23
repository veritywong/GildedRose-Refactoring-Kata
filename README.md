# GildedRose-Refactoring-Kata

## Approach
I started by reading throught the specifications and taking notes on each shop item and how they needed to be updated.
I then wrote tests for each item to show that the current code fulfilled the criteria.
Once I had all tests passing, I started refactoring the codebase. I started by separating each update into its own item category and calling this in the general updateQuality function. As I updated each item, I ran the tests to ensure the requirementes were still being met.
Once I had refactored the existing code, I created a new test for the new item to be added, 'Conjured', I then went on to write a function update for this.
Once I had all tests passing, I re-read through the specifications, and added any tests and specifications I had missed.
Finally I updated the README to summarise the expectations for each item, and to include an input and output expectation for each item and each test. 

======================================
Gilded Rose Requirements Specification
======================================

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a
prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods.
Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We
have a system in place that updates our inventory for us. It was developed by a no-nonsense type named
Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that
we can begin selling a new category of items. First an introduction to our system:

	- All items have a SellIn value which denotes the number of days we have to sell the item
	- All items have a Quality value which denotes how valuable the item is
	- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

	- Once the sell by date has passed, Quality degrades twice as fast
	- The Quality of an item is never negative
	- "Aged Brie" actually increases in Quality the older it gets
	- The Quality of an item is never more than 50
	- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
	- "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
	Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

	- "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything
still works correctly. However, do not alter the Item class or Items property as those belong to the
goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code
ownership (you can make the UpdateQuality method and Items property static if you like, we'll cover
for you).

Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a
legendary item and as such its Quality is 80 and it never alters.

## Notes from Requirement Specification

class Shop updates the quality and sellIn of each item. The sellIn is the number of days to sell the item.

When Regular Item:
    qualityUpdates => sellIn - 1, quality - 1
    (quality can not go below 0)
    if sellIn < 0 , quality - 2

When Aged Brie:
    qualityUpdates => sellIn -1, qualtiy + 1
    (quality can not go above 50)


When Sulfuras:
    qualityUpdates => sellIn always 0, quality always 80

When BackStage Passes:

    sellIn > 5 && sellIn <= 10 , quality +2
    sellIn <=5   , quliaty +3
    sellIn <= 0 , quality = 0

ADD
'Conjured' - quality -2 each day, and -4 when sellIn < 0

## INPUTS and OUTPUTS


Regular Item:   
            INPUTS           || OUTPUTS
            sellIn, quality
            1, 1             || 0, 0
            1, 0             || 0, 0 
            0, 2             || -1, 0

Aged Brie:  
            INPUTS           || OUTPUTS
            sellIn, quality
            1, 1             || 0, 2
            10, 50           || 9, 50  
            0, 2             || -1, 0  

Backstage passes to a TAFKAL80ETC concert:

            INPUTS           || OUTPUTS
            sellIn, quality
            20, 1            || 19, 2
            10, 1            || 9, 3  
            5, 1             || 4, 4
            0, 10            || -1, 0
            15, 50           || 14, 50
            10, 50           || 9, 50
            5, 50            || 4, 50

Conjured:
            INPUTS           || OUTPUTS
            sellIn, quality
            5, 50            || 4, 48
            0, 4             || -1, 0

Sulfuras, Hand of Ragnaros:
            INPUTS           || OUTPUTS
            sellIn, quality
            0, 80            || 0, 80