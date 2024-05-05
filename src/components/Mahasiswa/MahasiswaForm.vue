<template>
  <v-container style="width: 700px; margin-left: 80px;">
    <v-card class="profile-card" elevation="10" style="max-width: 600px;">
      
      <!-- TITLE START -->
      <v-row justify="center" class="mt-3 mb-3">
        <v-card-title class="text-h6 text-md-h5 text-lg-h4">
          <v-btn variant="text" prepend-icon="$vuetify" @click="showRules = true">
            ENTRY DATA MAHASISWA
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
          label="NPM" 
          v-model="mahasiswa.npm" 
          variant="underlined" 
          :rules="[rules.required]" 
        ></v-text-field>
      </v-row>
      <v-row class="ml-2 mr-2">
        <v-text-field 
          label="NAMA" 
          v-model="mahasiswa.nama" 
          variant="underlined" 
          :rules="[rules.required]" 
        ></v-text-field>
      </v-row>
      <v-row class="ml-2 mr-2">
        <v-text-field 
          label="IPK" 
          v-model="mahasiswa.ipk" 
          variant="underlined" 
          :rules="[rules.required, rules.validIpk]"
        ></v-text-field>
      </v-row>
      <!-- FIELD END -->

      <!-- SUBMIT -->
      <v-row justify="center" class="mt-3 mb-3">
        <v-btn rounded="xl" size="small" @click="submitMahasiswa">
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
import { Mahasiswa } from '@/model/Mahasiswa'

export default {
  data() {
    return {
      mahasiswa: new Mahasiswa('', '', 0), // Menambahkan IPK ke objek mahasiswa
      showRules: false, // Variabel untuk mengontrol apakah pesan peringatan ditampilkan atau tidak
      dialog: false // Variabel untuk mengontrol tampilan dialog aksi
    }
  },
  computed: {
    rules() {
      return {
        required: value => !!value || 'Field is required', // Menambahkan aturan validasi required ke dalam rules
        validIpk: value => { // Menambahkan aturan validasi IPK
          const ipk = parseFloat(value.replace(',', '.')); // Ganti koma dengan titik jika ada
          if (isNaN(ipk) || ipk < 0 || ipk > 4) {
            return 'IPK must be between 0 and 4';
          }
          return true;
        }
      };
    }
  },
  methods: {
    submitMahasiswa() {
      if (!this.mahasiswa.npm || !this.mahasiswa.nama || !this.mahasiswa.ipk) {
        // Jika ada bidang yang kosong, tampilkan pesan peringatan
        this.showRules = true;
      } else {
        // Jika data berhasil disimpan, tampilkan dialog aksi
        this.dialog = true;
        // Bersihkan data setelah dialog ditutup
        this.mahasiswa = new Mahasiswa('', '', 0);
        this.showRules = false; // Mengatur kembali showRules menjadi false setelah tombol SUBMIT diklik
      }
    }
  }
}
</script>
