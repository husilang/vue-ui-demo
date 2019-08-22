<template>
    <section class="zm-container" :class="{'is-vertical': isVertical}">
        <slot></slot>
    </section>
</template>
<script>
    export default {
        name: 'ZmContainer',
        componentName: 'ZmContainer',
        props: {
            direction: String
        },
        computed: {
            isVertical(){
                if (this.direction === "vertical") {
                    return true;
                } else if(this.direction === "horizontal") {
                    return false;
                }
                // 默认值，子元素中有 zm-header 或 zm-footer 时为 vertical，否则为 horizontal
                return this.$slots && this.$slots.default
                    ? this.$slots.default.some(vnode => {
                        const tag = vnode.componentOptions && vnode.componentOptions.tag;
                        return tag === "zm-header" || tag === "zm-footer";
                    })
                    : false;
            }
        }

    }
</script>