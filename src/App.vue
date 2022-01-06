<template>
  <v-app class="grey lighten-4 " id="nm">
    <navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <h1>{{translate('head1')}}</h1>
    <v-btn @click="chlan()"><v-icon>mdi-home-city</v-icon></v-btn>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
 
};
</script>
<style>

</style>
