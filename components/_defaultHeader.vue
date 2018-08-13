<template lang="pug">
header
        a.logo(href="index.html") 
            block logo
                img(src="~assets/svg/logo.svg", alt="logo")
        block menu
            .navBox
                // pointBox
                block pointBox
                    .memberInfo
                        a.logout(href="#") 登出
                        span  / 
                        .pointBox
                            span 目前點數
                            span.number 999,299
                //- // bur
                //- include bur
                bur
                // PC menu 
                nav
                    ul
                        li
                            block index
                            a(href="index.html") 活動首頁
                        li
                            block addpoint
                            a(href="addpoint.html") 點數登錄/查詢
                        li
                            block gift
                            a(href="gift.html") 兌換好禮
                        li
                            block rule
                            a(href="rule.html") 活動辦法
                        li
                            block privacy
                            a(href="privacy.html") 隱私權 
</template>
<script>
import bur from "~/components/_bur.vue";
export default {
    components: {
        bur
    }
};
</script>

