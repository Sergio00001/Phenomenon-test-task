<template>
    <Navbar />
    <div class="header">
        <div class="header__content">
            <h1 class="title">Replace awkward lab visits with at-home <span class="italic_blue">STI testing</span> and <span class="italic_orange">treatment</span>.</h1>
            <div class="header__btn">
                <button class="btn">Get started</button>
            </div>
        </div>
        <div class="photo__wrapper">
            <img
                src="@/assets/header/photo.png"
                alt="photo"
                class="photo"
            >
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/header/navbar/Navbar';
export default {
    components: { Navbar }
}
</script>
<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(180deg, #DEDDE2 0%, #E3E6ED 44.29%, #DDE6EF 100%);
    padding-top: 10%;
}

.header__content {
    display: flex;
    flex-direction: column;
    padding-left: 7%;
}

.photo__wrapper {
    position: relative;
    top: 5px;
}

.photo {
    width: 100%;
}


.title {
    max-width: 513px;
    font-weight: 700;
    font-size: calc(40px + 116.2 * (100vw - 768px) / 2560);
    line-height: 95%;
    letter-spacing: -3px;
    color: #2D2A26;
}

.header__btn {
    margin-top: 30px;
}

.btn {
    padding: 15px 36px;
    font-size: 16px;
    line-height: 22px;
    background-color: #8ABADD;
}

.italic_blue {
    color: #307FE2;
    font-family: 'Playfair Display Bold Italic', sans-serif;
}

.italic_orange {
    color: #F87C56;
    font-family: 'Playfair Display Bold Italic', sans-serif;
}

@media(max-width:767px) {
    .header {
        flex-direction: column;
        padding-top: 20%;
    }

    .title {
        max-width: 335px;
        text-align: center;
        font-size: 44px;
        padding: 5px;
    }

    .header__content {
        padding-left: 0;
    }

    .header__btn {
        display: flex;
        justify-content: center;
        margin-top: 0;
    }
}

@media(max-width:650px) {
    .header {
        padding-top: 22%;
    }
}

@media(max-width:425px) {
    .header {
        padding-top: 27%;
    }
}

@media(max-width:374px) {
    .header {
        padding-top: 31%;
    }
}

@media(max-width:300px) {
    .header {
        padding-top: 35%;
    }
}

@media(min-width: 1700px) {
    .title {
        max-width: 720px;
    }

    .btn {
        padding: 20px 40px;
        font-size: 22px;
    }
}

@media(min-width: 2000px) {
    .title {
        max-width: 950px;
    }

    .photo {
        width: 124%;
    }

    .header {
        justify-content: space-around;
    }
}
</style>