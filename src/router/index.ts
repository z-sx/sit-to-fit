import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeViewV2.vue'
const SedentaryInfoView = () => import('../views/journey-v2/SedentaryInfoView.vue')
const RiskMeterView = () => import('../views/journey/RiskMeterView.vue')
const MeasureInfoView = () => import('../views/journey/MeasureInfoView.vue')
const HealthyLifestyleView = () => import('../views/HealthyLifestyleView.vue')
const PhysicalActivitiesView = () => import('../views/healthy-lifestyle/PhysicalActivitiesView.vue')
const DietaryPlanView = () => import('../views/healthy-lifestyle/DietaryPlanView.vue')
const RecommendationView = () => import('../views/RecommendationView.vue')
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
      redirect: 'sedentary-info'
    },
    {
      path: '/sedentary-info',
      name: 'sedentary-info',
      component: SedentaryInfoView,
    },
    {
      path: '/risk-meter',
      name: 'risk-meter',
      component: RiskMeterView,
    },
    {
      path: '/measure-info',
      name: 'measure-info',
      component: MeasureInfoView,
    },
    {
      path: '/healthy-lifestyle',
      name: 'healthy-lifestyle',
      component: HealthyLifestyleView,
    },
    {
      path: '/physical-activities',
      name: 'physical-activities',
      component: PhysicalActivitiesView,
    },
    {
      path: '/dietary-plans',
      name: 'dietary-plan',
      component: DietaryPlanView,
    },
    {
      path: '/recommendations',
      name: 'recommendation',
      component: RecommendationView,
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
