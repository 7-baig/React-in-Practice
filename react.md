**Article on the Virtual DOM:**
https://www.codecademy.com/articles/react-virtual-dom
**Keys**
When you make a list in JSX, sometimes your list will need to include something called keys:
<!-- <ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul> -->
A key is a JSX attribute. The attribute’s name is key. The attribute’s value should be something unique, similar to an id attribute.
keys don’t do anything that you can see! React uses them internally to keep track of lists. If you don’t use keys when you’re supposed to, React might accidentally scramble your list-items into the wrong order.
Not all lists need to have keys. A list needs keys if either of the following are true:
The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. The items shouldn’t get amnesia when they render.
A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
If neither of these conditions are true, then you don’t have to worry about keys. If you aren’t sure then it never hurts to use them!
**IMPORT REACT**
    import React from 'react';
This line of code creates a new variable. That variable’s name is React, and its value is a particular, imported JavaScript object:
    // create a variable named React:
    import React from 'react';
    // evaluate this variable and get a particular, imported JavaScript object:
    React // { imported object properties here... }
This imported object contains methods that you need in order to use React. The object is called the React library.
Later, we’ll go over where the React library is imported from, and how the importing process works. For now, just know that you get the React library via import React from 'react';.
You’ve already seen one of the methods contained in the React library: React.createElement(). Recall that when a JSX element is compiled, it transforms into a React.createElement() call.
For this reason, you have to import the React library, and save it in a variable named React, before you can use any JSX at all. React.createElement() must be available in order for JSX to work.
**Component Class**
You’ve learned that a React component is a small, reusable chunk of code that is responsible for one job, which often involves rendering HTML.
Here’s another fact about components: every component must come from a component class.
A component class is like a factory that creates components. If you have a component class, then you can use that class to produce as many components as you want.
To make a component class, you use a base class from the React library: React.Component.
What is React.Component, and how do you use it to make a component class?
React.Component is a JavaScript class. To create your own component class, you must subclass React.Component. You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.
**The Render Function**
A component class is like a factory that builds components. It builds these components by consulting a set of instructions, which you must provide. Let’s talk about these instructions!
For starters, these instructions should take the form of a class declaration body. That means that they will be delimited by curly braces.
The instructions should be written in typical *JavaScript ES2015* class syntax.
There is only one property that you have to include in your instructions: a render method.
A render method is a property whose name is render, and whose value is a function. The term “render method” can refer to the entire property, or to just the function part.
A render method must contain a return statement. Usually, this return statement returns a JSX expression.
**Brilliant Article on *THIS* by Dmitri Pavlutin**
https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
