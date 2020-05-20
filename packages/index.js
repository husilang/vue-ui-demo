
import ZmSkeleton from './skeleton/index'
import ZmTest from './test/index'
import ZmRow from './row/index'
import ZmCol from './col/index'
import ZmContainer from './container/index'
import ZmHeader from './header/index'
import ZmFooter from './footer/index'
import ZmMain from './main/index'
import ZmAside from './aside/index'
import ZmLink from './link/index'
import ZmPageHeader from './page-header/index'
import ZmDivider from './divider/index'
import ZmTag from './tag/index'
import ZmBadge from './badge/index'
import ZmForm from './form/index'
import ZmFormItem from './form-item/index'
import ZmInput from './input/index'
import ZmCheckbox from './checkbox/index'
import ZmCheckboxGroup from './checkbox-group/index'

const components = [
    ZmSkeleton,
    ZmTest,
    ZmRow,
    ZmCol,
    ZmContainer,
    ZmHeader,
    ZmFooter,
    ZmMain,
    ZmAside,
    ZmLink,
    ZmPageHeader,
    ZmDivider,
    ZmTag,
    ZmBadge,
    ZmForm,
    ZmFormItem,
    ZmInput,
    ZmCheckbox,
    ZmCheckboxGroup,
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
    ZmRow,
    ZmCol,
    ZmContainer,
    ZmHeader,
    ZmFooter,
    ZmMain,
    ZmAside,
    ZmLink,
    ZmPageHeader,
    ZmDivider,
    ZmTag,
    ZmBadge,
}