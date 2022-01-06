import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import en from "./en.js";
import ar from "./ar.js";
Vue.config.productionTip = false;

Vue.mixin({
  data: () => ({
    lan : true,
    lang : "en"
    //
  }),
  mixins: [en , ar],
  methods: {
    chlan : function(){
      var x = document.getElementById('nm');
      if (this.lan){
         
         x.style= "direction:rtl"
      }
      else {
         x.style= "direction:ltr"
      }
     this.lan = !this.lan
     if (!this.lan){
       this.lang = "ar";
     }else{
       this.lang = "en";
     }

    },
    translate (prop){
       return this[this.lang][prop];
    }
  }
});
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
