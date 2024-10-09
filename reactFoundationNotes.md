This is my notes file for the tech interview preparation for USTHING. 

There are two resources that I must master. 

10 chatpers of React foundations. 

8 chapters of  the dashboard app. 

First, what is next js?

Most popular fullstack javascript framework. 

It is a React framework for the Web. 

Features of Next.js include: built-in optimizations, dynamic HTML streaming, react server components(adding coponents without sending additional client-side JavaScript), Data fetching, CSS support, client and server rendering, server functions (running server code by running a function), route handler (building API endpoints), advanced routing and nested layouts, middleware. 

What problem does Next.js solve?

Improvement of performance, developer experience, and SEO (search engine optimization). Next.js offers SSR (server side rendering) out of the box which improves initial load time of the application. 

Essentially, for someone who already made a few projects with MERN, Next.js could be useful for better performance, SEO optimization and streamlined development. 

Another thing is that quite often, when developing a full stack app, I make an Express app for API endpoints. It means I have to run two processes (for frontend and for backend) and fix CORS errors for testing features. Next.js provides an API layers that lets you build an express app inside of the next js app (which is why it is called a full stack framework).

If you want, you can use Next.JS without any backend: just delete the API folder. 


I will start by learning the foundations of React with Next. There are 10 chapters in total. 

Chapter 1: About React and Nextjs

Next.js is a flexible React framework for building full-stack web applications. 

Things to consider when building web applications: user interface, routing, data fetching, rendering, integrations, infrastructure, performance, scalability, developer experience. 

React is a JavaScript library for building interactive user interfaces. The library provides useful functions (API) to build what you see on the screen in browser. 

Next.js is a React framework that provides building blocks to create web applications. As framework, Next handles the tooling and configuration needed for React, provides additional structure and features, and optimizations for the application. 


Chapter 2: Rendering User interfaces. 

To understand how React works, lets understand how browsers interpret your code to build(or render) the user interface. 

When a user visists a webpage, the server returns an html file. The browser reads the HTML and construct the Document Object Model. 

DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships. 

You can use DOM methods and JavaScript to listen to user events and manipulate the DOM by selecting, adding, updating and deleting specific elements in the user interface. DOM manipulation also allows you to change styles and contents of elements. 






Chapter 3: Updating UI with JavaScript -> Read the JS file on chapter 3

Noteable stuff: 

document.createTextNode(someTextString);

<script type="text/javascript"></script>

HTML file represents the initial page content, while DOM represents the updated page content. 

Using vanilla JS to manipulate DOM is quite verbose: a lot of effor is spent on telling browser HOW it should make something. It would be nice if we could simply tell it WHAT to do: shift from imperative to declarative approach. 

React is a popular declarative library for building UI interfaces. 






Chapter 4: getting started with React. 

react is the core React library. react-dom provides DOM-specific methods that enable you to use React with the DOM. 

Instead of directly manipulating the DOM with plain JavaScript, we can remove previously added JS script and call ReactDOM.createRoot() method to target a specific DOM element and create a root to display your React components in. Then we add root.render() to render React content to the DOM.

ReactDOM.createRoot( someComponent) must be passed a DOM component to be used as the root. 

Once a root component is created with createRoot, you pass the stuff/components you want to render into root.render() method. 

Note that if you pass pure html into root.render(), you will get error. That is because root.render() expects JSX.

JSX is a syntax extention for JavaScript that allows you to describe your UI in a familiar HTML-like syntax. YOu don't need to learn any new syntax outside of HTML and JavaScript. 

The problem is that browsers do not understand JSX out of the box, so you need a JavaScript compiler like Babel to transfrom JSX into regular JavaScript. 

You can add babel into  your code by inserting a script tag from unpkg.com

You will also need to inform Babel what script to transform by specifying type attribute of the script tag as "text/jsx". 

Using React lets you get rid of a lot of repetetive/imperative code. 





Chatper 5:

Building UI with components. 

There are three concepts that you must be familiar with to start buildin React applications: components, props, state. 

Once we go through the basics of React, we will study how to install next.js and use more advanced features like server and client components. 

Components:

User interfaces can be brokend down into smaller reusable building blocks called components. Components let you build self-container, reusable snippets of code. 

More specifically, React components are just JSX code. They are functions that return UI elements. 

Inside the returns statement of a React component function, return JSX.

There are a few things you must know when creating and rendering React components.

First, the names of the componetns must be capitalized: that distinguished those React components from plain HTML and Javascript. 

Second, React components must be used the same way you would use regular HTML tags: add <>. 

You can nest several components together if you want. Just pass the single top-level component to root.render().





Chapter 6: Displaying data with props. 


...


I have actually completed everything until chapter 10 but lost it because did not commit properly. Commit size reached more than 100MB and I just decided to clone what I have and continue learning. 

Chapter 10: Server and Client Components

Server and client environments. 

The client refers to the browser on a user's device that sends a request to the server. 

The server refers to the computer in a data center that stores your application code, receives requests from a client, does some computation, and sends back an appropriate response. 

Each environment has its own set of capabilities and constraints. 

By moving rendering and data fetching to the server, you can redue the amount of code sent to the client, which can improve your application's performance. But, to make your UI more interactive, you need to update the DOM on the client. 

Network boundary is a conceptual line that separates the different environments. 

In React, we choose where to place network boundary in your component tree. You can fetch data and render  a user's post on the server (using server components), then render the interactive LikeButton for ecah post on the client. 

You can create a Nav component that is rendered on the server and shared across pages, but if you want to show an active state for links, you can render the list of Links on  the client. 

Behind the scenes, the components are split into module graphs. The server module graph contains all the server components that are rendered on the server. The client module graph contains all the components rendered on the client. 

After server components are rendered, a special data format called the React Server Component Payload (RSC) is sent to the client. The RSC paylaod contains:
    The rendered result of server components.
    Placholders (or holes) for where client components should be rendered and references to their javascript files. 

React uses this information to consolidate server and client components and update the DOM on the client. 

NextJS uses server components by default. Using server components by default improves performance. 

When you try to run code from chapter nine and see a dev server demo in the browser, you will see an error that useState can only be used with Client components. 

The error could be fixed if the interactive like button that uses useState is moved to a Client Component. 

To make a component a client component you should add a directive 'use client'; 

'use client'; indicates to react that some file with a component is a client component. 

For some reason, importing from LikeButton works while LikeButton.js doesn't.

