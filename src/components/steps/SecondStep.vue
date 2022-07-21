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
            <div class="step__img">
                <img
                    src="@/assets/steps/stepTwo/second-step.png"
                    alt="pic"
                    class="step__picture"
                >
            </div>
            <div class="step__discription">
                <h2 class="step__title">Your kit <span class="step_italic__pink">is mailed</span></h2>
                <p class="step__text">After the appointment we'll mail you an STI kit to your home with easy steps to follow. If there are any additional questions needed, our medical team is here.
                </p>
                <div class="step__controls">
                    <button class="step__btn btn">Get a kit</button>
                </div>
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
    padding-top: 7%;
}

.step__img {
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 30%;
    z-index: 0;
}

.step__discription {
    position: relative;
    z-index: 1;
    margin-left: 40%;
}

.step__btn {
    background-color: #F5CABF;
}

@media(max-width:900px) {
    .step__img {
        width: 40%;
        left: 0;
    }
}
</style>