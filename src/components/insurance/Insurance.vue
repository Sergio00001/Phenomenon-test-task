<template>
    <div
        class="insurance"
        v-if="!$store.state.smallScreen"
    >
        <div class="container">
            <div class="insurance__links">
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
                <div class="insurance__btn">
                    <button class="btn">Check Insurance</button>
                </div>
            </div>
        </div>
    </div>
    <InsuranceSmall v-if="$store.state.smallScreen" />
</template>
<script>
import InsuranceSmall from '@/components/insurance/insuranceSmall';

export default {
    components: { InsuranceSmall }
}
</script>
<style scoped lang="scss">
.insurance {
    padding: 2vh 0px;
    background: #FCFCF0;
}


.insurance__links {
    display: flex;
    justify-content: space-around;
    align-self: center;
}

.insurance__logo {
    width: 100%;
}

.insurance__btn {
    display: flex;
    justify-content: center;
    align-items: center;
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