import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sedentary-lifestyle',
      name: 'sedentary-lifestyle',
      component: () => import('../views/SedentaryLifestyleView.vue'),
    },
    {
      path: '/physical-ergonomics',
      name: 'physical-ergonomics',
      component: () => import('../views/PhysicalErgonomicsView.vue'),
    },
    {
      path: '/physical-activities',
      name: 'physical-activities',
      component: () => import('../views/PhysicalActivitiesView.vue'),
    },
    {
      path: '/dietary-plan',
      name: 'dietary-plan',
      component: () => import('../views/DietaryPlanView.vue'),
    },
    {
      path: '/alert-reminder',
      name: 'alert-reminder',
      component: () => import('../views/AlertReminderView.vue'),
    },
    {
      path: '/become-new-user',
      name: 'become-new-user',
      component: () => import('../views/BecomeNewUserView.vue'),
    },
  ]
})

export default router
