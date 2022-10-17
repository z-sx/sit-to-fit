import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export interface ReminderConfig {
  name: string
  content: string
  options: number[]
  period: number
  toggle: boolean
  title: string
  activity: string
}

export interface NoDisturbConfig {
  toggle: boolean
  from: string
  to: string
}

interface Configs{
  reminder?: ReminderConfig[]
  noDisturb?: NoDisturbConfig
}

const defaultReminderConfig = [
  {
    name: "Water Reminder",
    content: "Remind you to drink water at every:",
    options: [0.1, 20, 40, 60],
    period: 20,
    toggle: false,
    title: "Time to drink water",
    activity:`drink water`
  },
  {
    name: "Take a break",
    content: "Remind you to take break at every:",
    options: [0.1, 20, 50, 80],
    period: 20,
    toggle: false,
    title: "Time to take break",
    activity: `take break`
  }
]

const defaultNoDisturbConfig = {
  toggle: false,
  from: '',
  to: '',
}

export const useReminderStore = defineStore("reminder", () => {
  const config: Configs = JSON.parse(localStorage.getItem('reminder') ?? 'null') ?? {}
  const reminderConfig = ref<ReminderConfig[]>(config?.reminder ?? defaultReminderConfig)
  const noDisturbConfig = ref<NoDisturbConfig>(config?.noDisturb ?? defaultNoDisturbConfig)
  watch([reminderConfig, noDisturbConfig], ()=>{
    localStorage.setItem('reminder', JSON.stringify({
      reminder: reminderConfig.value,
      noDisturb: noDisturbConfig.value,
    }))
  },{ deep: true })

  return {
    reminderConfig,
    noDisturbConfig,
  }
})