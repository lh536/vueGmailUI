<template>
    <gmail-sample-page />
    <!-- <router-view /> -->


</template>


<script>
import { defineAsyncComponent } from "vue"

export default {
  name: 'App',
  components: {
    GmailSamplePage: defineAsyncComponent ( () => import ('@/modules/gmailSample/pages/GmailSamplePage.vue') ),
  },
}

</script>


<style scopped>

</style>
