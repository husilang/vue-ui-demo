<template>
    <div class="zm-skeleton" :style="{backgroundColor: bgColor, paddingBottom, width}"></div>
</template>
<script>
    export default {
        name: 'ZmSkeleton',
        props: {
            proportion: {
                type: Number,
                default: 1
            },
            bgColor: {
                type: String,
                default: "#b4bccc"
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: [String, Boolean],
                default: false
            }
        },
        data() {
            return {
                paddingBottom: this.height || `${this.proportion * 100}%`
            }
        }
    }
</script>
<style>
    .zm-skeleton {
        width: 100%;
        height: 0;
        animation: zm-opacity 2s infinite linear;
    }
    @keyframes zm-opacity{
        0% {opacity:1}
        10%,90%{opacity:.9}
        20%,80%{opacity:.8}
        30%,70%{opacity:.7}
        40%,60%{opacity:.6}
        50%{opacity:.5}
        100%{opacity:.95}
    }
</style>