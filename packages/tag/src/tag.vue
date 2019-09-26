<script>
    export default {
        name: 'ZmTag',
        props: {
            text: String,
            closable: Boolean,
            type: String,
            color: String,
            size: String,
            hit: Boolean,
            effect: {
                type: String,
                default: 'light',
                validator(val) {
                    return ['light', 'dark', 'plain'].indexOf(val) !== -1;
                }
            }
        },
        methods: {
            handleClose(event) {
                event.stopPropagation();
                this.$emit("close", event);
            },
            handleClick(event) {
                this.$emit("click", event);
            }
        },
        computed: {
            tagSize() {
                return this.size || (this.$ELEMENT || {}).size;
            }
        },
        render(h) {
            const {type, tagSize, hit, effect} = this;
            const classes = [
                'zm-tag',
                type?`zm-tag--${type}`:'',
                tagSize?`zm-tag--${tagSize}`:'',
                effect?`zm-tag--${effect}`: '',
                hit && 'is-hit'
            ];
            let closeIcon = this.closable
                            ? h('i', {
                                on: {
                                    click: this.handleClose
                                }
                }, ['x']):'';
            return h('span', {
                'class': classes,
                style: {'backgroundColor': this.color},
                on: {
                    click: this.handleClick
                },
            }, [this.$slots.default, closeIcon]);
        }
    }
</script>