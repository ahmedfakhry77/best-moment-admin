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
            <b> {{ $t("Code") }} </b>{{ item.code }}
            <img src="../assets/icon/eye-fill.png" class="eye" />
          </td>

          <td class="text-center">
            <v-btn depressed color="success" width="150" class="my-auto">
              {{ $t("Accept") }}
            </v-btn>
          </td>
          <td >
            <v-card class="mx-auto reason" max-width="244" outlined>
            <span class="rof "> {{ $t("ReasonofRefuse") }} </span>
              <v-list-item three-line>
                <v-list-item-content>
                  <p>
                  {{ $t("Reason") }}
                  </p>
                 
                </v-list-item-content>
              </v-list-item>
            </v-card>
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
<style scoped>
.rof {
    background-color: #2EB3CA;
    color: #fff;
    padding: 3px;
    border-radius: 5px;
}
.reason {
 margin-top: 9px;
 margin-bottom: 9px;
}
</style>
