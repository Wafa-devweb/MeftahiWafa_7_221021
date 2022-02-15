import { createWebHistory, createRouter } from "vue-router";
// 2. Définir des routes ==>
// Chaque route correspondre à un composant du repertoire views.
const routes = [
    {
      path: '/',
      name: 'signin',
      component: () => import('../views/signin.vue')
    },
    
    {  
      path: '/wall',
      name: 'wall',
      component: () => import('../views/wall.vue')
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('../views/profil.vue')
    },
    {
      path: '/perso',
      name: 'perso',
      component: () => import('../views/perso.vue'),
    },
    {
      path: '/menbre',
      name: 'menbre',
      component: () => import('../views/menbers.vue')
    }
]
// 3. Créez l'instance du routeur et passez l'option `routes`. Pour placez des options supplémentaires ici
const router = createRouter({
  // 4. Indiquez l'implémentation de l'historique à utiliser .Nous utilisons ici l'historique de hachage pour plus de simplicité.
  history: createWebHistory(),
  routes
})
// option pour ces const // a mettre a la fin de dev 'quard'
/*router.beforeEach((to, from, next) => {
  const Access = ["/"]
  const pagesVerif = !Access.includes(to.path)
  const loggedIn = sessionStorage.getItem("userId")
  const sessionToken = sessionStorage.getItem("token")
  if (pagesVerif && !loggedIn && !sessionToken) {
    return next("/")
  }
  next()
})
*/
// Export du routeur
export default router



