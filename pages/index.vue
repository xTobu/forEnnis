<template lang="pug">
mixin product(crossover,href,pic,name)
  -var path = "~assets/img/"
  li
    a(class!=attributes.class href=href)
      |
      span.img
        |
        img(src=path + pic, alt="")
      |
      |
      span.txt 
        span.break 
          span.icon-pos
            span.icon-coke
          |
          |
          span  #{crossover}
          |
          |
          span.break #{name} 
.outer
    .wrap
        .container
            .tt
                img(src="~assets/svg/tt.svg", alt="")
            .probox
                ul
                    +product('x 大同 ','pot.html','pot.png','限量聯名電鍋')
                    |
                    +product(null,'bowl.html','bowl.png','沙拉木碗組')
                    |
                    +product(null,'pot-s.html','pot-s.png','食尚小湯鍋')
                    |
                    +product(null,'salad.html','salad.png','食尚沙拉罐')
            p 登錄指定包裝序號，
                span.break_m 多項Coke好禮集點帶回家！
            a.btn(href="signin.html")
                span.icon-btn-pot
                span 集點換好禮
        .arrowbox
            a.left(href="#")
                span.icon-arrow
            a.right(href="#")
                span.icon-arrow
    .cir-bg
</template>

<script>
export default {
    components: {},
    mounted() {
        console.log($);
    }
};
</script>

<style lang="scss">
@import "~assets/sass/index.scss";
</style>

