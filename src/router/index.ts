import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JourneyLayout from '../components/JourneyLayout.vue'
const SedentaryLifestyleView = () => import('../views/SedentaryLifestyleView.vue')
const PhysicalErgonomicsView = () => import('../views/PhysicalErgonomicsView.vue')
const PhysicalActivitiesView = () => import('../views/PhysicalActivitiesView.vue')
const DietaryPlanView = () => import('../views/DietaryPlanView.vue')
const AlertReminderView = () => import('../views/AlertReminderView.vue')
const BecomeNewUserView = () => import('../views/BecomeNewUserView.vue')

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
      component: SedentaryLifestyleView,
    },
    {
      path: '/physical-ergonomics',
      name: 'physical-ergonomics',
      component: PhysicalErgonomicsView,
    },
    {
      path: '/physical-activities',
      name: 'physical-activities',
      component: PhysicalActivitiesView,
    },
    {
      path: '/dietary-plan',
      name: 'dietary-plan',
      component: DietaryPlanView,
    },
    {
      path: '/alert-reminder',
      name: 'alert-reminder',
      component: AlertReminderView,
    },
    {
      path: '/become-new-user',
      name: 'become-new-user',
      component: BecomeNewUserView,
    },
  ]
})

export default router
