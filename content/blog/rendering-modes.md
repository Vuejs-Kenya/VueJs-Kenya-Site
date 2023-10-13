---
title: 'What the heck is SSR, CSR, SSG and ISR?'
description: "In the modern world, websites are much like applications since we can transact, shop, send messages and do so much more."
headline: 'What the heck is SSR, CSR, SSG and ISR?'
excerpt: "We have a variety of ways we can use to render a page to a user when the user requests for a page in our web application"
imageUrl: 'https://nuxt.com/assets/blog/nuxt-on-the-edge.jpg'
date: '2022-08-10'
dateUpdated: ''
author: 'Selemondev'
authorImg: 'https://github.com/selemondev.png'
---
## What the heck is SSR, CSR, SSG and ISR?

In the modern world, websites are much like applications since we can transact, shop, send messages and do so much more. We have a variety of ways we can use to render a page to a user when the user requests for a page in our web application. In this article, we are going to be looking at the different rendering modes, the advantages and disadvantages of each rendering mode and when to use each one of them. If that sounds interesting lets get started.


### CSR 

CSR stands for Client Side Rendering. It is a technique where all the page resources are loaded on the client's browser rather than on the server. The client(browser) sends a request to the web server and the web server responds by sending an empty HTML page with only a reference to your JavaScript bundle and your CSS styles.

CSR became popular as a method of building Single Page Application as it helped to blur the difference between websites and installed applications.

### How does CSR work?

::list{icon=ph:check-circle-duotone}
- Request is sent to the web server by the client.
- The web server responds by sending back an empty HTML page with only a reference to your JavaScript bundle and your CSS styles.
- The browser then starts downloading the JavaScript of the page.
- The browser then executes the JavaScript.
- The page is now viewable and interactive.
::

### Advantages of using CSR

::list{icon=ph:check-circle-duotone}
- Fast rendering - The page renders quickly after the initial page load time.
- Reduced server workload - Client Side Rendering technologies use the client device's processor to perform the logic thus the processing power is offloaded from the server and transferred down to the client.
- Great with Progressive Web Apps - Client Side Rendered applications work great with PWAs because the code can be entirely rendered on the browser.
- Quicker navigation of the website - CSR offers a quicker navigation because the placeholders are loaded first and there are no round trips made to and from the server.
::

### Disadvantages of using CSR

1. **Not good for SEO** - SEO stands for Search Engine Optimization. CSR is not good for SEO because it takes time to convert JavaScript to HTML and also because the response gotten from the web server is an empty HTML page with only a reference to a JavaScript bundle and CSS styles.

2. **Caching issue** - Since the HTML is not available in the initial render, browsers cannot cache the HTML structure of the page. One way to avoid this issue is to cache the JavaScript but this may prove to be costly as JavaScript files can take up a lot of space in the browser's memory.

3. **Slower initial page load time** - After the browser receives the JavaScript bundle, the end users needs to wait until the JavaScript has been parsed and executed by the browser in order for them see the page which in turn leads to a bad UX (User Experience).

### When to use CSR
::list{icon=ph:check-circle-duotone}

- If you are building an application that has a very complex UI.

- If you need an application that requires a high level of interactivity.

- If you are building PWAs (Progressive Web Apps)
::


### Examples of Client-Side Frameworks

::list{icon=ph:check-circle-duotone}
- Vue.
- React.
- Svelte.
- Angular.
::


### SSR

SSR stands for Server Side Rendering. SSR is a technique where rendering is conducted by the server. It is a rendering mode in which the client sends a request to the web server and instead of the server delivering an empty HTML page, it responds by delivering a fully populated HTML page.

The server will serve the page on demand every single time meaning the HTML is generated on each request.


### How does SSR work

::list{icon=ph:check-circle-duotone}
- Request is sent to the web server by the client.
- The browser then connects to the server, which already has the pre-rendered HTML and CSS code for the page.
- The server then responds by sending back a fully populated HTML page but the page is not yet interactive. The page is viewable but not interactive.
- The browser then downloads the JavaScript of the page which is readily available on the server.
- The HTML page is now made interactive through a process known as Hydration. Hydration is the process of using client-side JavaScript to add application state and interactivity to server-rendered HTML.
- The browser then executes the JavaScript.
- The page is now fully loaded and interactive.
::

### Advantages of using SSR

::list{icon=ph:check-circle-duotone}
- **Good for SEO** - Since Server Side Rendered pages have a fully populated HTML page, search engine bots can crawl and index pages very well.

- **Amazing User Experience** - Since SSR pages have a faster initial page load time, they provide a good user experience.

- **No slow internet connection barrier** - If a user has a slow internet connection, he/she can view the rendered HTML page which contains data while **Hydration** takes place in the background.
::

## Disadvantages of using SSR

1. **Server cost** - SSR applications often need bigger and powerful servers to provide high performances which often lead to high expenses in acquiring and maintaining the servers.

2. **Complexity of caching** - Configuring your cache is usually complex in Server Side Rendered Applications.

3. **Slow page navigations** - If your pages contain complex data, browsing from page to page is often slow because a request must be sent to the server for each page navigation you make and the newly generated HTML gotten from the server is sent to your broswer.


### When to use SSR

::list{icon=ph:check-circle-duotone}
- If you want good SEO performance.
- If you want fast data transmission.
- If you care about the users using your application.
::

### Examples of Server Side Frameworks

::list{icon=ph:check-circle-duotone}
- NuxtJs.
- NextJs.
- SvelteKit.
::

### SSG

SSG stands for Static Site Generator. SSG is a tool that generates a fully static HTML application based on raw data and a set of templates. It automates the task of coding individual HTML pages and generates the pages at build time (ahead of time).

### How SSG works

::list{icon=ph:check-circle-duotone}
- **File reading** - At build time, the SSG reads content from source files, which could include Markdown or data files.

- **Template Rendering** - The content retrieved from the source files is then rendered into HTML using templates.

- **HTML Generation** - Based on the templates and the content data, the SSG framework generates complete HTML files for each page at build time ( ahead of time ).

- **Storage** - The results are then saved in a directory and laid out to match the source files and keep them available when requests to view the contents are made.
::


### Advantages of using SSG

::list{icon=ph:check-circle-duotone}

- **Blazingly fast** - Statically generated websites are blazingly fast because the content of your website is generated as HTML files ahead of time. When a user comes to your application and requests for a certain page, the server will quickly respond and serve it. It doesn't have to do any processing nor generate any HTML, it just serves it.

- **Cheap to host** - Hosting a static website is very cheap since there are not many resources to serve in a static website hence the low memory usage and bandwidth which cuts the cost of hosting services.

- **Plain and simple** - A static website is just a collection of HTML files hosted on a server.

- Great SEO performance.
::

### Disadvantages of using SSG

1. Build time - The biggest disadvantage of SSG is the build time because once the pages are published, the only way to update them is by building the application again which might take some time depending on how many pages you have.


### When to use SSG

::list{icon=ph:check-circle-duotone}
- If you have a lot of static content.

- If you want good SEO performance.

- If you want a fast website.
::

### Examples of SSG Frameworks

::list{icon=ph:check-circle-duotone}
- NuxtJs.

- NextJs.

- Vitepress

- Gridsome.

- Gatsby.

- Jekyll
::


### ISR

- ISR stands for Incremental Static Regeneration. It is a rendering mode that enables developers and content editors to use static generation on a per-page basis without needing to build the entire site.

- With ISR you can retain the benefits of static while scaling to hundreds of pages.

### Examples of frameworks with ISR capabilities

::list{icon=ph:check-circle-duotone}
- NuxtJs.

- NextJs.
::


### Conclusion

With all these great rendering modes to choose from, it is up to you as the developer to decide which rendering mode suits your application and users better.

For my Nuxters, in Nuxt 3, we have a rendering mode known as **Hybrid rendering** that allows you to specify different caching rules per route using **Route Rules**. You can read more about it [here](https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering)