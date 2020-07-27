import ZmTree from './src/tree.vue'

ZmTree.install = function (Vue) {
    Vue.component(ZmTree.name, ZmTree);
};

export default ZmTree;