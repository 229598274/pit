<template>
    <div class="inews">
        <News />
        <Recharge/>
    </div>
</template>

<script>
import News from './News.vue'
import Recharge from './Recharge.vue'

export default {
    name:'Inews',
    components:{
        News,Recharge
    }
}
</script>