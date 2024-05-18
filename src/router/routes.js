const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('layouts/MainLayout.vue'),
    redirect: { name: 'pictures' },
    children: [
      { path: '', name: 'pictures', component: () => import('pages/PicturesPage.vue') },
      { path: 'routes', name: 'routes', component: () => import('pages/RoutesPage.vue') },
      { path: 'cv', name: 'cv', component: () => import('pages/CvPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
