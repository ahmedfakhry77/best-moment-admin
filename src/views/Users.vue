<template>
  <div class="root-Users " width="100%" height="200">
    <v-card flat max-width="100%" tile  >
      <v-app-bar class="Users" height="150"  color="#F9F9F9" flat>
        <v-app-bar-title>
        <h2>
        {{ $t('UsersServiceProvider') }}
        </h2>
        </v-app-bar-title>

        <template v-slot:extension>
          <v-tabs >
            <v-tab @click="activetab = '1'">{{ $t('AllProviders') }}</v-tab>
            <v-tab @click="activetab = '2'">{{ $t('Users') }}</v-tab>
            <v-tab @click="activetab = '3'">{{ $t('Blacklist') }}</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
    </v-card>
    <div class="table-home">
      <searchWithFilter />
    </div>
    <div class="table-home" v-if= "activetab === '1'">
      <AllProviders />
    </div>
    <div class="table-home" v-if= "activetab === '2'">
      <user />
    </div>
    <div class="table-home" v-if= "activetab === '3'">
     <blacklist />
    </div>
  </div>
</template>

<script>
import AllProviders from '../components/AllProviders'
import user from '../components/user'
import blacklist from '../components/blacklist'
import searchWithFilter from "../components/searchWithFilter";

export default {
  name: "Users",
  data () {
    return {
      activetab: '1',
    }
  },
  components: {
    AllProviders , user ,blacklist, searchWithFilter,
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
padding-right: 40px;
padding-left: 40px;

}
</style>
