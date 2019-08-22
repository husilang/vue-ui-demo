<template>
    <header class="zm-header" :style="{height}">
        <slot></slot>
    </header>
</template>
<script>
    export default {
        name: 'ZmHeader',
        componentName: 'ZmHeader',
        props: {
            height: {
                type: String,
                default: '60px'
            }
        }
    }
</script>