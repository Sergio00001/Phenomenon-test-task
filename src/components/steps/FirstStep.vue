<template>
    <div class="step__position">
        <img
            src="@/assets/steps/stepOne/first-of-three.png"
            alt="number"
            class="step__number"
        >
    </div>
    <div class="container">
        <div class="step__content">
            <div
                class="step__discription"
                v-if="!$store.state.smallScreen"
            >
                <h2 class="step__title">Speak <br><span class="step_italic__pink">to a doctor</span></h2>
                <p class="step__text">Book a visit today and get in touch with a doctor through video. Our team will confirm you’re in-network to make things easier. </p>
            </div>
            <div
                class="step__discription"
                v-if="$store.state.smallScreen"
            >
                <h2 class="step__title">Book an appointment <br><span class="step_italic__pink">with a specialist</span></h2>
                <p class="step__text">Order one of our CLIA kits from the comfort of your own home. Kits can include everything you need to test for Hep B&C, Trich, Chlamydia, HIV, and more. </p>
            </div>
            <div class="step__img">
                <img
                    src="@/assets/steps/stepOne/first-step.png"
                    alt="pic"
                    class="step__picture"
                >
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.step__img {
    justify-content: right;
}

@media(max-width:768px) and (min-width:601px) {
    .step__title {
        font-size: 36px;
    }
}

@media(max-width:600px) {
    .step__picture {
        width: 55%;
    }

    .step__text {
        max-width: 250px;
    }

    .step__discription {
        margin-bottom: 20px;
    }

    .container {
        width: 90%;
    }

    .step__img {
        position: absolute;
        bottom: 5%;
        right: 5%;
        width: 80%;
    }
}
</style>