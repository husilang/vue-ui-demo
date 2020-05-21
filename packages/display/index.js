import ZmDisplay from './src/display'

ZmDisplay.install = function (Vue) {
    Vue.component(ZmDisplay.name, ZmDisplay);
};

export default ZmDisplay;