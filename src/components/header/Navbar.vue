<template>
    <div class="header__top">
        <Ticker />
        <div class="navbar">
            <div class="container">
                <div class="nav__links">
                    <a
                        href="#"
                        class="nav__link"
                    >About</a>
                    <a
                        href="#"
                        class="nav__link"
                    >How it works</a>
                    <a
                        href="#"
                        class="nav__link"
                    >Blog</a>
                    <a
                        href="#"
                        class="nav__link"
                    >Contacts</a>
                </div>
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

.nav__link {
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #2D2A26;
    margin-right: 10px;
    transition: all 0.3s ease;

    &:last-child {
        margin-right: 0px;
    }

    &:hover {
        font-size: 15px;
    }

    &:active {
        font-size: 14px;
    }
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