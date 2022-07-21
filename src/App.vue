<template>
    <Header />
    <Insurance />
    <OurMission />
    <Steps />
</template>

<script>
import Header from '@/components/header/Header'
import Insurance from '@/components/Insurance'
import OurMission from '@/components/OurMission'
import Steps from '@/components/steps/Steps'

import '@/styles/basicStyles.scss'

export default {
    components: { Header, Insurance, OurMission, Steps }
}
</script>

<style lang="scss">
</style>
