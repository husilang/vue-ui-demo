import ZmSkeleton from './skeleton/index'

const components = [
    ZmSkeleton
];

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window.Vue !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ZmSkeleton
}