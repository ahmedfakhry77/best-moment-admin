import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    RestBuildings: "Rest Buildings",
    Allrestbuildings: "All rest buildings",
    Providers: "Providers",
    Downloading: " Downloading",
    Rests: "Rests ",
    Difference: "Difference",
    Userno: "Users NO.",
    Reserved: "Reserved",
    Available: "Available",
    PrivateReservations: "Private Reservations",
    Blacklist: "Black list",
    Draft: "Draft",
    OtherFeatures: "Other Fetuers",
    TermsandConditions: "Terms and Conditions",
    Aboutus: "About us",
    ContactUs: "Contact Us",
    AdmissionList: "Admission List",
    NewRequests: "New Requests",
    OnHold: "On Hold",
    WaitingToReview: "Waiting To Review",
    UsersServiceProvider: "Users & Service Provider",
    AllProviders: "All Providers",
    Users: "Users",
    Accept: "Accept",
    Reject: "Reject",
    Code: "Code :",
    Owner: "Owner :",
    ReasonofRefuse: "Reason of Refuse",
    Reason: "Pictures are not appropriate and not all information is written",

  },
  ar: {
    RestBuildings: "الإستراحات",
    Allrestbuildings: "كافة مباني الإستراحات",
    Providers: " مزودين الخدمة",
    Downloading: "عدد التنزيلات",
    Rests: "عدد الاستراحات",
    Difference: "الفرق",
    Userno: "عدد العملاء",
    Reserved: "المحجوزة",
    Available: "المتاحة",
    PrivateReservations: "الحجوزات الخاصة",
    Blacklist: "القائمة السوداء",
    Draft: "المسودة",
    OtherFeatures: "المزيد من الخيارات",
    TermsandConditions: "الشروط والأحكام",
    Aboutus: "عن التطبيق",
    ContactUs: "تواصل معنا",
    AdmissionList: "طلبات نشر الإعلانات",
    NewRequests: "الطلبات الجديدة",
    OnHold: "قيد الانتظار",
    WaitingToReview: "قيد المراجعة",
    UsersServiceProvider: "العملاء و مزودين خدمة العملاء",
    AllProviders: "جميع مزودين الخدمة",
    Users: "العملاء",
    Accept: "قبول",
    Reject: "رفض",
    Code: "الكود :",
    Owner: "صاحب المنشأة :",
    ReasonofRefuse: "سبب الرفض",
    Reason: "الصور غير مناسبة ولم يتم  كتابة كافة المعلومات",

  },
};

const i18n = new VueI18n({
  locale: "ar", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
});

export default i18n;
