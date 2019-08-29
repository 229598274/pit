<template>
  <div>
    <Soubg />
    <Top/>
    <Menu />
    <Bg />
  </div>
</template>

<script>
import '../../src/assets/js/jquery-1.11.1.min_044d0927.js'
import '../../src/assets/js/jquery.bxslider_e88acd1b.js'
import '../../src/assets/js/jquery-1.8.2.min.js'
import '../../src/assets/js/menu.js'
import '../../src/assets/js/select.js'
import '../../src/assets/js/iban.js'
import '../../src/assets/js/fban.js'
import '../../src/assets/js/f_ban.js'
import '../../src/assets/js/mban.js'
import '../../src/assets/js/bban.js'
import '../../src/assets/js/hban.js'
import '../../src/assets/js/tban.js'
import '../../src/assets/js/lrscroll.js'
import '../../src/assets/js/lrscroll_1.js'


import Soubg from './home/Soubg.vue'
import Top from './home/Top.vue'
import Menu from './home/Menu.vue'
import Bg from './home/Bg.vue'



export default {
  name: 'Home',
  components:{
    Soubg,
    Top,
    Menu,
    Bg
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
    @import '../assets/css/style.css';
</style>