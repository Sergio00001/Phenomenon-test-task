<template>
    <Ticker />
    <Navbar />
    <Header />
    <Insurance />
</template>

<script>
import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Insurance from '@/components/Insurance'

import '@/styles/basicStyles.scss'


export default {
    components: { Ticker, Navbar, Header, Insurance }
}
</script>

<style lang="scss">
</style>
