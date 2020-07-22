import ZmTable from './src/table.vue'

ZmTable.install = function (Vue) {
    Vue.component(ZmTable.name, ZmTable);
};

export default ZmTable;