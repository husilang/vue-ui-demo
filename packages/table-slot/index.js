import ZmTableSlot from './src/table.vue'

ZmTableSlot.install = function (Vue) {
    Vue.component(ZmTableSlot.name, ZmTableSlot);
};

export default ZmTableSlot;