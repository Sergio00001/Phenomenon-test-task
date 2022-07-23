<template>
    <form class="send__email">
        <input
            type="email"
            class="email"
            @focus="focused = true"
            @blur="focused = false"
        >
        <input
            type="submit"
            class="send__btn"
            value="Subscribe"
            :class="{ 'focus': focused }"
        >
    </form>
</template>
<script>
export default {
    data() {
        return {
            focused: false
        }
    },

    name: 'my-form'
}
</script>
<style scoped lang="scss">
.send__email {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 120px;
}

.email {
    width: 259px;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid #2D2A26;
    border-right: none;
    border-radius: 10px 0px 0px 10px;
    font-size: 16px;
    padding-left: 10px;

    &:focus {
        outline: none;
        border: 2px solid #8ABADD;
    }

}

.send__btn {
    position: relative;
    right: 3px;
    padding: 0px 30px;
    height: 60px;
    background-color: #F5CABF;
    border: 1px solid #2D2A26;
    border-radius: 0px 10px 10px 0px;
    transition: all .4s ease;
    color: #2D2A26;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #F68D2E;
    }

    &.focus {
        background-color: #F68D2E;
        border-left: 2px solid #8ABADD;
    }

}

@media(max-width:1050px) {
    .email {
        width: 150px;
        height: 45px;
    }

    .send__btn {
        height: 45px;
        padding: 0px 10px;
        font-size: 14px;
    }
}

@media(min-width:1700px) {
    .email {
        width: 330px;
        height: 70px;
    }

    .send__btn {
        height: 70px;
        font-size: 22px;
    }
}
</style>