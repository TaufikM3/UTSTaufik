<template>
  <v-container style="width: 700px; margin-left: 80px;">
<!--CARD START-->
    <v-card 
    class="profile-card" 
    elevation="10"
    title="Aplikasi Ini Dibuat Oleh">
      <v-card-text>
<!--NAME START-->
        <v-text-field
          variant="underlined"
          value="Mohammad Taufik Hidayatuloh"
          readonly
        ></v-text-field>
<!--NAME START-->

<!-- NPM START -->
        <v-text-field
          variant="underlined"
          value="40622100047"
          readonly
        ></v-text-field>
<!-- NPM END -->

<!-- DESCRIPRTION START -->
        <v-textarea
          variant="underlined"
          value="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita maiores voluptatibus rerum voluptates corrupti, quo maxime debitis similique harum officiis quae pariatur vitae repellat quibusdam. Neque ipsam corporis amet deserunt."
          readonly
        ></v-textarea>
<!-- DESCRIPTION END -->

<!-- SOCIAL MEDIA START -->
        <v-subheader>Social Media</v-subheader>
        <v-row >
          <v-col cols="12" sm="6" md="5">
            <h4>@taufikn.t_</h4>
          </v-col>
          <v-col cols="12" sm="6" md="5">
            <h4>341.mth@gmail.com</h4>
          </v-col>
        </v-row>
<!-- SOCIAL MEDIA END -->

      </v-card-text>
    </v-card>
<!--CARD END-->
  </v-container>
</template>

<style scoped>
.rounded-circle {
  border-radius: 50%;
}
.profile-card {
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
</style>


