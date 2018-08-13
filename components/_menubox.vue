<template lang="pug">
mixin navLink(href, name)
  //- attributes == {class: "btn"}
  a(class!=attributes.class href=href)= name
.menuBox(style="display:none")
    .inner
        ul
            li
                +navLink('index.html','活動首頁')(class="active")
            li
                +navLink('activity.html','點數登錄/查詢')
            li
                +navLink('gift.html','兌換好禮')
            li
                +navLink('rule.html','活動辦法')
            li
                +navLink('privacy.html','隱私權')
</template>
