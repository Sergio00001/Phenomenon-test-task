<template>
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
export default {

}
</script>
<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(180deg, #DEDDE2 0%, #E3E6ED 44.29%, #DDE6EF 100%);
}

.header__content {
    display: flex;
    flex-direction: column;
    padding-left: 7%;
}

.photo__wrapper {
    padding-top: 85px;
}

.photo {
    width: 100%;
}


.title {
    max-width: 513px;
    font-weight: 700;
    font-size: calc(40px + 62.6 * ((100vw - 768px) / 1440));
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
}

.italic_blue {
    color: #307FE2;
    font-family: 'Playfair Display Bold Italic', sans-serif;
}

.italic_orange {
    color: #F87C56;
    font-family: 'Playfair Display Bold Italic', sans-serif;
}

// @media(max-width:1270px) {
//     .title {
//         font-size: 60px;
//     }
// }

// @media(max-width:1024px) {
//     .title {
//         font-size: 50px;
//     }
// }

// @media(max-width:950px) {
//     .title {
//         font-size: 41px;
//     }
// }
</style>