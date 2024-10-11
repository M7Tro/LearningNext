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




Chapter 3: Optimizing Fonts and Images

Fonts can make website significantly more attractive, but the font files sould be easily accessible. 

When fonts on a website are changed after initial render with default font, it might shoft the layout of a website. Cumulative Layout Shift is a metric used by Google to evaluate the performance and user experience of a website. 

Next.js automatically optimizes fonts in the application when you use next/font module. It downloads font-files at build time and hosts them with other static assets. This way, there are no network requests when user visist the application. 

next/font module is similar to other modules I have used before like react-font. 

You just import fonts from there and use them. 

import {Inter} from 'next/font/google';

export const inter = Inter({subsets: ['latin']});

Then you go to layout.tsx and add className = {`${inter.className} antialised`} to the body tag so that the font is applied to the whole body. 



The <Image> component:

Next.js can server static assets like images under the top-level folder /public.

Files inside /public can be referenced inside the application. 

Adding HTML images manually, you will have to make sure the image is responsive do different sizes, prevent layout shift, etc.

The <Image> component is an extention of the <img> tag that handles several things for you: prevents layout shift, resize the images, etc.

In the public folder, there are the now two images: hero image for desktop and hero image for mobile.

To use the Image component, you need to import it from 'next/image': 
    import Image from 'next/image'

To access images stored directly inside public folder, like when you use src, just write src = "/image-name.png". The public folder will be looked at automatically. 

It is a good practice to explicitly set width and height of the image to avoid layout shift.

To hide the image on smaller screens, the followind tailwind css is added: className = "hidden md:block"


Note that images without dimensions and web fonts are a common cause of the layout shift.




Chapter 4: Creating Layouts and Pages 

So far, the application only has one home page. You can create more routes with layouts and pages. 

Nested routing:

    Next.js uses file-system routing where folders are used to create nested routes. Each folder represents a route segment that maps to a URL segment. 

    You can create separate UIs for each route using layout.tsx and page.tsx files. 

    Page.tsx is a special NextJS file that exprts a React component and it's required for the route to be accessible. 

    Right now, we already have a page file /app/page.tsx. This is the home page associated with the route '/'

    To create a nested route, you can add nested folders with files page.tsx inside them. 

    For example, you can create a page at route '/dashboard' by adding folder 'dashboard' inside app and adding file 'page.jsx' inside dashboard folder.

    page.jsx is supposed to return a Page() component.

    Because the page files in NextJS are given special names, you can colocate different logic/test files/components/etc. with the page file. Those files will not be reachable. 

    Only the content inside the page.jsx file is publically accessible. 

    For example, the lib and ui folders are colocated inside the app folder. They themselves contain no page.jsx files and are not reachable with a url in the browser. 


layout.tsx:

    In NextJS, you can create UI that is accessible by many pages using layout.tsx.

    The layout.tsx export defaults a component Layout that received a {children} prop for type {children: React.ReactNode}

    One of the benefits of using layout.tsx is that on change of route only the components that must be changed will chage: the layout is not re-rendered. This is called partial rendering. 

    Basically, the essence of layout.tsx is to share UI across different pages.

Root layout:

    There is a special type of layout called Root layout. It is contained in the layout.tsx of the app folder. The root layout is required. Any UI added to the root layout will be shared across all pages in the application. 

    Root layout is convenient for modifying html, body or adding metadata.





Chapter 5: Navigating Between Pages 

    Traditionally, to link between pages you would use the html <a> tag. 

    The problem with <a> tags is that there is a full page refresh on every click. 

    In NextJS, you can use <Link> to navigate between pages in the application. 

    <Link> lets you implement client-side navigation with JavaScript. 

    To implement the <Link> component in the current application, go to /app/ui/dashboard/nav-links.tsx and replace the <a> tags with <Link>

    Import the Link component from "next/link"

    The Link tag is similar to a in terms of the attributes you specify. It also uses the "href" attribute. And if you are mapping links/urls from an array, don't forget to add the "key" property. 

    NextJS implements a mechanism called "route splitting". Unlike a traditional React spa that loads the whole application and throws error if one of the pages is somehow incorrect, NextJS isolates code of eac page that corresponds to a different route. If some page produces a malfunction, the rest of the application will still work. 

    Also, whenever a <Link> tag appears in the browser's viewport, NextJS prefetches the code for the page so when user presses the links the code is ready to be displayed. 


Showing active links:

    A common pattern is to show a user what page they are currently on by showing the active link.

    To do this, you need to access user's current URL. Next.js provides a hook called usePathname() that lets you check the user's path.

    Since usePathName is a hook, you must implement the nav-links.tsx as a client component. 

    So just add React's directive "use client"; 
    
    usePathname is accessible from next/navigation module.

    After adding "use client"; you should restart the dev server or it will still show you the error of using a hook in a server component.

    clsx can be used to apply conditional styling and highlight the active link.




Chapter 6: settig up your database

For the tutorial, PostreSQL will be used as a database. 

You can set it up using @vercel/postgres 

I connected my github account to Vercel.com and chose the fullstack folder from learninNext repository. 


To use postresql, install @vercel/postgresql sdk with pnpm  


After tahat, we shall seed the database: add some initial data.

Inside of /app, there is a folder called "seed". It contains a the file route.ts. It is a Next.js Route Handler. 

NextJS request handlers let you have custom request handlers for a giver route. 

By convention, request handlers are defined in route.ts file inside /app. 

Uncommenting the route.ts file inside /app creates a request handler that populates the database. 

The script in route.ts uses SQL to create tables, and data from placeholder-data.ts to populate the tables later. 

While running the development server, navigate into localhost:3000/seed

You must see a message that the database was seeded successfully. After that, you can delete the file. 