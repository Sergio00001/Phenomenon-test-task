<template>
    <div class="ticker">
        <span class="title"> 🇺🇸 We ship inside the US only</span><span class="title"> 🇺🇸 We ship inside the US only</span><span class="title"> 🇺🇸 We ship inside the US only</span><span
            class="title"
        > 🇺🇸 We ship inside the US only</span><span class="title"> 🇺🇸 We ship inside the US only</span><span class="title"> 🇺🇸 We ship inside the US only</span>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.ticker {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    background: linear-gradient(90deg, #274CD6 0%, #CF63C6 49.91%, #80D7C4 100%);
    padding: 10px 0px;

}

.title {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
    text-transform: uppercase;
    display: inline-block;
    animation: ticker 10s infinite linear;
    padding-left: 5%;
}

@keyframes ticker {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%)
    }
}
</style>