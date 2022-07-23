<template>
    <div class="insurance">
        <div class="container">
            <div class="insurance__links top">
                <a
                    href="#"
                    class="insurance__link"
                ><img
                        src="@/assets/insurance/blue-cross-blue.png"
                        alt="logo"
                        class="insurance__logo"
                    ></a>
                <a
                    href="#"
                    class="insurance__link"
                ><img
                        src="@/assets/insurance/cigna.png"
                        alt="logo"
                        class="insurance__logo"
                    ></a>
            </div>
            <div class="insurance__links bottom">
                <a
                    href="#"
                    class="insurance__link"
                ><img
                        src="@/assets/insurance/unitedhealthcare.png"
                        alt="logo"
                        class="insurance__logo"
                    ></a>
                <a
                    href="#"
                    class="insurance__link"
                ><img
                        src="@/assets/insurance/aetna.png"
                        alt="logo"
                        class="insurance__logo"
                    ></a>
            </div>
            <div class="insurance__btn">
                <button class="btn">Check Insurance</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.insurance {
    padding: 2vh 0px;
    background: #FCFCF0;
}


.insurance__links {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.insurance__link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.insurance__logo {
    width: 75%;
}

.insurance__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 10px;
}

.btn {
    width: 160px;
    height: 52px;
    font-size: 14px;
    line-height: 19px;
    background: #F5CABF;
    box-shadow: 3px 3px 0px 1px #2D2A26;
}

@media(max-width:900px) {
    .btn {
        width: 130px;
    }
}

@media(min-width:1700px) {
    .btn {
        font-size: 25px;
        padding: 30px 40px;
        width: 200px;
    }
}
</style>