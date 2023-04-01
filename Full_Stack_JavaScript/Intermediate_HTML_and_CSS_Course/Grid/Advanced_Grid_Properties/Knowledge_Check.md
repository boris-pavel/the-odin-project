## How do you create several grid tracks of the same size without manually typing each one out?

With `repeat()` CSS function.

## What is the difference between a static and dynamic size value?

Static values are values that are absolute and dynamic are values that are relative.

## How can you assign a grid track a flexible value that changes depending on the remaining space available in the grid?

With a fractional unit. (e.g. `grid-template-columns: repeat(3,1fr);`).

## How can you assign grid tracks an uneven distribution of the remaining space in a grid?

By dividing the fractional units (e.g. `grid-template-rows: 2fr 3fr 1fr;`).

## Which CSS functions will return the smallest or largest value supplied to them?

- `min()`
- `max()`

## Which CSS Grid-only function allows you to supply a minimum and maximum track size that is calculated in realtime?

- `minmax()`

## Which global CSS function allows you to supply a minimum, ideal, and maximum value that is calculated in realtime?

- `clamp()`

## What attribute of repeat() can be used to fill in as many grid tracks as possible, given certain constraints?

- `auto-fit`

## What is the difference between auto-fit and auto-fill?

Auto-fill switches to min size if there is enough space in the container for another grid item while auto-fit stretches.