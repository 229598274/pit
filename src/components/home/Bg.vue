<template>
    <div class="i_bg bg_color">
        <Ibanner />
        <hot-goods />
        <limit-goods />
        <recommend-goods />
        <Footer />
    </div>
</template>

<script>
import Ibanner from './ibanner/Ibanner'
import HotGoods from './hotGoods/HotGoods'
import LimitGoods from './limitGoods/LimitGoods'
import RecommendGoods from './recommendGoods/RecommendGoods'
import Footer from './Footer.vue'

export default {
    name:'Bg',
    components:{
        Ibanner,HotGoods,LimitGoods,RecommendGoods,Footer
    }
}
</script>