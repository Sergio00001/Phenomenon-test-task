<template>
    <Header />
    <Insurance />
    <OurMission />
    <Steps />
    <Analyzes />
</template>

<script>
import Header from '@/components/header/Header'
import Insurance from '@/components/Insurance'
import OurMission from '@/components/OurMission'
import Steps from '@/components/steps/Steps'
import Analyzes from '@/components/analyzes/Analyzes.vue'


import '@/styles/basicStyles.scss'

export default {
    components: { Header, Insurance, OurMission, Steps, Analyzes }
}
</script>

<style lang="scss">
</style>
