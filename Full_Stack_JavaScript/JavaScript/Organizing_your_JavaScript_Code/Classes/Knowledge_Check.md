## Describe the pros and cons of using classes in JavaScript.

- Pros
    * More elegant
    * Classes are what everyone learned in programming and making the syntax better is a good thing
- Cons
    * The concept of class doesn't exist in JS
    * Classes are rigid while prototypes are very flexible
    * It doesn't give freedom as much as functional programming.

## How does JavaScript’s object creation differ from a language like Java or Ruby?

In JS an object has a `[[Prototype]]` property. In Java or Ruby objects need a class to exist.

## Explain the differences between object constructors and classes.

In classes you can add methods without the `function` keyword, fields are implicit objects. Class methods are non-enumerable. Classes always use `"use strict"`.

## What are “getters” & “setters”?

Getters and setters are accessors for fields. The getter is for when an object property gets read and the setter when it's assigned.

## Describe computed names and class fields.

Computed names are properties or method names that can be built with brackets `[...]` 

## Describe function binding.

You can bind context to a function using a function wrapper or the `bind` method. This way you can prevent "losing" `this`.

## Describe static properties.

Static properties are defined only for the class and not for the instances. They are used to create utlity functions.

## How is inheritance used with classes?

With the `extends` keyword and `super` function. 

## Why is favoring Composition over Inheritance suggested?

With composition you have freedom while with inheritance you are restricted. People can't predict the future, composition is more flexible and powerful.