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
const BecomeNewUserView = () => import('../views/BecomeNewUserView.vue')
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
      component: HomeView
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
    },
    {
      path: '/risk-meter',
      name: 'risk-meter',
      component: RiskMeterView,
    },
    {
      path: '/feature-info',
      name: 'feature-info',
      component: FeatureInfoView,
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
      path: '/physical-ergonomics',
      name: 'physical-ergonomics',
      component: PhysicalErgonomicsView,
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
      }
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
      path: '/:pathMatch(.*)*',
      component: NotFoundView
    }
  ]
})

export default router
