<template>
  <div class="root-other-fetuers">
    <header class="component-header">
      <h2 class="title">
        {{ $t("OtherFeatures") }}
      </h2>
    </header>
    <div class="card-container">
    <v-row>
    <v-col xs="12" sm="12" md="4">
     <v-card class="mx-10 card-of" >
        <v-img src="../assets/icon/contact.png"> </v-img>
        <v-card-text>
          <div>{{ $t("TermsandConditions") }}</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col xs="12" sm="12" md="4">
     <v-card class="mx-10 card-of" >
        <v-img src="../assets/icon/about-us.png"> </v-img>
        <v-card-text>
          <div>{{ $t("Aboutus") }}</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col xs="12" sm="12" md="4">
     <v-card class="mx-10 card-of" >
        <v-img src="../assets/icon/call.png" > </v-img>
        <v-card-text>
          <div>{{ $t("ContactUs") }}</div>
        </v-card-text>
      </v-card>
    </v-col>
    </v-row>      
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherFetuers",
  components: {},
};
</script>
<style scoped>
.root-other-fetuers {
  margin: -20px;
  margin-top: -80px;
}
.component-header {
  background-color: #f9f9f9;
  margin-top: 0;
}
.title {
  width: 100%;
  margin: 80px;
  margin-bottom: 40px;
  padding: 20px;
}

.card-of {
max-width: 250px;
padding: 30px;
border-radius: 20px;
cursor: pointer;
}
</style>
