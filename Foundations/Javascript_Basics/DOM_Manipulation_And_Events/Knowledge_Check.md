## What is the DOM?

Document Object Model is a tree-like representation of the page.

## How do you target the nodes you want to work with?

With selectors.

## How do you create an element in the DOM?

`document.createElement()`.

## How do you add an element to the DOM?

`parent.appendChild()`.

## How do you remove an element from the DOM?

`parent.removeChild()`.

## How can you alter an element in the DOM?

By selecting it and using camelCase properties to access it's attributes.

## When adding text to a DOM element, should you use textContent or innerHTML? Why?

`textContent` because of security reasons.

## Where should you include your JavaScript tag in your HTML file when working with DOM nodes?

In the `head` element with `defer` attribute.

## How do “events” and “listeners” work?

Events are actions that occur on the webpage. Listeners are used to react to those.

## What are three ways to use events in your code?

1. HTML with on*event* attribute.
2. JS with on*event* property.
3. JS with `addEventListener()` method.

## Why are event listeners the preferred way to handle events?

Using named function can clean your code considerably.

## What are the benefits of using named functions in your listeners?

Separation of concerns.

## How do you attach listeners to groups of nodes?

Using `forEach()` to iterate through all the nodes.

## What is the difference between the return values of querySelector and querySelectorAll?

One is a node and the other is a nodeList.

## What does a “nodelist” contain?

Nodes.

## Explain the difference between “capture” and “bubbling”.

Capture is the natural order the browser catches your events while bubbling is the reverse order.