<template>
    <div class="step__wrapper">
        <div
            class="step"
            :class="{ 'small': $store.state.smallScreen }"
        >
            <FirstStep />
        </div>
        <div
            class="step"
            :class="{ 'small': $store.state.smallScreen }"
        >
            <SecondStep />
        </div>
        <div
            class="step"
            :class="{ 'small': $store.state.smallScreen }"
        >
            <ThirdStep />
        </div>
    </div>
</template>
<script>
import FirstStep from '@/components/steps/FirstStep';
import SecondStep from '@/components/steps/SecondStep';
import ThirdStep from '@/components/steps/ThirdStep';


export default {
    components: { FirstStep, SecondStep, ThirdStep }
}
</script>
<style lang="scss">
.step__wrapper {
    height: 500px;
    overflow: scroll;
}

.step {
    position: sticky;
    top: 0;
    background: linear-gradient(18deg, rgb(221, 137, 119) 24%, rgb(107, 159, 215) 50%, rgb(192, 143, 97) 89%);
    border: 1px solid #2D2A26;
    border-bottom: none;
    height: 100%;

    &.small {
        background-image: linear-gradient(197deg, #8abadd 42%, #ffc39f 100%);
    }
}

.step__position {
    display: flex;
    justify-content: center;
}

.step__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.step__title {
    max-width: 359px;
    font-size: 48px;
    line-height: 105%;
    letter-spacing: -3px;
    color: #FCFCF0;
    margin-bottom: 20px;
}

.step_italic__pink {
    color: #F5CABF;
    font-family: 'Playfair Display Bold Italic', sans-serif;
}

.step__text {
    max-width: 359px;
    font-size: calc(14px + 8.8 * ((100vw - 768px) / 1440));
    line-height: 160%;
    color: #FCFCF0;
}

.step__img {
    display: flex;
    align-items: center;
}

.step__picture {
    width: 100%;
}

.step__btn {
    padding: 16px 50px;
    margin-top: 34px;
    font-size: 14px;
    line-height: 19px;
}

@media(min-width: 1700px) {
    .step__btn {
        font-size: 22px;
    }
}

@media(max-width:1000px) {

    .step__picture {
        width: 90%;
    }


    .step__content {
        padding-top: 2%;
    }

    .step__wrapper {
        height: 450px;
    }
}

@media(max-width:800px) {
    .step__wrapper {
        height: 400px;
    }
}

@media(max-width:600px) {
    .step__wrapper {
        height: 500px;
    }

    .step__content {
        flex-direction: column;
        justify-content: left;
        align-items: baseline;
    }


    .step {
        height: 100%;
    }
}
</style>