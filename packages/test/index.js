import ZmTest from './src/test.vue'

ZmTest.install = function (Vue) {
    Vue.component(ZmTest.name, ZmTest);
};

export default ZmTest;