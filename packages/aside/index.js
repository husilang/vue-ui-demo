import Aside from './src/main'

Aside.install = function (Vue) {
    Vue.component(Aside.name, Aside);
};

export default Aside;