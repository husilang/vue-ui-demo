import ZmSkeleton from './src/skeleton.vue'

ZmSkeleton.install = function (Vue) {
  Vue.component(ZmSkeleton.name, ZmSkeleton);
};

export default ZmSkeleton;