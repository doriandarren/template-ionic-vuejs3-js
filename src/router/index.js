import { createRouter, createWebHistory } from '@ionic/vue-router';
import { useAuthenticationStore } from '@/stores/auth/authentications.js';


const requireAuth = async(to, from, next) => {
  const useAuthentication = useAuthenticationStore();
  try {
    await useAuthentication.currentUser();
    if(useAuthentication.isLoggedIn){
      next();
    }else{
      next({name: "Login" });
    }
  } catch (e) {
      console.log(e);
      next({name: "Login" });
  }
}



const routes  = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    beforeEnter: requireAuth,
    component: () => import('@/views/dashboard/Home.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    beforeEnter: requireAuth,
    component: () => import('@/views/chat/ChatPage.vue')
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
