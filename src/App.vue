<template>
    <Header />
    <Insurance />
    <OurMission />
    <Steps />
    <Analyzes />
    <JoinWaitlist />
    <Social />
    <Footer />
</template>

<script>
import Header from '@/components/header/Header'
import Insurance from '@/components/Insurance'
import OurMission from '@/components/OurMission'
import Steps from '@/components/steps/Steps'
import Analyzes from '@/components/analyzes/Analyzes.vue'
import JoinWaitlist from '@/components/JoinWaitlist'
import Social from '@/components/Social'
import Footer from '@/components/Footer'



import '@/styles/basicStyles.scss'

export default {
    components: { Header, Insurance, OurMission, Steps, Analyzes, JoinWaitlist, Social, Footer }
}
</script>

<style lang="scss">
</style>
