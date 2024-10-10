These are the notes I am taking for the full stack dashboard app tutorial in NextJS.

pnpm is recommended as the package panagare: a faster alternative to npm.  I installed it globally with npm install -g pnpm

I installed the started files with a long command: npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm


Some of the core structure files of the project folder are: 
    app , node_modules, public, .env, .gitignore, next.config.mjs

app contains all the routes, components, and logic of the application. This is where most of the work is done. 

app/lib contains functions used in the application, such as reusable utility functions and data fetching functions. 

app/ui contains all the UI components of the application: cards, tables, forms. 

/public contains all the static assets for the application. 

There are also config files like next.config.js 


//
Let's recap again on the way NextJS works.

NextJS is a server-rendred React framework. 

Rendering is about combining a template (HTML + CSS) and data.

When you send a request to NextJS, it sends you rendered html page. It can immedieately be displayed to the user. But it does not yet have the custom JavaScript/framework functionality. So JS code must be sent later and then used on client to rebuild the app and make it fully functioning/interactive. That is called hydration. Hydration transforms static HTML template into fully interactive on the client side. 



//Let's get back to the tutorial Chapter 1

Placeholder data: 

When buildign user interfaces, it might be helpful to have some placeholder data to be displayed while the databse or API data is not available yet. 

You can get placeholder data from JSON stored on server or from some API

In this project, there is placeholder data in app/lib/placeholder-data.js

"Seeding" a database means populating it with some data.

Many files in the project have the .ts extension: they are writted in TypeScript. 

In app/lib/definitions we define a bunch of types using typescript. Those types provide an explicit definition of the kind of data that we want to pass/get to/from database.

Install the necessaey packages with pnpm i

Then run the dev server with pnpm dev

Conclusion of chapter 1: the main folder in which you work when developing a NextJS application is the 'app' folder. TypeScript is the modern standard of web development that lets you set more explicit rules and avoid errors. Use pnpm as a package manager. To produce a type in typeScript write: export type TypeName = {fieldOne: string; fieldTwo: number; fieldThree: "value1" | "value2";}





Chapter 2: CSS styling

Currently, the homepage does not have any styles.

What are the different ways you can style a NextJS application?

Global CSS styles:

Inside /app/ui, you can find global.css. This file can be used to apply styles too ALL the components in the application. 

global.css can be imported in any component of the application, but it is usually good practice to import it at the top-level compnents. 

Go to app/layout.tsx and import global.css. After doing that, the dev server should return a beautiful page. 

The import was something I haven't seen before: import "@/app/ui/global.css"

If you take a look at global.css, you will find that there aren't really any CSS classes. But it does use tailwind directives: @tailwind base; @tailwind components; @tailwind utilities;

Tailwind is a CSS framework that speeds up development and lets you write utility classes directly in your TSX markup. 

In Tailwind, you style by adding class names: className = "text-blue-500"

When you create a nextJS app with create-next-app, it will ask you if you want to use TailWind. Selecting "yes" will automatically install necessary packages to use Tailwind.



CSS Modules:

if you prefer a more traditional approach of handling CSS and keep styles separate from JSX, CSS modules are a good alternative. 



clsx library:

There are cases when you want to style a component conditionally: depending on some state or other condition.

clsx is a library that lets you toggle classes easily. 

You can apply conditional styleing with clsx like this:
    className = {clsx("flex flex-wrap border-red-300", {"bg-red-300": state == "valueOne", "bg-bluee-300": state == "valueTwo"})}


Other styling solutions include Sass and CSS-in-JS libraries like styled-jsx, etc.

