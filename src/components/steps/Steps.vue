<template>
    <div class="step__wrapper">
        <div class="step">
            <FirstStep />
        </div>
        <div class="step">
            <SecondStep />
        </div>
        <div class="step">
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
    height: 453px;
    overflow: scroll;
}

.step {
    position: sticky;
    top: 0;
    background: linear-gradient(18deg, rgb(221, 137, 119) 24%, rgb(107, 159, 215) 50%, rgb(192, 143, 97) 89%);
    border: 1px solid #2D2A26;
    border-bottom: none;
}

.step__position {
    display: flex;
    justify-content: center;
}

.step__content {
    padding-bottom: 60px;
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

@media(max-width:900px) {

    .step__picture {
        width: 90%;
    }
}

@media(min-width: 1700px) {
    .step__btn {
        font-size: 22px;
    }
}
</style>