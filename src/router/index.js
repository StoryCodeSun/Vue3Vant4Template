import { clearSto } from '@/utils'
import routes from 'pages-generated'
import { createRouter, createWebHashHistory } from 'vue-router'
console.log('routes', routes)
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    ...routes,
    { path: '/:pathMatch(.*)*', component: () => import('../views/404/404.vue') }
  ]
})
router.beforeEach((to, from, next) => {
  // const token = getSto('token')
  const token = '111111111'
  // next()
  if (to.path === '/login/login') {
    clearSto()
    next()
  } else if (!token) {
    next('/login/login')
  } else {
    next()
  }
})

export default router
