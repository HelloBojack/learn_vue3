<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive,shallowRef,ref,markRaw } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import MyTabs from './components/MyTabs.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
let currentTab = ref(Home)
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
  }
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
  <component :is="currentTab"></component>
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
