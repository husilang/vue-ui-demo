<template>
    <a :class="[
        'zm-link',
        type?`zm-link--${type}`:'',
        disabled && 'is-disabled',
        underline && !disabled && 'is-underline'
        ]"
        :href="disabled?null:href"
        v-bind="$attrs"
        @click="handleClick">
        <span v-if="$slots.default" class="zm-link--inner">
            <slot></slot>
        </span>
    </a>
</template>
<script>
    export default {
        name: 'ZmLink',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            underline: {
                type: Boolean,
                default: true
            },
            disabled: Boolean,
            href: String,
            icon: String
        },
        methods: {
            handleClick(event)  {
                if (!this.disabled) {
                    if (!this.href) {
                        this.$emit("click", event);
                    }
                }
            }
        }
    }
</script>