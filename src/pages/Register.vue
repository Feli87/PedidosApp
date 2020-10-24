<template>
  <q-page class="flex flex-center">
      <div class="full-width row wrap justify-center items-center content-center">
        <div class="col-auto  self-center q-mb-md">
          <img
            alt="Pedidos Ar"
            src="~assets/logo.png"
          >
        </div>
        <div class="col-auto self-center">
          <register-form-component></register-form-component>
        </div>
      </div>    
  </q-page>
</template>

<script>
import RegisterFormComponent from '../components/RegisterFormComponent'

export default {
  name: 'PageIndex',
  components: { RegisterFormComponent },
}
</script>
