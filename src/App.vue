<template>
    <Ticker />
    <Navbar />
    <Header />
</template>

<script>
import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'

import '@/styles/basicStyles.scss'

export default {
    components: { Ticker, Navbar, Header }
}
</script>

<style lang="scss">
</style>
