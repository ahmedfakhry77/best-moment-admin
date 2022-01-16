<template>
  <div class="root-AdmissionList" width="100%" height="200">
    <v-card flat max-width="100%" tile>
      <v-app-bar class="AdmissionList" height="150" color="#F9F9F9" flat>
        <v-app-bar-title>
          <h2>
            {{ $t("AdmissionList") }}
          </h2>
        </v-app-bar-title>

        <template v-slot:extension>
          <v-tabs>
            <v-tab @click="activetab = '1'">{{ $t("NewRequests") }}</v-tab>
            <v-tab @click="activetab = '2'">{{ $t("OnHold") }}</v-tab>
            <v-tab @click="activetab = '3'">{{ $t("WaitingToReview") }}</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
    </v-card>
    <div class="table-home" v-if="activetab === '1'">
      <Admission />
    </div>
    <div class="table-home" v-if="activetab === '2'">
      <OnHold />
    </div>
    <div class="table-home" v-if="activetab === '3'">
      <WaitingToReview />
    </div>
  </div>
</template>

<script>
import Admission from "../components/Admission";
import OnHold from "../components/OnHold";
import WaitingToReview from "../components/WaitingToReview";

export default {
  name: "AdmissionList",
  data() {
    return {
      activetab: "1",
    };
  },
  components: {
    Admission,
    OnHold,
    WaitingToReview,
  },
};
</script>
<style>
* {
  font-family: "Leelawadee";
}
.root-AdmissionList {
  margin: -20px;
}
.AdmissionList {
  padding-right: 40px;
  padding-left: 40px;
}
</style>
