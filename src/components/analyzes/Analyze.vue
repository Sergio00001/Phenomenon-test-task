<template>
    <div class="top__label">
        <img
            :src="require(`@/assets/analyzes/${analyze.folder}/label.png`)"
            alt="label"
            class="label"
        >
        <h3 class="label__title">Coming <br> soon</h3>
    </div>
    <h1 class="analyze__name">{{ analyze.name }}</h1>
    <p class="analyze__discription">{{ analyze.body }}</p>
    <div class="analyze__img">
        <img
            :src="require(`@/assets/analyzes/${analyze.folder}/box.png`)"
            alt="box"
            class="box"
        >
    </div>
</template>
<script>
export default {
    props: {
        analyze: {
            type: Object,
            reqired: true
        }
    }
}
</script>
<style scoped lang="scss">
.top__label {
    display: flex;
    justify-content: center;
}

.label {
    position: absolute;
    z-index: 0;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
}

.label__title {
    position: relative;
    z-index: 1;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #2D2A26;
    font-weight: 800;
    font-size: 16px;
    line-height: 95%;
    text-align: center;
    top: 10px;
}

.analyze__name {
    // font-size: 48px;
    font-size: calc(30px + (18 + 18 * 0.7) * (100vw - 768px) / 1440);
    line-height: 105%;
    text-align: center;
    letter-spacing: -3px;
    color: #2D2A26;
    margin-top: 10%;
    margin-bottom: 20px;
}

.analyze__discription {
    position: relative;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    letter-spacing: -0.03em;
    color: #2D2A26;
    max-width: 390px;
    margin: 0 auto;
    margin-bottom: 15px;
}

.analyze__img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15%;
}

.box {
    width: 50%;
}
</style>