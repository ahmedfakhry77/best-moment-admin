<template>
  <div class="root-other-fetuers">
    <header class="component-header">
      <h2 class="title">
        {{ $t("OtherFeatures") }}
      </h2>
    </header>
    <div class="card-container">
      <v-card class="mx-10 card-of" >
        <v-img src="../assets/icon/contact.png"> </v-img>
        <v-card-text>
          <div>{{ $t("TermsandConditions") }}</div>
        </v-card-text>
      </v-card>
      <v-card class="mx-10 card-of" >
        <v-img src="../assets/icon/about-us.png"> </v-img>
        <v-card-text>
          <div>{{ $t("Aboutus") }}</div>
        </v-card-text>
      </v-card>
      <v-card class="mx-10 card-of" >
        <v-img src="../assets/icon/call.png" > </v-img>
        <v-card-text>
          <div>{{ $t("ContactUs") }}</div>
        </v-card-text>
      </v-card>
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
.card-container {
 display: flex ;
 flex-direction: row;
 justify-content: flex-start;
 margin-right: 90px;
 margin-left: 90px;
}
.card-of {
width: 250px;
padding: 30px;
border-radius: 15%;
}
</style>
