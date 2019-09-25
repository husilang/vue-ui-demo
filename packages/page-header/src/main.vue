<template>
    <div class="zm-page-header">
        <div class="zm-page-header__left" @click="$emit('back')">
            <div class="zm-page-header__title">
                <slot name="title">{{title}}</slot>
            </div>
        </div>
        <div class="zm-page-header__content">
            <slot name="content">{{content}}</slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ZmPageHeader',

        props: {
            title: {
                type: String,
                default() {
                    return '返回'
                }
            },
            content: String
        }

    }
</script>