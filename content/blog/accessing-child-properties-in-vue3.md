---
title: 'Accessing child component properties in Vue 3'
description: "When building Vuejs applications, you may need to access child component properties from an outside component. This may be in scenarios where the need to emit events is unnecessary.
Accessing components with refs is possible due to the open nature of components in Vuejs2. While in Vuejs 3 components are closed by default, we cannot access component properties using refs.
Some of the Vuejs component properties we can access include functions, objects, variables e.t.c"
headline: 'Accessing child component properties in Vue 3'
excerpt: "When building Vuejs applications, you may need to access child component properties from an outside component. This may be in scenarios where the need to emit events is unnecessary.
Accessing components with refs is possible due to the open nature of components in Vuejs2. While in Vuejs 3 components are closed by default, we cannot access component properties using refs.
Some of the Vuejs component properties we can access include functions, objects, variables e.t.c"
date: '2023-08-30'
imageUrl: 'https://api.iconify.design/logos:vue.svg'
dateUpdated: ''
author: 'John Philip'
authorImg: 'https://github.com/dxphilo.png'
---
## Storyblok: The Headless CMS that takes your content to the next level :sparkles:

In the digital age, businesses encounter numerous difficulties when it comes to creating and delivering content that resonates with their audience. Traditional CMS ( Content management systems ) can be inflexible to use, which can result in reduced productivity, lower engagement rates, and decreased customer satisfaction.

### Accessing component properties in Vuejs 2 (Options API)

We can access a components properties in Vuejs 2 using component template Refs. Ref is a special attribute in Vuejs that we can leverage to obtain a direct reference to specific DOM elements or child component instance after it is mounted. In the code snippet below, we will look at how this is possible.
To access Vuejs components properties, we will assign a reference ID to the child component. See example below where we are accessing the doSomething function on the child component from the parent.

#### Child component

```js
<div>
  <h1>Child component</h1>
</div>
<script>
export default {
methods:{
  doSomething(){

  }}
</script>
```

#### Parent component

```js
<div id="app">
  <ChildComponent ref="childComponent" />
</div>
<script>
import ChildComponent from './ChildComponent'
export default {
  components: {
   ChildComponent
  },
  mounted () {
    //invoke doSomething function on child component
    this.$refs.childComponent.doSomething();
  }
}
</script>
```

### Accessing component properties in Vuejs 3 (Composition API)

Components with the script setup are closed by default and we cannot access their property bindings with ref. This means we cannot directly use template refs to access a components properties as seen with Options API.

In Vuejs 3, we can leverage the defineExpose macro to expose a components instance. defineExpose exposes the components instance to outside components and makes them accessible using refs. These exposed properties then can be accessed by the parent component.

Note: To access the child component properties, the parent component needs to get the child component instance via template refs. See examples below.

#### Exposing component methods with defineExpose

```js
<div>
  <h1>Child component</h1>
</div>
<script setup lang="ts">
  function doSomething(){
    // do smething
  }
  defineExpose({ doSomething });
</script>
```

Remember you can expose as much properties as you want and are not limited on number of properties to expose.

#### Accessing exposed child properties from parent component

```js
<div id="app">
  <ChildComponent ref="childComponent" />
</div>
<script setup lang="ts">
import { ref, onMounted} from 'vue';
import ChildComponent from './ChildComponent';
const childComponent = ref();
onMounted(() => {
  //here we access the exposed `doSomething` function
  //and invoke it when the parent component is mounted
  childComponent.value.doSomething();
});
</script>
```

### Final Thoughts

While this may a good tip to use, be cautious for scenarios where some alternatives are efficient. You can look into other alternatives such as:
 - Use state management- at times it can be better to use state management i.e (Vuex, Pinia) to prevent the overhead of accessing such properties directly on the child component.
 - Emit events back to the parent component. This can be useful especially if the methods are invoked by user actions such as button click e.t.c.