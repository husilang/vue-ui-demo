export default {
    name: 'ZmCol',

    props: {
        span: {
            type: Number,
            default: 24
        },
        tag: {
            type: String,
            default: 'div'
        },
        offset: Number,
        pull: Number,
        push: Number,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],
    },
    computed: {
      gutter() {
          let parent = this.$parent;
          while(parent && parent.$options.componentName !== 'ZmRow') {
              parent = parent.$parent;
          }
          return parent?parent.gutter:0;
      }
    },
    render(h) {
        let classList = [];
        let style = {};

        if(this.gutter) {
            style.paddingLeft = this.gutter/2+'px';
            style.paddingRight = style.paddingLeft;
        }

        ['span', 'offset', 'pull', 'push'].forEach(prop => {
            if (this[prop] || this[prop] === 0) {
                classList.push(
                    prop !== 'span'
                        ? `zm-col-${prop}-${this[prop]}`
                        : `zm-col-${this[prop]}`
                )
            }
        });

        return h(this.tag, {
            class: ['zm-col', classList],
            style
        }, this.$slots.default);
    }
}