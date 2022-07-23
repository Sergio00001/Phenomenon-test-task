<template>
    <div class="footer">
        <div class="container">
            <div class="footer__top">
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
                <my-form class="form"></my-form>
            </div>
        </div>
        <hr class="crossline">
        <div class="container">
            <div class="footer__bottom">
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
                <p class="copyright">© 2021 Copyright Juna, All rights reserved</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {

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
    flex-direction: column;
}

.footer__social {
    display: flex;
    align-items: center;
    justify-content: center;
}

.form {
    margin-top: 20px !important;
    margin-bottom: 25px !important;
}

.link {
    font-size: calc(14px + (9 + 9 * 0.7) * (100vw - 768px) / 2560);
    line-height: 232%;
    color: #FCFCF0;
}

.crossline {
    border: 1px solid #524C45;
    border-bottom: none;
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

.footer__links {
    display: flex;
    justify-content: space-around;
}

.footer__bottom {
    display: flex;
    flex-direction: column;
}

.brake {
    margin: 0px 15px;
    color: #FCFCF0;
}


.copyright {
    font-size: calc(13px + (14 + 14 * 0.7) * (100vw - 768px) / 2560);
    line-height: 232%;
    text-align: center;
    color: #6F6A63;
}
</style>