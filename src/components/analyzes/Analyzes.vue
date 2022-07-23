<template>
    <div class="analyzes">
        <div class="analyze">
            <Analyze :analyze="analyzeOne" />
            <img
                src="@/assets/analyzes/one/blood.png"
                alt="blood"
                class="one_blood"
            >
            <img
                src="@/assets/analyzes/one/swab.png"
                alt="swab"
                class="one_swab"
            >
            <img
                src="@/assets/analyzes/one/urine.png"
                alt="urine"
                class="one_urine"
            >
        </div>
        <div class="analyze second">
            <Analyze :analyze="analyzeTwo" />
            <img
                src="@/assets/analyzes/two/blood.png"
                alt="blood"
                class="two_blood"
            >
            <img
                src="@/assets/analyzes/two/swab.png"
                alt="swab"
                class="two_swab"
            >
            <img
                src="@/assets/analyzes/two/urine.png"
                alt="urine"
                class="two_urine"
            >
        </div>
        <div class="analyze three">
            <Analyze :analyze="analyzeThree" />
            <img
                src="@/assets/analyzes/three/blood.png"
                alt="blood"
                class="three_blood"
            >
        </div>
        <div class="analyze four">
            <Analyze :analyze="analyzeFour" />
            <img
                src="@/assets/analyzes/four/swab.png"
                alt="swab"
                class="four_swab"
            >
            <img
                src="@/assets/analyzes/four/urine.png"
                alt="urine"
                class="four_urine"
            >
        </div>
    </div>
</template>
<script>
import Analyze from '@/components/analyzes/Analyze';
export default {
    components: { Analyze },

    data() {
        return {
            analyzeOne: { folder: 'one', name: 'PrEP Check', body: 'HIV 1&2, Hep B & C,  Creatinine (kidney function), Syphilis, Chlamydia, Gonorrhoea Required quarterly with medication' },
            analyzeTwo: { folder: 'two', name: 'Full Panel Kit', body: 'Hep B & C, Trich, Chlamydia, Gonorrhea, HIV, Syphillis, Gonadotropin, HSVII, HcG, and HPV' },
            analyzeThree: { folder: 'three', name: 'Common Two', body: 'Chlamydia & Gonorrhoea' },
            analyzeFour: { folder: 'four', name: 'HIV & others', body: 'HIV 1&2, Hep B, & Liver function' },
        }
    }
}
</script>
<style lang="scss">
.analyzes {
    display: flex;
    flex-wrap: wrap;
}

.analyze {
    width: 50%;
    position: relative;
    background: #FCFCF0;
    border: 1px solid #2D2A26;
    border-bottom: none;
    overflow: hidden;

    &.second,
    &.four {
        border-left: none;
    }

    &.three,
    &.four {
        border-bottom: 1px solid #2D2A26;
    }
}

// stickers

.one_blood {
    position: absolute;
    right: 12%;
    top: 50%;
    width: 10%;
}

.one_swab {
    position: absolute;
    bottom: 7%;
    right: 30%;
    width: 10%;

}

.one_urine {
    position: absolute;
    left: 18%;
    top: 50%;
    width: 10%;

}

.two_urine {
    position: absolute;
    right: 20%;
    top: 50%;
    width: 10%;
}

.two_blood {
    position: absolute;
    bottom: 7%;
    right: 60%;
    width: 10%;

}

.two_swab {
    position: absolute;
    left: 10%;
    top: 50%;
    width: 10%;

}

.three_blood {
    position: absolute;
    left: 20%;
    top: 50%;
    width: 10%;

}

.four_urine {
    position: absolute;
    right: 30%;
    top: 45%;
    width: 10%;
}

.four_swab {
    position: absolute;
    left: 20%;
    top: 50%;
    width: 10%;

}

@media(max-width:600px) {
    .analyze {
        width: 100%;

        &.second,
        &.four {
            border-left: 1px solid #2D2A26;
        }

        &.three {
            border-bottom: none;
        }
    }
}
</style>