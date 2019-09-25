export default {
    name: 'ZmDivider',
    functional: true,
    props: {
        direction: {
            type: String,
            default: 'horizontal',
            validator(val) {
                return ['horizontal', 'vertical'].indexOf(val) !== -1;
            }
        },

        contentPosition: {
            type: String,
            default: 'center',
            validator(val) {
                return ['left', 'center', 'right'].indexOf(val) !== -1;
            }
        }
    },

    render(h, context) {
        const $slots = context.slots();
        const {direction, contentPosition} = context.props;
        let child = $slots.default && direction !== 'vertical'
                ?h('div', {
                    'class': ['zm-divider__text', `is-${contentPosition}`]
                }, [$slots.default])
                :null;
        return h('div', {
            'class': ['zm-divider', `zm-divider--${direction}`],
        }, [
            child
        ]);
    }
}