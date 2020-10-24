<template>
  <q-page class="flex flex-center">
      <div class="full-width row wrap justify-center items-center content-center">
        <div class="col-auto  self-center q-mb-md">
          <img
            alt="Quasar logo"
            src="~assets/logo.png"
          >
        </div>
        <div class="col-auto self-center">
          <login-form-component></login-form-component>
        </div>
      </div>    
  </q-page>
</template>

<script>
import LoginFormComponent from 'components/LoginFormComponent.vue'
export default {
  name: 'PageIndex',
  components: { LoginFormComponent },
}
</script>
