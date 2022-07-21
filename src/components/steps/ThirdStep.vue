<template>
    <div class="step__position">
        <img
            src="@/assets/steps/stepTwo/second-of-three.png"
            alt="number"
            class="step__number"
        >
    </div>
    <div class="container">
        <div class="step__content">
            <div class="step__discription">
                <h2 class="step__title">Get <span class="step_italic__pink">results</span></h2>
                <p class="step__text">Order a test online, collect your sample at home, and then return your sample to our lab. We’ll review it and send you results within 2-4 days. If positive, we’ll
                    prescribe you a treatment plan to pickup at the nearest pharmacy. </p>
                <div class="step__controls">
                    <button class="step__btn btn">Get a kit</button>
                </div>
            </div>
            <div class="step__img">
                <img
                    src="@/assets/steps/stepThree/third-step.png"
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
.step__content {
    padding: 0;
}

.step__text {
    max-width: 491px;
}

.step__img {
    justify-content: right;
}

.step__btn {
    background-color: #8ABADD;
}
</style>