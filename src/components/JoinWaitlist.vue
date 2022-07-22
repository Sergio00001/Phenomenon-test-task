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
            <form class="send__email">
                <input
                    type="email"
                    class="waitlist__email"
                    @focus="focused = true"
                    @blur="focused = false"
                >
                <input
                    type="submit"
                    class="send__btn"
                    value="Subscribe"
                    :class="{ 'focus': focused }"
                >
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            focused: false
        }
    },
}
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

.send__email {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 120px;
}

.waitlist__email {
    width: 259px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid #2D2A26;
    border-right: none;
    border-radius: 10px 0px 0px 10px;
    font-size: 16px;
    padding-left: 10px;

    &:focus {
        outline: 1px solid #8ABADD;
        border: 1px solid #8ABADD;
        border-right: 1px solid #8ABADD;
    }

}

.send__btn {
    height: 60px;
    width: 146px;
    background-color: #F5CABF;
    border: 1px solid #2D2A26;
    border-radius: 0px 10px 10px 0px;
    transition: all .4s ease;
    color: #2D2A26;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #F68D2E;
    }

    &.focus {
        background-color: #F68D2E;
        border-left: 1px solid #8ABADD;
    }
}
</style>