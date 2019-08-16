<template>
    <div class="zm-test" :style="{backgroundColor: bgColor}"></div>
</template>

<script>
    export default {
        name: 'ZmTest',
        props: {
            bgColor: {
                type: String,
                default: "#ccc"
            }
        }
    }
</script>

<style lang="scss">
    .zm-test {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        animation: zm-opacity 2s infinite linear;
    }
    @keyframes zm-opacity{
        0% {opacity:1}
        10%,90%{opacity:.8}
        20%,80%{opacity:.7}
        30%,70%{opacity:.5}
        40%,60%{opacity:.3}
        50%{opacity:0}
        100%{opacity:.95}
    }
</style>