<template>
    <v-navigation-drawer
    expand-on-hover
    rail
    >
    <v-list>
        <v-list-item
        prepend-avatar="SMA.JPG"
        subtitle="341.mth@gmail.com"
        title="Mohammad Taufik Hidayatuloh"
        ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-folder" title="Home" :to="'/'"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Dosen" :to="'/dosen'"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Mahasiswa" :to="'/mahasiswa'"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Ruangan" :to="'/ruangan'"></v-list-item>
        <v-icon :icon="mdiAccount" />
    </v-list>
    </v-navigation-drawer>
</template>

<script setup>
  import { mdiAccount } from '@mdi/js'
</script>