<template>
    <div
        class="footer"
        v-if="!$store.state.smallScreen"
    >
        <div class="container">
            <div class="footer__top">
                <div class="footer__top__links">
                    <ul class="footer__links">
                        <li class="footer__link">
                            <a
                                href="#"
                                class="link"
                            >About</a>
                        </li>
                        <li class="footer__link">
                            <a
                                href="#"
                                class="link"
                            >How it works</a>
                        </li>
                        <li class="footer__link">
                            <a
                                href="#"
                                class="link"
                            >Blog</a>
                        </li>
                        <li class="footer__link">
                            <a
                                href="#"
                                class="link"
                            >Contacts</a>
                        </li>
                    </ul>
                    <ul class="footer__links">
                        <li class="footer__link">
                            <a
                                href="#"
                                class="link"
                            >Privacy Policy</a>
                        </li>
                        <li class="footer__link">
                            <a
                                href="#"
                                class="link"
                            >Terms and Conditions</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__kits">
                    <h2 class="footer__title">Discover our Kits</h2>
                    <button class="btn">Get a Kit <img
                            src="@/assets/navbar/box.png"
                            alt="box"
                            class="box"
                        ></button>
                </div>
            </div>
            <hr class="cross_line">
            <div class="footer__bottom">
                <ul class="footer__social">
                    <li class="footer__link">
                        <a
                            href="#"
                            class="link"
                        >Podcast</a>
                    </li>
                    <span class="brake">/</span>
                    <li class="footer__link">
                        <a
                            href="#"
                            class="link"
                        >TikTok</a>
                    </li>
                    <span class="brake">/</span>
                    <li class="footer__link">
                        <a
                            href="#"
                            class="link"
                        >Instagram</a>
                    </li>
                </ul>
                <p class="copyright">© 2021 Copyright, All rights reserved</p>
                <my-form class="form"></my-form>
            </div>
        </div>
    </div>
    <FooterSmall v-if="$store.state.smallScreen" />
</template>
<script>
import FooterSmall from '@/components/footer/FooterSmall';
export default {
    components: { FooterSmall }
}
</script>
<style scoped lang="scss">
.footer {
    background: #2D2A26;
    padding-top: 80px;
    position: sticky;
    bottom: 0;
}

.footer__top {
    display: flex;
}

.footer__links {
    display: flex;
    flex-direction: column;

    &:first-child {
        width: 160px;
    }
}

.footer__top__links {
    display: flex;
    margin-left: 30%;
}

.footer__kits {
    margin-left: 25%;
}

.link {
    font-size: calc(14px + (9 + 9 * 0.7) * (100vw - 768px) / 2560);
    line-height: 232%;
    color: #FCFCF0;
}

.footer__link {
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }
}

.footer__title {
    font-size: 22px;
    line-height: 232%;
    color: #FCFCF0;
}

.btn {
    padding: 1vh 27px;
    background: #8ABADD;
    color: #2D2A26;
    font-size: 14px;
    line-height: 19px;
    box-shadow: 4px 4px 0px 1px #FFFFFF;

    &:hover {
        box-shadow: 2px 2px 0px 1px #FFFFFF;
    }

    &:active {
        box-shadow: 0px 0px 0px 0px #FFFFFF;
    }
}

.box {
    margin-left: 10px;
}

.cross_line {
    margin-top: 90px;
}

// Footer Bottom

.footer__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer__social {
    display: flex;
    align-items: center;
}

.brake {
    margin: 0px 15px;
    color: #FCFCF0;
}

.form {
    margin-top: 35px !important;
    margin-bottom: 44px !important;
}

.copyright {
    font-size: calc(13px + (14 + 14 * 0.7) * (100vw - 768px) / 2560);
    line-height: 232%;
    text-align: center;
    color: #6F6A63;
}


@media(max-width:1250px) {
    .footer__top__links {
        margin-left: 20%;
    }

    .footer__kits {
        margin-left: 20%;
    }
}

@media(max-width:950px) {
    .footer__top__links {
        margin-left: 0%;
    }

    .footer__kits {
        margin-left: 0%;
    }

    .footer__top {
        justify-content: space-around;
    }

    .brake {
        margin: 0px 5px;
    }
}

@media(min-width: 1700px) {
    .footer__links {

        &:first-child {
            width: 200px;
        }
    }

    .footer__title {
        font-size: 30px;
    }

    .btn {
        font-size: 22px;
    }
}
</style>