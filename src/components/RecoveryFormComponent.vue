<template>
    <div>
        <div class="row">
            <div class="col-12 q-mt-md">
                <q-input
                    class="q-ml-md q-mr-md q-mb-sm"
                    rounded
                    color="primary"
                    bg-color="white"
                    label-color="primary"
                    standout
                    bottom-slots
                    v-model="email"
                    label="Ingresar Email"
                    :rules="[val => !!val || 'Debe Ingresar Su E-mail']"
                >
                    <template v-slot:prepend>
                        <q-icon color="primary" name="email" />
                    </template>
                </q-input>
            </div>
            <div class="col-12">
                <div class="row full-width">
                    <div class="col-12 text-center">
                         <q-btn :ripple="{ center: true }" color="primary" label="Enviar Contraseña" no-caps />
                    </div>
                    <div class="col-12 text-center q-mt-md">
                        <router-link class="route-link" to="/Login">
                            <span class="route-link-span">Volver al Login</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="sass">
.route-link-span
    color: white
    font-size: 1rem
.route-link
    text-decoration: none
</style>
<script>
export default {
  name: 'PageIndex'
}
</script>