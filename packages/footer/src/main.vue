<template>
    <footer class="zm-footer" :style="{height}">
        <slot></slot>
    </footer>
</template>
<script>
    export default {
        name: 'ZmFooter',
        componentName: 'ZmFooter',
        props: {
            height: {
                type: String,
                default: '60px'
            }
        }
    }
</script>