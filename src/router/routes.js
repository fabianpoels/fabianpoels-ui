import PicturesPage from 'pages/PicturesPage.vue'
import RoutesPage from 'pages/RoutesPage.vue'
import CvPage from 'pages/CvPage.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('layouts/MainLayout.vue'),
    redirect: { name: 'pictures' },
    children: [
      { path: 'pictures/:slug?', name: 'pictures', component: PicturesPage },
      { path: 'routes', name: 'routes', component: RoutesPage },
      { path: 'cv', name: 'cv', component: CvPage },
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
