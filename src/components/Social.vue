<template>
    <div class="social">
        <div class="spotify">
            <div class="container">
                <div class="picture__wrapper">
                    <img
                        src="@/assets/social/spotify/pic.png"
                        alt="pic"
                        class="picture"
                    >
                </div>
                <h2 class="spotify__title">Better Safe <br> than Horny</h2>
                <p class="spotify__text">With Carly and Josh</p>
            </div>
            <img
                src="@/assets/social/spotify/spotify.png"
                alt="logo"
                class="spotify__sticker"
            >
        </div>
        <div class="tiktok">
            <div class="container">
                <div class="logo__wrapper">
                    <img
                        src="@/assets/social/tiktok/tiktok.png"
                        alt="logo"
                        class="tiktok__logo"
                    >
                </div>
                <h2 class="tiktok__title">Watch us on Tiktok</h2>
                <div class="phone__wrapper">
                    <img
                        src="@/assets/social/tiktok/phone.png"
                        alt="phone"
                        class="phone"
                    >
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
.social {
    display: flex;
}

.container {
    width: 80%;
}

.spotify {
    width: 50%;
    background: #FCFCF0;
    border: 1px solid #2D2A26;
    padding-top: 100px;
    padding-bottom: 40px;
    position: relative;
}

.picture__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
}

.picture {
    width: 100%;
}

.spotify__title {
    font-size: calc(45px + (25 + 25 * 0.7) * (100vw - 768px) / 1440);
    line-height: 95%;
    letter-spacing: -3px;
    color: #2D2A26;
    margin-bottom: 30px;
}

.spotify__text {
    letter-spacing: -0.02em;
    color: #2D2A26;
    font-weight: 500;
    font-size: calc(19px + (10 + 10 * 0.7) * (100vw - 768px) / 2560);
    line-height: 180%;
}

.spotify__sticker {
    position: absolute;
    left: 15%;
    top: 50%;
}

@media(max-width:900px) {
    .spotify__sticker {
        width: 15%;
        top: 35%;
    }

    .spotify {
        padding-top: 50px;
    }
}

// tiktok

.tiktok {
    width: 50%;
    padding-top: 70px;
    background-image: linear-gradient(168deg, #ea0c2a 3%, #8c03ff 42%, #0000ff 67%, #00cfff 89%);
    position: relative;
}

.logo__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}


.tiktok__title {
    text-align: center;
    letter-spacing: -3px;
    color: #FCFCF0;
    font-size: calc(33px + (19 + 19 * 0.7) * (100vw - 768px) / 1440);
    line-height: 90%;
    margin-top: 18px;
    margin-bottom: 50px;
}

.phone__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.phone {
    width: 100%;
}

@media(max-width:900px) {
    .tiktok__logo {
        width: 20%;
    }
}


@media(max-width:600px) {
    .social {
        flex-wrap: wrap;
    }

    .spotify {
        width: 100%;
    }

    .tiktok {
        width: 100%;
    }

    .phone__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .phone {
        width: 80%;
    }

    .tiktok__title {
        letter-spacing: -1px;
    }
}
</style>