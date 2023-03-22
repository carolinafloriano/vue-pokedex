<script setup>
import axios from "axios";
import { useStore } from "./store/index.js";

const store = useStore();
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive> <component :is="Component" /> </keep-alive>
  </router-view>
</template>

<style>
#app {
  padding: 0;
  height: 100vh;
}
</style>
