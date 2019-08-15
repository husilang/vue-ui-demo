import Vue from 'vue'
import Router from 'vue-router'
import navList from '../nav.config.json'

Vue.use(Router);

let routes = navList;

let addComponent = (routes) => {
  routes.forEach(route => {
      route.component = r => require.ensure([], () => r(require(`../docs/${route.name}.md`)));
  })
};

addComponent(routes);

export default new Router({
    routes: routes
})
