## What are the main differences between external, internal, and inline CSS?

* The external CSS is saved in another file while internal and inline CSS is saved in the HTML file.
* Rules that are inline have the highest priority followed by internal and then external.

## What is the syntax for class and ID selectors?

`.class` and `#id`.

## How would you apply a single rule to two different selectors?

By using the grouping selector (e.g `selector1, selector2 {}`).

## Given an element that has an id of `title` and a class of `primary`, how would you use both attributes for a single rule?

By chaining selectors (e.g `#title.primary`).

## What does the descendant combinator do?

It selects the children of the current selector.

## Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?

The rule that uses one class selector.