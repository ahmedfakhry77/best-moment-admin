<template>
  <div class="root-home" width="100%" height="200">
    <v-card flat max-width="1450px" tile>
      <v-app-bar class="home" flat color="#F9F9F9" height="150">
        <v-app-bar-title>
          <h2>{{ $t("RestBuildings") }}</h2></v-app-bar-title
        >

        <template v-slot:extension>
          <v-tabs>
            <v-tab class="test">{{ $t("Allrestbuildings") }}</v-tab>
            <v-tab>{{ $t("Reserved") }}</v-tab>
            <v-tab>{{ $t("Available") }}</v-tab>
            <v-tab>{{ $t("PrivateReservations") }}</v-tab>
            <v-tab>{{ $t("Blacklist") }}</v-tab>
            <v-tab>{{ $t("Draft") }}</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
    </v-card>
    <div class="table-home">
      <Allrestbuildings />
    </div>
  </div>
</template>

<script>
import Allrestbuildings from '../components/Allrestbuildings'
export default {
  name: "Home",
  data() {
    return {
    }
  },
  components: {
    Allrestbuildings,
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
.root-home {
  margin: -30px;
}
h2 {
  width: 300px;
}
.home {
  padding-right: 90px;
  padding-left: 90px;
}
.table-home {
  padding-right: 40px;
  padding-left: 40px;
  width: 1300px;
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
