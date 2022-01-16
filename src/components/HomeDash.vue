<template>
  <div class="dash">
    <v-card class="mx-auto" max-width="744" outlined elevation="6" shaped>
      <span class="card-header"> {{ $t("Users") }} </span>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="row-item">
            <div class="card-item-col">
              <v-img
                src="../assets/icon/Groupdown.png"
                max-height="52"
                max-width="52"
                class="slide-icon"
              >
              </v-img>
              <span class="card-number"> 7800</span>
              <div class="card-item-title">{{ $t("Downloading") }}</div>
            </div>
            <div class="card-item-col">
              <v-img
                src="../assets/icon/Group.png"
                max-height="52"
                max-width="52"
                class="slide-icon"
              >
              </v-img>
              <span class="card-number"> 7800</span>
              <div class="card-item-title">{{ $t("Userno") }}</div>
            </div>
            <div class="card-item-col">
              <v-img
                src="../assets/icon/Grouphome.png"
                max-height="52"
                max-width="52"
                class="slide-icon"
              >
              </v-img>
              <span class="card-number"> 7800</span>
              <div class="card-item-title">{{ $t("Difference") }}</div>
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card class="mx-auto" max-width="744" outlined shaped elevation="6">
      <span class="card-header"> {{ $t("Providers") }} </span>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="row-item">
            <div class="card-item-col">
              <v-img
                src="../assets/icon/Groupup.png"
                max-height="52"
                max-width="52"
                class="slide-icon"
              >
              </v-img>
              <span class="card-number"> 7800</span>
              <div class="card-item-title">{{ $t("Downloading") }}</div>
            </div>
            <div class="card-item-col">
              <v-img
                src="../assets/icon/Grouphome.png"
                max-height="52"
                max-width="52"
                class="slide-icon"
              >
              </v-img>
              <span class="card-number"> 7800</span>
              <div class="card-item-title">{{ $t("Rests") }}</div>
            </div>
            <div class="card-item-col">
              <v-img
                src="../assets/icon/Grouphome.png"
                max-height="52"
                max-width="52"
                class="slide-icon"
              >
              </v-img>
              <span class="card-number"> 7800</span>
              <div class="card-item-title">{{ $t("Difference") }}</div>
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>
<script>
export default {};
</script>
<style>
.dash {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
  margin-top: 10px;
}
.card-header {
  background-color: #2eb3ca;
  color: #fff;
  padding: 7px;
  border-radius: 5px;
}
.row-item {
  width: 270px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card-item-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-number {
  margin: 3px;
  color: #2eb3ca;
}
</style>
