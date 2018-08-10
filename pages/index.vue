<template>
    <section class="container">

        <app-logo/>

    </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
    components: {
        AppLogo
    },
    mounted() {
        console.log($);
    }
};
</script>

<style lang="scss">
@import "~assets/sass/index.scss";
</style>

