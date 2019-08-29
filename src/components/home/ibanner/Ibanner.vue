<template>
    <div class="i_ban_bg">
        <Banner />
        <Inews/>
    </div>
</template>

<script>
import Banner from './Banner'
import Inews from './inews/Inews'

export default {
    name:'Ibanner',
    components:{
        Banner,
        Inews
    }
}
</script>