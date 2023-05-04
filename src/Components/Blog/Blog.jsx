import React from 'react';

const Blog = () => {
    return (
        <div className='text-center mt-14'>
            <h1 className='text-[#a82d49] text-[20px] font-[500]'>1. Tell us the differences between uncontrolled and controlled components.</h1>
            <p>In React, there are two ways to handle form inputs: controlled components and uncontrolled components.

                Controlled components are components in which the value of the input is controlled by React, while uncontrolled components are components in which the value of the input is controlled by the DOM.

                The main differences between controlled and uncontrolled components are as follows:

                <br /> <span className='text-[#a82d49] font-[500]'>1. **Data flow:**</span> In controlled components, the data flow is managed by React. The component state is used to keep track of the value of the input, which is then passed down to the input element as a prop. When the user updates the input, an event handler is triggered to update the component state, and the updated value is then passed back down to the input element as a prop. In uncontrolled components, the data flow is managed by the DOM. The value of the input is accessed using a ref, and is then updated using the DOM API.

                <br /> <span className='text-[#a82d49] font-[500]'> 2. **State management:**</span>In controlled components, the component state is used to manage the value of the input. This means that the component needs to handle the state updates, and provide an event handler for the input change. In uncontrolled components, the state is managed by the DOM, and the component does not need to handle the state updates.

                <br /><span className='text-[#a82d49] font-[500]'> 3. **Validation:** </span>In controlled components, validation can be performed before the state is updated. This means that the component can prevent invalid data from being submitted. In uncontrolled components, validation is typically performed after the data is submitted, which can lead to a poor user experience.

                <br />  <span className='text-[#a82d49] font-[500]'>4. **Performance:**</span> Controlled components can be more performant, as they allow for more efficient updates. In uncontrolled components, the DOM needs to be queried to retrieve the value of the input, which can be slower.

                <br /> In general, it is recommended to use controlled components in most cases, as they provide more control and are easier to work with in React. However, there may be cases where uncontrolled components are useful, such as when working with large forms or when dealing with complex input types.</p>
            <h1 className='text-[#a82d49] text-[20px] font-[500]'>2. How to validate React props using PropTypes?</h1>
            <p>Props and PropTypes are important mechanisms for passing read-only attributes between React components.

                We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.

                Below are the validators for the basic data types:

                <li> PropTypes.any: The prop can be of any data type</li>
                <li> PropTypes.bool: The prop should be a Boolean</li>
                <li> PropTypes.number: The prop should be a number</li>
                <li> PropTypes.string: The prop should be a string</li>
                <li> PropTypes.func: The prop should be a function</li>
                <li> PropTypes.array: The prop should be an array</li>
                <li> PropTypes.object: The prop should be an object</li>
                <li> PropTypes.symbol: The prop should be a symbol</li>
            </p>
            <h1 className='text-[#a82d49] text-[20px] font-[500]'>3.Tell us the difference between nodejs and express js.</h1>
            <p> <span className='text-[#a82d49] text-[13px] font-[500]'>Node.js</span> is a run-time environment created to run JavaScript on the server side.
                <span className='text-[#a82d49] text-[13px] font-[500]'> Express.js</span> is a framework for Node.js, so in order to use it, you will use Node.js anyway. <br /> <span className='text-[#a82d49] text-[13px] font-[500]'>Express.js</span> will help you organize your application better. It provides many features which will speed up the development for example mechanism for middlewares, more efficient REST support or robust routing.
            </p>
            <h1 className='text-[#a82d49] text-[20px] font-[500]'>4. What is a custom hook, and why will you create a custom hook?</h1>
            <p>
                A custom hook is a reusable function that contains some common logic that can be shared between multiple React components. The custom hook is usually created using the built-in React hooks like useState, useEffect, useContext, etc.

                We create a custom hook to:
                <br />
                <span className='font-[600] text-[red]'>Reuse Code</span>: If you find yourself repeating the same code in multiple components, then creating a custom hook can help you to extract that code and reuse it.
                <br />
                <span className='font-[600] text-[red]'>Simplify Logic</span>: If you have some complex logic that you want to encapsulate and abstract away from your components, then a custom hook can help you to achieve that.
                <br />
                <span className='font-[600] text-[red]'>Separation of Concerns</span>: If you want to separate the concerns of different parts of your application, then creating a custom hook can help you to isolate that functionality and make it easier to maintain.
                <br />
                Custom hooks are a powerful tool in React, and they can help you to write cleaner, more maintainable code. By extracting common logic into a custom hook, you can reduce the amount of code that you need to write, improve the readability of your code, and make it easier to test and debug.</p>

        </div>
    );
};

export default Blog;