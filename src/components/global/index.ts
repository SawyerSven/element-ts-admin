import Vue from 'vue';

function registerEachComponent(item: any) {
  Vue.component(item.name, item.component);
}

function registerComponents(componentList: any) {
  componentList.map((item: any) => {
    registerEachComponent(item);
  });
}

const components = [
  // @plop global
  {
    name: 'SeaList',
    component: () => import('@/components/global/List/index.vue')
  },
  {
    name: 'SeaUpload',
    component: () => import('@/components/global/Upload/index.vue')
  },
  {
    name: 'TableFilter',
    component: () => import('@/components/global/TableFilter.vue')
  },
  {
    name: 'TableMain',
    component: () => import('@/components/global/Table/TableMain.vue')
  },
  {
    name: 'TableControl',
    component: () => import('@/components/global/Table/TableControl.vue')
  },
  {
    name: 'SeaForm',
    component: () => import('@/components/global/Form/Form.vue')
  }
];

registerComponents(components);
