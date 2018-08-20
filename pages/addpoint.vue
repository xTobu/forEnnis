<template lang="pug">
  .wrap
    .main
        .tt <span class="icon-tt_number"></span>
        p.sub 請輸入食尚餐廚集點送活動指定包裝<br>瓶蓋內/罐底序號
        // form
        .form
          ul
            li.warn
              a.del_pos.error_pos
                <span class="icon-error"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
              input.number.warn(type='text', maxlength='10', placeholder='請填入大寫英數序號共10碼')
              p.warn  序號格式輸入錯誤
            |
            li
              a.del_pos
                span.icon-del
              |
              input.number(type='text', maxlength='10', placeholder='請填入大寫英數序號共10碼')
              p.warn 序號格式輸入錯誤
            | 
            li
              a.del_pos
                span.icon-del
              input.number(type='text', maxlength='10', placeholder='請填入大寫英數序號共10碼')
              p.warn 序號格式輸入錯誤
          a.add_btn(href="#") 
            <span class="icon-add"></span>
            span 新增輸入欄位(至多10組) 
        //  btn
        |
        |
        a.r_bg(href="checkpoint.html") 
          span 確認送出
        |
        |
        a.r_line(href="#")
          span 兌換記錄

</template>

<style lang="scss" scoped>
@import "~assets/sass/point.scss";
</style>
