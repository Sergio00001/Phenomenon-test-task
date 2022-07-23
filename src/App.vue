<template>
    <Header />
    <Insurance />
    <OurMission />
    <Steps />
    <Analyzes />
    <JoinWaitlist />
    <Social />
    <Footer v-if="!$store.state.showBurger" />
</template>

<script>
import Header from '@/components/header/Header'
import Insurance from '@/components/insurance/Insurance'
import OurMission from '@/components/OurMission'
import Steps from '@/components/steps/Steps'
import Analyzes from '@/components/analyzes/Analyzes'
import JoinWaitlist from '@/components/JoinWaitlist'
import Social from '@/components/Social'
import Footer from '@/components/footer/Footer'



import '@/styles/basicStyles.scss'

export default {
    components: { Header, Insurance, OurMission, Steps, Analyzes, JoinWaitlist, Social, Footer },

    mounted() {
        setInterval(() => {
            window.addEventListener('resize', this.$store.dispatch('setSmallScreen'));
        }, 150);
    },
    unmounted() {
        window.removeEventListener('resize', this.$store.dispatch('setSmallScreen'));
    },
}
</script>

<style lang="scss">
</style>
