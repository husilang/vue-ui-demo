import ZmLink from './src/main'

ZmLink.install = function (Vue) {
    Vue.component(ZmLink.name, ZmLink);
};

export default ZmLink;