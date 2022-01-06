/* eslint-disable */
<template rtl>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">admin</span>
        <span>panal</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed rounded>
        <span>Sign Out</span>
        <v-spacer></v-spacer>
        <v-icon right> mdi-logout </v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>Ahmed Fakhry</v-list-item-title>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> {{ item.title }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "المستخدم", icon: "mdi-account-group-outline" },
      ],
      mini: true,
    };
  },
};
</script>
<style scoped>
.theme--light.v-btn.v-btn--has-bg {
  background-color: #f5f5f500;
  color: gray;
}
</style>
