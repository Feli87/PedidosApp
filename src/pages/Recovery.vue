<template>
  <q-page class="flex flex-center">
      <div class="full-width row wrap justify-center items-center content-center">
        <div class="col-auto  self-center q-mb-md">
          <img
            alt="Quasar logo"
            src="~assets/quasar-logo-full.svg"
          >
        </div>
        <div class="col-auto self-center">
          <recovery-form-component></recovery-form-component>
        </div>
      </div>    
  </q-page>
</template>

<script>
import RecoveryFormComponent from 'components/RecoveryFormComponent.vue'
export default {
  name: 'PageIndex',
  components: { RecoveryFormComponent },
}
</script>
