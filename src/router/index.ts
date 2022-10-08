import { createRouter, createWebHistory } from 'vue-router'
import { useRecommendationStore } from '@/stores/recommendation'
import HomeView from '../views/HomeViewV2.vue'
const SedentaryInfoView = () => import('../views/journey-v2/SedentaryInfoView.vue')
const RiskMeterView = () => import('../views/journey-v2/RiskMeterView.vue')
const FeatureInfoView = () => import('../views/journey-v2/FeatureInfoView.vue')
const HealthyLifestyleView = () => import('../views/HealthyLifestyleView.vue')
const PhysicalActivitiesView = () => import('../views/healthy-lifestyle/PhysicalActivitiesView.vue')
const DietaryPlanView = () => import('../views/healthy-lifestyle/DietaryPlanView.vue')
const PhysicalErgonomicsView = () => import('../views/healthy-lifestyle/PhysicalErgonomicsView.vue')
const AlertReminderView = () => import('../views/AlertReminderView.vue')
const PreferenceView = () => import('../views/recommendation/PreferenceView.vue')
const RecommendationView = () => import('../views/recommendation/RecommendationView.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')

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
      component: HomeView,
      meta:{
        title: 'Home',
      },
    },
    {
      path: '/journey',
      name: 'journey',
      redirect(to) {
        return { name: 'sedentary-info' }
      },
    },
    {
      path: '/sedentary-info',
      name: 'sedentary-info',
      component: SedentaryInfoView,
      meta:{
        title: 'About Sedentary Lifestyle',
      },
    },
    {
      path: '/risk-meter',
      name: 'risk-meter',
      component: RiskMeterView,
      meta:{
        title: 'Risk Meter Analysis',
      },
    },
    {
      path: '/feature-info',
      name: 'feature-info',
      component: FeatureInfoView,
      meta:{
        title: 'Our Features',
      },
    },
    {
      path: '/healthy-lifestyle',
      name: 'healthy-lifestyle',
      component: HealthyLifestyleView,
      meta:{
        title: 'Healthy Lifestyles',
      },
    },
    {
      path: '/physical-activities',
      name: 'physical-activities',
      component: PhysicalActivitiesView,
      meta:{
        title: 'Physical Activities',
      },
    },
    {
      path: '/dietary-plans',
      name: 'dietary-plan',
      component: DietaryPlanView,
      meta:{
        title: 'Dietary Plans',
      },
    },
    {
      path: '/physical-ergonomics',
      name: 'physical-ergonomics',
      component: PhysicalErgonomicsView,
      meta:{
        title: 'Physical Ergonomics',
      },
    },
    {
      path: '/recommendations',
      name: 'recommendation',
      redirect(to) {
        const store = useRecommendationStore()
        if (store.preferences.size === 0) {
          return { name: 'preferences' }
        } else {
          return { name: 'cards' }
        }
      },
    },
    {
      path: '/recommendation/preferences',
      name: 'preferences',
      component: PreferenceView,
      meta:{
        title: 'Recommendation Preferences',
      },
    },
    {
      path: '/recommendation/cards',
      name: 'cards',
      component: RecommendationView,
      beforeEnter(from, to, next) {
        const store = useRecommendationStore()
        if (store.preferences.size === 0) {
          return next({ name: 'preferences' })
        } else {
          return next()
        }
      },
      meta:{
        title: 'Recommendations',
      },
    },
    {
      path: '/alert-reminder',
      name: 'alert-reminder',
      component: AlertReminderView,
      meta:{
        title: 'Alert Reminder',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
      meta:{
        title: '404 Not Found',
      },
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title as string} - Sit to Fit`
  next();
});
export default router
