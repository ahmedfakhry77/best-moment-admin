<template>
  <div class="root-home" width="100%" height="100%">
   <v-row justify="end " class="dshome">
    <v-col sm="12" md="6">
         <HomeDash />
        </v-col>
   </v-row>
      <v-app-bar  flat color="#F9F9F9" height="100%" class="home">
         <v-app-bar-title>
          <h2>{{ $t("RestBuildings") }}</h2>
        </v-app-bar-title>        
        <template v-slot:extension>
          <v-tabs>
            <v-tab class="test" @click="activetab = '1'">{{
              $t("Allrestbuildings")
            }}</v-tab>
            <v-tab>{{ $t("Reserved") }}</v-tab>
            <v-tab>{{ $t("Available") }}</v-tab>
            <v-tab>{{ $t("PrivateReservations") }}</v-tab>
            <v-tab @click="activetab = '2'">{{ $t("Blacklist") }}</v-tab>
            <v-tab>{{ $t("Draft") }}</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
    <div class="table-home" v-if="activetab === '1'">
      <Allrestbuildings />
    </div>
    <div class="table-home" v-if="activetab === '2'">
      <blacklist />
    </div>
  </div>
</template>

<script>
import Allrestbuildings from "../components/Allrestbuildings";
import blacklist from "../components/blacklist";
import HomeDash from "../components/HomeDash";

export default {
  name: "Home",
  data() {
    return {
      activetab: "1",
    };
  },
  components: {
    Allrestbuildings,
    blacklist,
    HomeDash,
  },
};
</script>
<style>
@font-face {
  font-family: "leelawad";
  src: local("leelawad"), url(../fonts/leelawad.ttf) format("truetype");
}
@font-face {
  font-family: "Tajawal-Light";
  src: local("Tajawal-Light"),
    url(../fonts/Tajawal-Light.ttf) format("truetype");
}
* {
  font-family: "Leelawadee";
}
.test {
  font-family: "Tajawal";
}

h2 {
  width: 300px;
}
.home {
  padding-right: 40px;
  padding-left: 40px;
}
.dshome {
 background-color: #f9f9f9;
}
.table-home {
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  margin-top: 15px;
}
.table-photo {
  margin: 15px;
}
.location {
  margin: 5px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.location-icon {
  width: 20px;
  height: 20px;
  margin-right: 9px;
  margin-left: 9px;
}
.btn-photo {
  margin: 5px;
}
.eye {
  width: 25px;

  margin-right: 25px;
  margin-left: 25px;
}

</style>
