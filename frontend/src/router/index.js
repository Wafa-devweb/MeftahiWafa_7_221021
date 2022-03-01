import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
      path: '/',
      name: 'MySignin',
      component: () => import('../views/MySignin.vue')
    },
    
    {  
      path: '/MyWall',
      name: 'MyWall',
      component: () => import('../views/MyWall.vue')
    },
    {
      path: '/MyProfil',
      name: 'MyProfil',
      component: () => import('../views/MyProfil.vue')
    },
    {
      path: '/MyPerso',
      name: 'MyPerso',
      component: () => import('../views/MyPerso.vue'),
    },
    {
      path: '/MyMenber',
      name: 'MyMenber',
      component: () => import('../views/MyMenbers.vue')
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const Access = ["/"]
  const pagesVerif = !Access.includes(to.path)
  const loggedIn = sessionStorage.getItem("userId")
  const sessionToken = sessionStorage.getItem("token")
  if (pagesVerif && !loggedIn && !sessionToken) {
    return next("/")
  }
  next()
})

export default router