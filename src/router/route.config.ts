import Wrap from '@/views/Wrap/Wrap.vue';

export const subRoutes = [
  {
    path: '/diary',
    name: 'diary',
    meta: {
      title: '施工日志'
    },
    components: {
      main: () => import('@/views/Diary/Diary.vue')
    }
  },
  {
    path: '/project',
    name: 'project',
    meta: {
      title: '项目详情'
    },
    components: {
      main: () => import('@/views/Project/Project.vue')
    }
  },
  {
    path: '/record',
    name: 'record',
    meta: {
      title: '施工日志'
    },
    components: {
      main: () => import('@/views/Record/Record.vue')
    }
  }
];

const routes = [
  {
    path: '/',
    name: 'home',
    component: Wrap,
    children: subRoutes
  }
];

export default routes;
