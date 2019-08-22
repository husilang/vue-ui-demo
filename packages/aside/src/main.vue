<template>
    <aside class="zm-aside" :style="{width}">
        <slot></slot>
    </aside>
</template>
<script>
    export default {
        name: 'ZmAside',
        componentName: 'ZmAside',
        props: {
            width: {
                type: String,
                default: '300px'
            }
        }
    }
</script>