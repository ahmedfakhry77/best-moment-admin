/* eslint-disable */
<template>
  <v-simple-table fixed-header height="400px">
    <template v-slot:default>
      <tbody>
        <tr v-for="item in table1" :key="item.name">
          <td>
            {{ item.owner }}
            <br />
            <div>
              <img
                src="../assets/icon/location-arrow.png"
                class="location-icon"
              />
              Makaah
            </div>
            <div>
              <img src="../assets/icon/mcall.png" class="location-icon" />
              +966 0225636855
            </div>
            <div>
              <img src="../assets/icon/email.png" class="location-icon" />
              Example.here@Example.Com
            </div>
          </td>
          <td>
            <v-img
              v-bind:src="require('../assets/images/' + item.photo)"
              max-height="355"
              max-width="190"
              class="mx-auto table-photo"
            ></v-img>
          </td>
          <td class="text-center">
            <b> {{ $t('Code') }} </b>{{ item.code }}
            <img src="../assets/icon/eye-fill.png" class="eye" />
            <img src="../assets/icon/options-sharp.png" class="eye" />
          </td>

          <td class="text-center">
           
          </td>
          <td class="text-center">
            
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  data() {
    return {
      table1: [
        {
          name: "Published",
          calories: "50%",
          photo: "img2.png",
          owner: "Omar Mohamed",
          code: 12345678119,
        },
        {
          name: "Draft",
          calories: "100%",
          photo: "img1.png",
          owner: "Omar Mohamed",
          code: 12345678119,
        },
        {
          name: "On Hold",
          calories: "100%",
          photo: "img2.png",
          owner: "Omar Mohamed",
          code: 12345678119,
        },
        {
          name: "Black List",
          calories: "100%",
          photo: "img1.png",
          owner: "Omar Mohamed",
          code: 12345678119,
        },
      ],
    };
  },
};
</script>
<style scoped></style>
