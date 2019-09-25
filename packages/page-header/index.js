import PageHeader from './src/main';

PageHeader.install = function (Vue) {
    Vue.component(PageHeader.name, PageHeader);
};

export default PageHeader;