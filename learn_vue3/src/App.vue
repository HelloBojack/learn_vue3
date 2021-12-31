<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive,shallowRef,ref,markRaw,defineAsyncComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import MyTabs from './components/MyTabs.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
const  Contact = defineAsyncComponent(() => import('./components/Contact.vue'))
const  Counter = defineAsyncComponent(() => import('./components/Counter/index.vue'))
const  VModelComponent = defineAsyncComponent(() => import('./components/VModelComponent/index.vue'))

let currentTab = ref(markRaw(Home))
let currentTabName = ref('Home')
let tabs=[
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact
  },
  {
    name: 'Counter',
    path: '/counter',
    component: Counter
  },
  {
    name: 'VModelComponent',
    path: '/VModelComponent',
    component: VModelComponent
  },
]
const click = (e:{name:string,path:string,component:any})=>{
  currentTab.value=markRaw(e.component)
  currentTabName.value=e.name
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

  <MyTabs :tabs="tabs" >
  <template v-slot:tab="{item}">
    <button @click="click(item)" :class="item.name===currentTabName?'active':''">{{item.name}}</button>
  </template>
  </MyTabs>
  <br>
  <keep-alive>
    <component :is="currentTab"></component>
  </keep-alive>
  <!-- <HelloWorld :msg="msg" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active{
  color:red
}
</style>
