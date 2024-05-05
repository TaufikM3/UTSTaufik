<template>
    <v-container style="width: 700px; margin-left: 80px;">
      <v-card class="profile-card" elevation="10" style="max-width: 600px;">
        
        <!-- TITLE START -->
        <v-row justify="center" class="mt-3 mb-3">
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">
            <v-btn variant="text" prepend-icon="$vuetify" @click="showRules = true">
              ENTRY DATA RUANGAN
            </v-btn>
          </v-card-title>
        </v-row>
        <!-- TITLE END -->
  
        <!-- RULES START -->
        <v-row justify="center" class="mt-1" v-if="showRules">
          <span class="red--text">Fill Out The Data Below</span>
        </v-row>
        <!-- RULES END -->
  
        <!-- FIELD START -->
        <v-row class="ml-2 mr-2">
          <v-text-field 
            label="Kode" 
            v-model="ruangan.kode" 
            variant="underlined" 
            :rules="[rules.required]" 
          ></v-text-field>
        </v-row>
        <v-row class="ml-2 mr-2">
          <v-text-field 
            label="Nama Ruangan" 
            v-model="ruangan.nama" 
            variant="underlined" 
            :rules="[rules.required]" 
          ></v-text-field>
        </v-row>
        <!-- FIELD END -->
  
        <!-- SUBMIT -->
        <v-row justify="center" class="mt-3 mb-3">
          <v-btn rounded="xl" size="small" @click="submitRuangan">
            SUBMIT
          </v-btn>
        </v-row>
        <!-- SUBMIT END -->
  
        <!-- DIALOG START -->
        <v-dialog v-model="dialog" max-width="500" rounded="pill">
          <v-card>
            <v-card-title class="headline">Data Successfully Saved</v-card-title>
            <v-card-actions>
              <v-btn color="primary" text @click="dialog = false">OK</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- DIALOG END -->
        
      </v-card>
    </v-container>
  </template>
  
  <script lang="ts">
  import { Ruangan } from '@/model/Ruangan'
  
  export default {
    data() {
      return {
        ruangan: new Ruangan('', ''), 
        showRules: false, 
        dialog: false 
      }
    },
    computed: {
      rules() {
        return {
          required: value => !!value || 'Field is required' 
        };
      }
    },
    methods: {
      submitRuangan() {
        if (!this.ruangan.kode || !this.ruangan.nama) {
          this.showRules = true;
        } else {
          this.dialog = true;
          this.ruangan = new Ruangan('', '');
          this.showRules = false; // Mengatur kembali showRules menjadi false setelah tombol SUBMIT diklik
        }
      }
    }
  }
  </script>
  