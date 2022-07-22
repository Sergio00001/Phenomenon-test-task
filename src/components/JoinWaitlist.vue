<template>
    <div class="waitlist">
        <div class="waitlist__pictures">
            <img
                src="@/assets/joinWaitlist/heart.png"
                alt="heart"
                class="heart"
            >
            <img
                src="@/assets/joinWaitlist/message.png"
                alt="message"
                class="message"
            >
            <img
                src="@/assets/joinWaitlist/like.png"
                alt="like"
                class="like"
            >
        </div>
        <div class="waitlist__content">
            <h2 class="waitlist__title">Join the Waitlist <br><span class="italic__black">Your partner will appreciate you.</span></h2>
            <p class="waitlist__text">Sign up with your email address to receive news and updates.</p>
            <my-form></my-form>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style scoped lang="scss">
.waitlist {
    padding-top: 100px;
    background: linear-gradient(98.6deg, #D9CFFF 0%, #EBF1FF 44.29%, #DDE6EF 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.waitlist__pictures {
    margin-bottom: 30px;
}

.message {
    position: relative;
    top: -34px;
    margin-left: 40px;
}

.like {
    position: relative;
    top: 15px;
}

.waitlist__title {
    color: #F68D2E;
    text-align: center;
    letter-spacing: -3px;
    font-size: calc(45px + (17 + 17 * 0.7) * (100vw - 768px) / 1440);
    line-height: 105%;
}

.italic__black {
    color: #2D2A26;
    font-family: 'Playfair Display Bold Italic', sans-serif;
}

.waitlist__text {
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    text-align: center;
}
</style>