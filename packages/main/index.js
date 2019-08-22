import Main from './src/main'

Main.install = function (Vue) {
    Vue.component(Main.name, Main);
};

export default Main;