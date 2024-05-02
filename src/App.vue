<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Taufik from '@/components/Home/TampilanHome.vue'
import LeftNav from '@/components/Navbar/LeftNav.vue'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <LeftNav></LeftNav>
    
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <RouterView></RouterView>
    </v-main>
  </v-layout>
</template>