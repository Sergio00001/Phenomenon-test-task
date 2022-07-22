<template>
    <div class="header__top">
        <Ticker />
        <div class="navbar">
            <div class="container">
                <ul class="nav__links">
                    <li class="nav__link">
                        <a
                            href="#"
                            class="link"
                        >About</a>
                    </li>
                    <li class="nav__link">
                        <a
                            href="#"
                            class="link"
                        >How it works</a>
                    </li>
                    <li class="nav__link">
                        <a
                            href="#"
                            class="link"
                        >Blog</a>
                    </li>
                    <li class="nav__link">
                        <a
                            href="#"
                            class="link"
                        >Contacts</a>
                    </li>
                </ul>
                <div class="nav__btns">
                    <button class="left__btn btn">Get a Kit<img
                            src="@/assets/navbar/box.png"
                            alt="box"
                            class="box"
                        ></button>
                    <button class="right__btn btn"><img
                            src="@/assets/navbar/user.png"
                            alt="user"
                            class="user"
                        ></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Ticker from '@/components/header/Ticker';

export default {
    components: { Ticker }
}
</script>
<style scoped lang="scss">
.header__top {
    position: fixed;
    width: 100%;
    z-index: 99;
    border-bottom: 1px solid #2D2A26;
}

.navbar {
    background: #FCFCF0;
    display: flex;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__links {
    display: flex;
    align-items: center;
}

.nav__link {
    transition: all 0.3s ease;
    margin-right: 10px;

    &:last-child {
        margin-right: 0px;
    }

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }
}

.link {
    font-weight: 500;
    font-size: calc(14px + (16 + 16 * 0.7) * (100vw - 768px) / 2560);
    line-height: 19px;
    color: #2D2A26;
}

.nav__btns {
    display: flex;
}

.left__btn {
    padding: 1vh 27px;
    background: #FCFCF0;
    margin-right: 12px;
    margin-top: 10px;
    margin-bottom: 19px;
    font-size: calc(14px + (9 + 9 * 0.7) * (100vw - 768px) / 2560);
    line-height: 19px;
}

.box {
    margin-left: 10px;
}

.right__btn {
    padding: 1.3vh;
    background: #FCFCF0;
    margin-top: 10px;
    margin-bottom: 19px;
}
</style>