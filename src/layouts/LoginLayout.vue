<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="sass">
body
   background-color: black;
</style>

<script>

export default {
  name: 'LoginLayout',
  components: {  },
  data () {
    return {
      
    }
  }
}
</script>
