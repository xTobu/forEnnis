<template>
    <div class="layout">
        <trans />
        <!-- header-->
        <announcement />
        <defaultHeader />
        <!-- M Menu-->
        <menubox />
        <!-- content-->
        <nuxt />
    </div>
</template>

<script>
import trans from "~/components/_trans.vue";
import announcement from "~/components/_announcement.vue";
import defaultHeader from "~/components/_defaultHeader.vue";
import menubox from "~/components/_menubox.vue";
export default {
    components: {
        trans,
        announcement,
        defaultHeader,
        menubox
    }
};
</script>

<style>
</style>


