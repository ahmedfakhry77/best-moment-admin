<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="2">
        <v-select
          :items="states"
          menu-props="auto"
          label="فلتر"
          hide-details
          prepend-inner-icon="mdi-filter"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="10">
        <v-text-field
          outlined
          label="البحث فى الطلبات الجديدة"
          hide-details
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      states: [
        "Riyadh",
        "Jeddah",
        "Mecca",
        "Medina",
        "Ad Dammām",
        "Buraydah",
        "Tabūk",
      ],
    };
  },
};
</script>
