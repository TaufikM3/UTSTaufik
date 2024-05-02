<template>
    <v-navigation-drawer
    expand-on-hover
    rail
    >
    <v-list>
        <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="sandra_a88@gmailcom"
        title="Sandra Adams"
        ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-folder" title="Home" :to="'/'"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="About" :to="'/About'"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Mahasiswa" :to="'/mahasiswa'"></v-list-item>
    </v-list>
    </v-navigation-drawer>
</template>