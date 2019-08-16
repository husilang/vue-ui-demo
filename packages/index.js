import ZmSkeleton from './skeleton/index'
import ZmTest from './test/index'
import ZmRow from './row/index'

const components = [
    ZmSkeleton,
    ZmTest,
    ZmRow,
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
    ZmSkeleton,
    ZmTest,
    ZmRow
}