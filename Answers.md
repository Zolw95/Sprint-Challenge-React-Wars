# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS is a JavaScript library - mostly used for building user interfaces. React solves performance issues with any application that has a lot of DOM operations going on in the background. React solves this problem by not having to run through the whole DOM or any page reloads. It only updates the differences on the previous DOM tree with the new one. This way, lots of DOM operations and refreshes are reduced, improving performance considerably.

1. Describe component state.

    The component state is an object that holds some information that may change over the lifetime of the component.

1. Describe props.

    Props are arguments passed to the component (like just parameters). They are used for passing data from parent to child. They are also immutable.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

    Side effect is anything that affects something outside the scope of the function being executed. In order to handle side effects whenever a state or props change, you can set the state inside the of the side effect. This way whenever props get changed, it will set as the state inside of the effect.