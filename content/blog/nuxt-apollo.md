---
title: 'Powering your Nuxt 3 app with Graphql using Nuxt Apollo'
description: "GraphQL is a powerful query language that allows developers to easily access and manipulate data from a variety of sources. With Nuxt Apollo, developers can easily integrate GraphQL into their Nuxt 3 applications. In this blog post, we'll explore how to use Nuxt Apollo to power your Nuxt 3 app with GraphQL by building a simple Ricky and Morty web app."
headline: 'Nuxt Apollo'
excerpt: "GraphQL is a powerful query language that allows developers to easily access and manipulate data from a variety of sources. With Nuxt Apollo, developers can easily integrate GraphQL into their Nuxt 3 applications. In this blog post, we'll explore how to use Nuxt Apollo to power your Nuxt 3 app with GraphQL by building a simple Ricky and Morty web app."
date: '2023-01-21'
imageUrl: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1674297646730/8c583654-9a93-422f-94f3-70b7bdcc2e9a.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
dateUpdated: ''
author: 'Selemondev'
authorImg: 'https://github.com/selemondev.png'
---
## Powering your Nuxt 3 app with Graphql using Nuxt Apollo

GraphQL is a powerful query language that allows developers to easily access and manipulate data from a variety of sources. With Nuxt Apollo, developers can easily integrate GraphQL into their Nuxt 3 applications. In this blog post, we'll explore how to use Nuxt Apollo to power your Nuxt 3 app with GraphQL by building a simple `Ricky and Morty` web app.



### What is Nuxt Apollo

`Nuxt Apollo` is a library that allows developers to easily integrate GraphQL into their Nuxt 3 applications. It provides a set of components and functions that make it easy to query and manipulate data from a variety of sources. Nuxt Apollo also provides a set of tools that make it easy to debug and optimize GraphQL queries.

### How to use Nuxt Apollo

Using Nuxt Apollo is relatively straightforward. First, you'll need to install a new Nuxt 3 project configured with Tailwind CSS. Wondering how you can achieve this? Run the following command in your terminal and see the magic happen:

```bash
yarn create tw
```
Hit enter and let the magic take place. Give your desired name for the project, in my case I will give my project name as `nuxt-apollo-project` and hit enter. You will be prompted to choose your desired JavaScript framework, go ahead and select `nuxt` as your preferred JavaScript framework. Choose TypeScript and then hit enter. After the project has been installed, navigate to the appropriate directory within your project by using the "cd" command. In my case, I will run the following command :

```bash
cd nuxt-apollo-project
```

. Then run the following command in your terminal to start the local development server

```bash
yarn dev
```

. Copy the `http://localhost:3000` URL and paste it into your browser. You will see a beautiful page styled with Tailwind CSS. Head back to your VS Code and stop your local development server by pressing Ctrl+C. Next, run the following command in your terminal to install nuxt-apollo:

```bash
yarn add -D @nuxtjs/apollo@next
```

. Then head over to your `nuxt.config.ts` file and register the `nuxtjs/apollo` module as shown below:

```ts
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/apollo'],
  css: ["@/assets/main.css"],
});
```

Next, you are going to install some dependencies for your project for optimization purposes and an amazing user experience. Run the following command in your terminal and hit enter to install the dependencies:

```bash
yarn add --dev nuxt-icon @nuxt/image-edge @nuxtjs/color-mode
```

Here are the use cases for the dependencies that you have installed:

1. @nuxt/image-edge : For image optimization purposes.
    
2. nuxt-icon : An Icon module for Nuxt with 100,000+ ready to use icons from [Iconify](https://iconify.design/). This module allows you to use any of your preferred icons in your project. How amazing is that?
    
3. @nuxtjs/color-mode: A Nuxt module that allows you to easily add support for a "dark mode" or "light mode" toggle to your project. Check out my ([Mastering Nuxtjs Color Modes](https://selemondev.hashnode.dev/mastering-nuxtjs-color-modes-a-step-by-step-guide-to-implement-dark-mode-and-light-mode-on-your-nuxt-3-website)) blog to learn more about this awesome module.
    

Next, go ahead and register the installed modules in your \`nuxt.config.ts\` file as shown below:

```ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', 'nuxt-icon', "@nuxtjs/color-mode", '@nuxt/image-edge'],
  css: ["@/assets/main.css"],
});
```

I am sure by now you might be seeing an error in your terminal yelling at you to configure at least one client when you run `yarn dev`. Don't worry, just paste the following code in your \`nuxt.config.ts\` file:

```ts
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', 'nuxt-icon', "@nuxtjs/color-mode", '@nuxt/image-edge'],
    css: ["@/assets/css/tailwind.css"],
    image: {
        domains: ['rickandmortyapi.com']
    },
    colorMode: {
        classSuffix: ''
    },
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://rickandmortyapi.com/graphql'
            }
        },
    },
})
```

Here are the use cases for the configuration above:

1. \`image\`: This code is specifying a configuration option for the Nuxt.js `image` module. The `image` module is a Nuxt module that allows you to easily work with images in your application. The `domains` property is an array that specifies which domains are allowed to be used for loading images in the application. In this case, the array contains only one value: '[rickandmortyapi.com](http://rickandmortyapi.com)'. This means that the application will only load images from the domain '[rickandmortyapi.com](http://rickandmortyapi.com)' and will ignore any image URLs that don't match this domain. This can be used as a security measure to prevent the application from loading malicious images from untrusted sources.
    
2. \`colorMode\`: This code is specifying a configuration option for the @nuxtjs/color-mode module. The `colorMode` module is a Nuxt.js module that allows you to easily add support for a "dark mode" or "light mode" toggle to your application. The `classSuffix` property is a string that is used as a suffix for the CSS classes that are added to the HTML elements when the color mode is changed. In this case, the value is an empty string. When the color mode is changed, the module will add CSS classes to the HTML elements. By default, these classes will be in the format of `.light-mode` or `.dark-mode`.
    
3. \`apollo\`: This code is setting up an Apollo client in your project. Specifically, it is configuring a single client named "default" and provides it with a HTTP endpoint of "[**https://rickandmortyapi.com/graphql**](https://rickandmortyapi.com/graphql)". This means that when the application makes GraphQL requests, it will use this endpoint as the target for those requests.
    

## Create `components` directory

Next, go to the root of your project and create a \`components\` directory. After creating the components directory, create the following files:

1. `CharacterComponent.vue`: In this component, you will be fetching and displaying the data.
    
2. `ToggleBtn.vue`: In this component you will be writing the logic that will enable you to add \`darkMode\` to your project.
    
3. `Header.vue`: In this component, you will be creating your Navbar.
    

Head over to your `CharacterComponent.vue`\` file and paste the following code:

```ts
<script lang="ts" setup>
// This code is importing a type called CharacterTypes from a 'CharactersType' file. It then defines a GraphQL query that retrieves a list of characters and their associated information, such as name, image, gender, etc. The `useQuery` composable is then called, passing in the query, to fetch the data from the GraphQL API. The composable returns an object with properties for the query result, any errors, and the loading state. The result is destructured and is typed with CharacterTypes.
import type { CharacterTypes } from "../Types/CharactersType"
const query = gql`
query {
  characters {
    results {
      id
      name
      image
      gender
      species
      status
      location {
        id
        dimension
        name
      }
    }
  }
}
`;

const { result, error, loading } = useQuery<CharacterTypes>(query);
</script>

<template>
  <div>
    <div v-if="error" class="grid-layout w-full min-h-screen">
      <h1 class="text-red-500 font-bold text-xl md:text-2xl">{{ error }}</h1>
    </div>
    <div v-if="loading" class="grid-layout w-full min-h-screen">
      <Icon name="ph:spinner" class="text-6xl animate-spin text-red-500" />
    </div>
    <div class="grid-layout cursor-pointer md:flex md:flex-wrap md:justify-center">
      <div v-for="character in result?.characters?.results" :key="character.id">
          <div class="h-56 w-72 rounded-md bg-gray-300/60 dark:bg-[#3C3E44]/40 m-2 flex justify-between  md:w-[400px]">
            <div>
              <nuxt-img :src="character.image" class="h-full w-40 md:w-52" />
            </div>
            <div class="space-y-3 w-52 p-2">
              <h1 class="text-xl font-bold dark:text-white md:text-2xl">{{ character.name }}</h1>
              <div class="flex items-center space-x-2">
                <p :class="[character.status === 'Alive' ? 'bg-green-500' : 'bg-red-500']"
                  class="h-3 w-3 rounded-full"></p>
                <h1 class="text-xl font-semibold dark:text-white">{{  character.status }}</h1>
                <span class="dark:text-white"> - </span>
                <h1 class="text-xl font-semibold dark:text-white">{{ character.species  }}</h1>
              </div>

              <div>
                <h1 class="text-xl font-semibold dark:text-white">{{ character.gender  }}</h1>
              </div>

              <div>
                <h1 class="text-xl font-semibold dark:text-white">{{ character.location.name  }}</h1>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
```

Then head over to your `ToggleBtn.vue` file and paste the following code:

```ts
<script lang="ts" setup>
// This code uses the useColorMode composable to obtain the current color mode preference and creates an onClick function to toggle between light and dark mode by changing the preference value using a ternary operator.
const colorMode = useColorMode();
const onClick = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>

<template>
    <button @click="onClick"
        class="py-1 px-2 bg-gray-200 rounded-md dark:bg-gray-200/10 dark:hover:bg-gray-200/20 transition-delay-timer">
        <ColorScheme placeholder="...">
            <Icon v-if="colorMode.value === 'dark'" name="ph:sun" class="w-4 h-4 dark:text-white" />
            <Icon v-else name="ph:moon" class="w-4 h-4" />
        </ColorScheme>
    </button>
</template>
```

Then, head over to your `Header.vue` file and paste the following code:

```ts
<template>
    <div class="flex justify-between items-center px-2 w-full h-14 border-b border-gray-200 dark:border-gray-900">
        <div>
            <img src="../assets/image/ricky-img.png" alt="Ricky Image" class="w-33 h-10">
        </div>
        <ToggleBtn/>
    </div>
</template>
```

You may have noticed that we haven't imported the `ToggleBtn` component. One of the great features of Nuxt 3 is component `auto-importation`, meaning you don't have to import your components, Nuxt handles that for you. As for the image, don't worry I will link my GitHub repo at the end of this article for you to be able to get the image.

## Create `layouts` directory

Next, go to the root of your project and create a `layouts` directory and add the following file :

1. `default.vue` : In this layout file you will store the layout template that will define the global structure of your project or application.
    

Head over to your `default.vue` file and paste the following code:

```ts
<template>
    <div>
        <Header/>
        <slot/>
    </div>
</template>
```

## Pages directory

Head over to your `index.vue` file and paste the following code :

```ts
<template>
    <CharacterComponent/>
</template>
```

## Create a `Types` directory

Next, go to the root of your project and create a `Types` directory and add the following file:

1. `CharactersType.ts` : In this file you will define the types of the characters' data that you will get after a successful query.
    

Paste the following code into the `CharactersType.ts` file:

```ts
export interface CharacterTypes {
    characters: Characters;
}

export interface Characters {
    results:    Result[];
    __typename: string;
}

export interface Result {
    id:         string;
    name:       string;
    image:      string;
    gender:     Gender;
    species:    Species;
    status:     Status;
    location:   Location;
    __typename: ResultTypename;
}

export enum ResultTypename {
    Character = "Character",
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    id:         null | string;
    dimension:  Dimension | null;
    name:       string;
    __typename: LocationTypename;
}

export enum LocationTypename {
    Location = "Location",
}

export enum Dimension {
    DimensionC137 = "Dimension C-137",
    ReplacementDimension = "Replacement Dimension",
    TesticleMonsterDimension = "Testicle Monster Dimension",
    Unknown = "unknown",
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
```

## `app.vue` file

Next, head over to your `app.vue` file and paste the following code:

```ts
<script setup lang="ts">
// This code is using the useHead composable to dynamically set the title and link properties of the <head> section in the HTML document. It sets the title to "Ricky and Morty" and link rel to "icon" type is "svg" and the href to an SVG icon of a fire.
useHead({
  title: "Ricky and Morty",
  link: [{ rel: 'icon', type: 'svg', href: "https://api.iconify.design/fluent-emoji-flat:fire.svg" }],
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
```

In this file, we are using the `useHead` composable to set our metadata. Here are the use cases for the rest of the components:

1. `NuxtLayout`: This is a built-in Nuxt.js component that is used to wrap the content of the pages. It acts as a placeholder for the actual content of the page, which is passed to it via the `NuxtPage` component.
    
2. `NuxtLoadingIndicator`: This is a built-in Nuxt.js component that is used to display a loading indicator while the page is being loaded. It is rendered inside the `NuxtLayout` component, which means that it will be displayed on top of the page content.
    
3. `NuxtPage`: This is a built-in Nuxt.js component that is used to render the content of the page. The `NuxtPage` component is responsible for rendering the page's template and passing the page's data to it.
    

## Styling our project

Lastly, head over to the `assets` directory and then into the `css` directory and lastly into the `tailwind.css` file and paste the following code:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;


@layer base {
    body {
        @apply bg-white w-full min-h-screen dark:bg-black
    }
}

@layer components {
    .grid-layout {
        @apply grid place-items-center
    }
}
```

Lastly, run the `yarn dev` command in your terminal and then navigate to the provided localhost link and enjoy looking at your `Ricky And Morty` app.

## Benefits of using Nuxt Apollo

Using Nuxt Apollo provides several benefits:

1. Provides an easy way to query and manipulate data from a variety of sources.
    
2. Provides a set of tools that make it easy to debug and optimize GraphQL queries.
    

## Conclusion

Nuxt Apollo is a powerful library that makes it easy to integrate GraphQL into Nuxt 3 applications. It provides a set of components and functions that make it easy to query and manipulate data from a variety of sources. Additionally, it provides a set of tools that make it easy to debug and optimize GraphQL queries. With Nuxt Apollo, developers can easily power their Nuxt 3 apps with GraphQL.

As promised, here is the GitHub repository for the [project](https://github.com/selemondev/nuxt-3-apollo) . Thanks for reading and happy coding ✨.

## Useful links

1. [Nuxt 3](https://nuxt.com/)
    
2. [Nuxt Apollo](https://apollo.nuxtjs.org/)
    
3. [Ricky And Morty API](https://rickandmortyapi.com/documentation/)
    
4. [TailwindCss](https://tailwindcss.com/)