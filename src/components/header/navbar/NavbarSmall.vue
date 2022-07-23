<template>
    <div class="header__top">
        <Ticker />
        <div class="navbar">
            <div class="container">
                <div class="nav__btns">
                    <button
                        class="burger"
                        @click="$store.dispatch('addShowBurger')"
                    ><img
                            src="@/assets/navbar/burger.png"
                            alt="sdd"
                            class="burger__img"
                        ></button>
                    <button class="left__btn btn">Get a Kit<img
                            src="@/assets/navbar/box.png"
                            alt="box"
                            class="box"
                        ></button>
                </div>
            </div>
        </div>
    </div>
    <div
        class="popup__wrapper"
        :class="{ 'active': $store.state.showBurger }"
        @click.stop="hideBurger"
    >
        <div class="popup">
            <button class="close__btn"><img
                    src="@/assets/navbar/close.png"
                    alt="close"
                    class="close"
                ></button>
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
                <button class="right__btn btn"><img
                        src="@/assets/navbar/user.png"
                        alt="user"
                        class="user"
                    ></button>
            </ul>
        </div>
    </div>
</template>
<script>
import Ticker from '@/components/header/Ticker';

export default {
    components: { Ticker },

    methods: {
        hideBurger(event) {
            if (event.target.classList[0] === 'popup__wrapper' || event.target.classList[0] === 'close') {
                this.$store.dispatch('removeShowBurger')
            }
        },
    },

    mounted() {
        window.addEventListener('keyup', event => {
            if (event.key === 'Escape') {
                this.$store.dispatch('removeShowBurger')
            }
        })
    }

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


.nav__links {
    display: flex;
    flex-direction: column;
}

.nav__link {
    transition: all 0.3s ease;
    margin-right: 10px;
    margin-bottom: 15px;

    &:last-child {
        margin-right: 0px;
    }

    &:active {
        transform: scale(0.9);
    }
}

.link {
    font-size: 20px;
    font-weight: 700;
    line-height: 19px;
    color: #2D2A26;
}

.nav__btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    display: block;
    padding: 1.3vh;
    background: #FCFCF0;
    width: 20%;
}

.burger {
    border: none;
    border-radius: 10px;
    background: #F3F3E7;
}

.close__btn {
    background-color: #2d2a2604;
    border: none;
    position: absolute;
    top: 5%;
    right: 5%;
}

.popup__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(51, 51, 51, 0.4);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;

    &.active {
        opacity: 1;
        visibility: visible;
    }

}

.popup {
    position: relative;
    width: 80%;
    background: #FCFCF0;
    border: 1px solid #2D2A26;
    border-radius: 15px;
    padding: 0px 30px;
    padding-top: 50px;
    padding-bottom: 33px;
}
</style>