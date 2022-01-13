<template>
  <div class="root-AdmissionList " color="#F9F9F9" width="100%" height="200">
    <v-card flat max-width="1450px" tile  >
      <v-app-bar class="AdmissionList" height="150">
        <v-app-bar-title>
        <h2>
        {{ $t('AdmissionList') }}
        </h2>
        </v-app-bar-title>

        <template v-slot:extension>
          <v-tabs >
            <v-tab>{{ $t('NewRequests') }}</v-tab>
            <v-tab>{{ $t('OnHold') }}</v-tab>
            <v-tab>{{ $t('WaitingToReview') }}</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AdmissionList",
  components: {},
};
</script>
<style>
* {
font-family:'Leelawadee';
}
.root-AdmissionList {
 margin: -20px;

}
.AdmissionList {
padding-right: 90px;
padding-left: 90px;

}
</style>
