import Wrap from '@/views/Wrap/Wrap.vue';

const subRoutes = [
  {
    path: '/diary',
    name: 'diary',
    meta: {
      title: '施工日志'
    },
    components: {
      main: () => import('@/views/Diary/Diary.vue')
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
