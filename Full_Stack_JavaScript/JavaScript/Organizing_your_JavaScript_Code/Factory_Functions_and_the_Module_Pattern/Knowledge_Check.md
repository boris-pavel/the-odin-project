## Describe common bugs you might run into using constructors.

A common bug is that when using constructors the `instanceof` operator is misleading.

## Write a factory method that returns an object.

```
function objectFactory(arg1,arg2,arg3) {
    return {arg1,arg2,arg3};
}
```

## Explain how scope works in JavaScript (bonus points if you can point out what ES6 changed!).

Scope works like a parent child relationship. The child scope has access to all the variables in the parent scope.

Before ES6 there were only `var` variables that had function scope. After ES6 there were introduced `let` and `const` variables that have block scopes. 

## Explain what Closure is and how it impacts private functions & variables.

Closure means that functions have the same scope from wherever they are called. This makes possible to have private functions and variables that can be changed or called by public functions.

## Describe how private functions & variables are useful.

Private functions and variables are useful for security reasons and when we don't want for somebody else to change the implementation. Easier to test, to refactor.

## Use inheritance in objects using the factory pattern.

```
function objectFactory(arg1,arg2,arg3){
    return{arg1,arg2,arg3};
}

function objectFactoryChild(arg1,arg2,arg3){
    const {arg1,arg2,arg3} = objectFactory(arg1,arg2,arg3);
    const doSomething = () => {console.log("x");};
    return {arg1, doSomething};
}
```

## Explain the module pattern.

Module pattern are the same as factory functions but they wrap the factory function in an IIFE. This way we can choose which function to expose.

## Describe IIFE. What does it stand for?

IIFE stands for Immediately Invoked Function Expression. It is a function wrapped into paranthesis that evaluates the function and it is called.

## Briefly explain namespacing and how it’s useful.

Namespacing is when you use the scope to avoid naming collisions in our programs.