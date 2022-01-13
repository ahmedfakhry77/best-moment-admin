/* eslint-disable */
<template>
  <v-simple-table fixed-header height="400px">
    <template v-slot:default>
      
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>
            <v-img
              v-bind:src="require('../assets/images/' + item.photo)"
              max-height="355"
              max-width="190"
              class="mx-auto table-photo"
            ></v-img>
          </td>
          <td class="text-center">
            <b> Code: </b>{{ item.code }} <br />
            <div class="location">
              <img
                src="../assets/icon/location-arrow.png"
                class="location-icon"
              />
              Makaah
            </div>
          </td>
          <td class="text-center"><b> Owner: </b>{{ item.owner }}</td>
          <td class="text-center">{{ item.calories }} complete</td>
          <td class="text-center">
            <v-btn depressed color="success" width="150" class="my-auto">
              {{ item.name }}
              <img src="../assets/icon/md-done-all.png" class="btn-photo" />
            </v-btn>
            <img src="../assets/icon/eye-fill.png" class="eye" />
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
      desserts: [
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
