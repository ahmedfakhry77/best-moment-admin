<template>
  <div class="root-Users " color="#F9F9F9" width="100%" height="200">
    <v-card flat max-width="1450px" tile  >
      <v-app-bar class="Users" height="150">
        <v-app-bar-title>
        <h2>
        {{ $t('UsersServiceProvider') }}
        </h2>
        </v-app-bar-title>

        <template v-slot:extension>
          <v-tabs >
            <v-tab>{{ $t('AllProviders') }}</v-tab>
            <v-tab>{{ $t('Users') }}</v-tab>
            <v-tab>{{ $t('Blacklist') }}</v-tab>
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
  name: "Users",
  components: {
    Allrestbuildings,
  },
};
</script>
<style>
* {
font-family:'Leelawadee';
}
.root-Users {
 margin: -20px;

}
.Users {
padding-right: 90px;
padding-left: 90px;

}
</style>
