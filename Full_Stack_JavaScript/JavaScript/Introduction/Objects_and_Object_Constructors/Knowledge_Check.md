## Write an object constructor and instantiate the object.

```
function Obj() {

};

const newObj = new Obj();
```

## Describe what a prototype is and how it can be used.

A prototype is the object from which the current object inherits properties and methods.

## Explain prototypal inheritance.

Objects have a hidden \[\[Prototype\]\] property that is either null or another object. Prototypal inheritance means that when an object doesn't have a property javascript searches for the next prototype object that maybe has it until it hits null.

## Understand the basic do’s and don’t’s of prototypical inheritance.

- Do not use `__proto__` property because it's historical.
- Set the object prototype with `Object.create`.
- Prototype property is a reference so don't assign another prototype to another object. Assign it to an empty object.

## Explain what Object.create does.

`Object.create` returns a new object with an assigned prototype.

## How does this behave in different situations?

- In a function invocation
  `this` is the global object.

- In a method invocation
  `this` is the object which calls the method.

- In a constructor invocation
  `this` is the newly created object.

- In an arrow function invocation
  `this` is the context where the arrow function is defined.

- In indirect invocation
  `this` is the first argument of `.call` or `.apply`.

- In bound invocation
  `this` is the first argument of `.bind`
