<template>
    <div class="our_mission">
        <div class="our_mission__img">
            <img
                src="@/assets/ourMission/Frame.png"
                alt="img"
                class="picture"
            >
        </div>
        <div class="container">
            <div class="our_mission__content">
                <h1 class="title">Our mission is simple: to make healthcare <span class="italic__orange">accessible</span>, <span class="italic__pink">affordable</span>, and <span
                        class="italic__blue">easy to use</span>.</h1>
                <p class="text">STI rates are hitting record numbers, yet testing is lacking. We want to fix this by providing a more discreet and convenient way of maintaining sexual health for you.
                    The easier it is to access and learn about your health, the easier it is for you to take meaningful action, whenever you need it.</p>
                <div class="our_mission__btn">
                    <button class="btn">Get started</button>
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
.our_mission {
    background-color: #2D2A26;
    padding-top: 64px;
    position: relative;

}

.our_mission__img {
    position: absolute;
    z-index: 0;
    bottom: -6px;
    left: 5%;
}

.picture {
    width: 90%;
    height: auto;
}

.our_mission__content {
    position: relative;
    z-index: 1;
    margin-left: 50%;
    padding-bottom: 68px;
}

.title {
    max-width: 494px;
    font-size: calc(37px + 23.7 * ((100vw - 768px) / 1440));
    line-height: 105%;
    letter-spacing: -3px;
    color: #FFFFFF;
    margin-bottom: 28px;
}

.italic__blue {
    color: #8ABADD;
    font-family: 'Playfair Display Bold Italic', sans-serif;
}

.italic__orange {
    color: #F87C56;
    font-family: 'Playfair Display Bold Italic', sans-serif;
}

.italic__pink {
    color: #F5CABF;
    font-family: 'Playfair Display Bold Italic', sans-serif;
}

.text {
    max-width: 514px;
    font-weight: 500;
    font-size: calc(12px + (5 + 5 * 0.7) * ((100vw - 768px) / 1440));
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin-bottom: 36px;
}

.btn {
    padding: 15px 36px;
    font-size: 16px;
    line-height: 22px;
    background: #ECB3CB;
    box-shadow: 4px 4px 0px 1px #FFFFFF;

    &:hover {
        box-shadow: 2px 2px 0px 1px #FFFFFF;
    }

    &:active {
        box-shadow: 0px 0px 0px 0px #FFFFFF;
    }
}


@media(min-width: 1700px) {
    .title {
        max-width: 650px;
    }

    .text {
        max-width: 630px;
    }

    .btn {
        font-size: 22px;
        padding: 20px 40px;
    }

    .our_mission__img {
        left: 13%;
    }
}

@media(min-width: 2000px) {
    .picture {
        width: 110%;
    }
}

@media(max-width:1220px) {
    .picture {
        width: 75%;
    }
}

@media(max-width:900px) {
    .our_mission__img {
        left: 1%;
    }
}

@media(max-width:740px) {
    .our_mission {
        display: flex;
        flex-direction: column-reverse;
    }

    .our_mission__img {
        position: static;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .our_mission__content {
        position: static;
        margin-left: 0%;
        padding-bottom: 20px;
        max-width: 350px;
    }

    .picture {
        width: 50%;
    }

    .title {
        font-size: calc(37px + -0.3 * (100vw - 768px) / 1440);
        letter-spacing: -1px;
    }
}
</style>