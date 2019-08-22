import Container from './src/main'

Container.install = function (Vue) {
    Vue.component(Container.name, Container)
};

export default Container;