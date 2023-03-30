## What is the difference between the child combinator and the descendant combinator?

The descendant combinator selects all children inside the element while the child combinator selects only the direct children.

## How does the syntax of pseudo-classes and pseudo-elements differ?

- pseudo-classes `:`
- pseudo-elements `::`

## Do pseudo-classes exist somewhere in HTML? Do pseudo-elements?

Pseudo-classes are classes that can be added to the elements while pseudo-elements are generated elements by the CSS.

## Name two ways you could select every second child of an element, starting with the first.

- `element:nth-child(2n)`
- `element:nth-child(even)`

## What is the difference between div:first-child and div:last-child? What will each select?

First-child will select the div which is the first-child of any element and the last-child whill select the div which is the last-child of any element.

## What selector would you use to style a button a user is currently hovering over? How about one that is currently being clicked on?

- `:hover`
- `:focus`

## How could you select all input elements with a type of text?

`input[type="text"]`.

## How could you select all classes that begin with thunder?

`[class^=thunder]`.