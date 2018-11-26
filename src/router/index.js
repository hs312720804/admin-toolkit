
import Vue from 'vue'
import Router from 'vue-router'
import Breadcrumb from "@/lib/components/Breadcrumb.vue"
import ActionList from "@/lib/components/ActionList.vue";
import Table from "@/lib/components/Table.vue"
// import ContentList from "@/lib/components/ContentList.vue";
// import GateSchemaForm from "@/lib/components/GateSchemaForm.vue";
import TagNav from "@/lib/components/TagNav.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/TagNav',
      name: 'TagNav',
      component: TagNav
    },
    {
        path: '/',
        name: 'Breadcrumb',
        component: Breadcrumb
      },
      {
        path: '/ActionList',
        name: 'ActionList',
        component: ActionList
      },
      {
        path: '/Table',
        name: 'Table',
        component: Table
      }
  ]
});
