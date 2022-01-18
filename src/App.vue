<template>
  <v-app id="nm">
    <v-app-bar app flat color="#F9F9F9" height="100" class="headetr">
      <v-toolbar flat color="#F9F9F9">
        <v-row>
          <v-col  md="9" sm="6" xl="10">
            <v-text-field
              solo
              width="100%"
              label="Search"
              append-icon="mdi-magnify"
            >
            </v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col  md="3" sm="6" xl="2">
            <div class="app-flag">
              <v-img
                src="./assets/icon/app-switcher.png"
                max-height="27"
                max-width="27"
                class="app-switcher"
              >
              </v-img>
              <v-img
                src="./assets/icon/notification-solid-badged.png"
                max-height="31.9"
                max-width="32.2"
                class="notification"
              >
              </v-img>

              <v-btn
                v-if="!arabic"
                @click="changeLocale('en'), changeDil()"
                class="lang-btn"
                text
              >
                <v-img
                  src="./assets/icon/united-kingdom.png"
                  max-height="51"
                  max-width="51"
                ></v-img>
              </v-btn>
              <v-btn
                v-if="arabic"
                @click="changeLocale('ar'), changeDir()"
                class="lang-btn"
                text
              >
                <v-img
                  src="./assets/icon/saudi-arabia.png"
                  max-height="74"
                  max-width="74"
                ></v-img>
              </v-btn>
              <v-img
                src="./assets/icon/Ellipse.png"
                max-height="51"
                max-width="51"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-toolbar>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      :right="right"
      color="#2EB3CA"
      mini-variant
      class="aside"
    >
      <v-img
        src="./assets/icon/logo.png"
        max-height="48"
        max-width="39"
        class="slide-icon"
      >
      </v-img>
      <router-link to="/">
        <v-img
          src="./assets/icon/home.png"
          max-height="32"
          max-width="31"
          class="slide-icon"
        >
        </v-img
      ></router-link>
      <router-link to="/Users">
        <v-img
          src="./assets/icon/user.png"
          max-height="32"
          max-width="31"
          class="slide-icon"
        >
        </v-img
      ></router-link>
      <v-img
        src="./assets/icon/resellerhosting.png"
        max-height="32"
        max-width="31"
        class="slide-icon"
      >
      </v-img>
      <router-link to="/AdmissionList">
        <v-img
          src="./assets/icon/border-color.png"
          max-height="32"
          max-width="31"
          class="slide-icon"
        >
        </v-img
      ></router-link>

      <v-img
        src="./assets/icon/push-sharp.png"
        max-height="32"
        max-width="31"
        class="slide-icon"
      >
      </v-img>
      <v-img
        src="./assets/icon/line-chart-solid.png"
        max-height="32"
        max-width="31"
        class="slide-icon"
      >
      </v-img>
      <router-link to="/OtherFeatures">
        <v-img
          src="./assets/icon/apps.png"
          max-height="32"
          max-width="31"
          class="slide-icon"
        >
        </v-img
      ></router-link>
    </v-navigation-drawer>

    <v-main class="maindiv">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import i18n from "@/plugins/i18n";
export default {
  name: "App",
  components: {},
  data() {
    return {
      arabic: false,
      drawer: null,
      right: true,
      alignments: ["start", "center", "end"],
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
    changeDir() {
      this.$vuetify.rtl = true;
      this.right = true;
      this.arabic = !this.arabic;
    },
    changeDil() {
      this.$vuetify.rtl = false;
      this.right = false;
      this.arabic = !this.arabic;
    },
  },
};
</script>
<style scoped>
.btn-link {
  width: 60px;
}
.app-flag {
 display: flex;
 flex-direction: row;
 justify-content: flex-start;
 align-items: center;
}
.headetr {
  padding: 10px;
  background-color: #f9f9f9;
}
.aside {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  right: 0px;
  padding-top: 15px;
}
.lang-btn {
  padding: 0;
  margin-left: 20px;
  margin-right: 20px;
}

.app-switcher {
  margin: 15px;
  margin-top: 10px;
}
.notification {
  margin: 8px;
  margin-top: 7px;
}
.slide-icon {
  margin-bottom: 20px;
}
</style>
