import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeViewV2.vue'
const JourneyView = () => import('../views/JourneyView.vue')
const SedentaryInfoView = () => import('../views/journey/SedentaryInfoView.vue')
const RiskMeterView = () => import('../views/journey/RiskMeterView.vue')
const MeasureInfoView = () => import('../views/journey/MeasureInfoView.vue')
const PhysicalErgonomicsView = () => import('../views/PhysicalErgonomicsView.vue')
const PhysicalActivitiesView = () => import('../views/PhysicalActivitiesView.vue')
const DietaryPlanView = () => import('../views/DietaryPlanView.vue')
const AlertReminderView = () => import('../views/AlertReminderView.vue')
const BecomeNewUserView = () => import('../views/BecomeNewUserView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/journey',
      name: 'journey',
      component: JourneyView,
      redirect: () => ({ name: 'sedentary-info' }),
      children: [
        {
          path: 'sedentary-info',
          name: 'sedentary-info',
          component: SedentaryInfoView,
        },
        {
          path: 'risk-meter',
          name: 'risk-meter',
          component: RiskMeterView,
        },
        {
          path: 'measure-info',
          name: 'measure-info',
          component: MeasureInfoView,
        }
      ],
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
    {
      path: '/tool',
      name: 'tool',
      component: null,
    }
  ]
})

export default router
