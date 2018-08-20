<template lang="pug">
mixin navLink(href, name)
  //- attributes == {class: "btn"}
  nuxt-link(:to=href)= name
.menuBox(style="display:none")
    .inner
        ul
            li
                +navLink("{name:'index'}",'活動首頁')
            li
                +navLink("{name:'addpoint'}",'點數登錄/查詢')
            li
                +navLink("{name:'gift'}",'兌換好禮')
            li
                +navLink("{name:'rule'}",'活動辦法')
            li
                +navLink("{name:'privacy'}",'隱私權')
</template>
