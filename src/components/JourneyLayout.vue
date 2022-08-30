<script setup lang="ts">
import router from '@/router';
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const pages = ref([
    {
        name: 'Information on Sedentary',
        to: '/sedentary-lifestyle',
    },
    {
        name: 'Physical Activities',
        to: '/physical-activities',
    },
    {
        name: 'Healthy Diet',
        to: '/dietary-plan',
    },
    {
        name: 'Ergonomics',
        to: '/physical-ergonomics',
    },
    {
        name: 'Alert Reminder',
        to: '/alert-reminder',
    },
])
const route = useRoute()
const currentIndex = computed(() => {
    const index = pages.value.findIndex(item => item.to === route.path)
    if (index === -1) {
        return null
    } else {
        return index
    }
})
const previousPage = computed(() => {
    if (currentIndex.value !== null && currentIndex.value > 0) {
        return pages.value[currentIndex.value - 1]
    } else {
        return null
    }
})
const nextPage = computed(() => {
    if (currentIndex.value !== null && currentIndex.value < pages.value.length - 1) {
        return pages.value[currentIndex.value + 1]
    } else {
        return null
    }
})
</script>
    
<template>
    <div class="journey-layout">
        <main>
            <slot></slot>
        </main>
        <aside>
            <div class="progress">
                <div class="left-part">
                    <span>Progress</span>
                    <div></div>
                </div>
                <div class="right-part">
                    <div class="indicator">
                        <button class="left" @click="previousPage && router.push(previousPage?.to)">
                            <img src="@/assets/images/IconLeft.svg" alt="Previous page">
                        </button>
                        <RouterLink v-for="page in pages" :to="page.to"></RouterLink>
                        <button class="right" @click="nextPage && router.push(nextPage?.to)">
                            <img src="@/assets/images/IconRight.svg" alt="Next page">
                        </button>
                    </div>
                    <div class="list">
                        <RouterLink v-for="page in pages" :to="page.to">{{ page.name }}</RouterLink>
                    </div>
                </div>
            </div>
            <div class="skip">
                <span>Skip the journey?</span>
                <span>Jump directly on our tool</span>
                <button @click="router.push('/tool')">Use Tool</button>
            </div>
        </aside>
    </div>
</template>
   
<style lang="postcss" scoped>
.journey-layout {
    display: flex;

    & main {
        width: 60%;
    }

    & aside {
        width: 40%;
        margin-right: 60px;

        display: flex;
        flex-direction: column;
        gap: 40px;

        & .progress {
            margin-left: auto;
            display: flex;

            & .left-part>span,
            & .right-part>.indicator {
                height: 48px;
            }

            & .left-part {
                display: flex;
                flex-direction: column;

                & span {
                    background: #F4FAFF;
                    border-radius: 16px 0 0 16px;
                    line-height: 32px;
                    display: block;
                    font-size: 16px;
                    padding: 8px 16px;
                    font-weight: bold;
                }

                & div {
                    background-color: white;
                    flex: 1 1 auto;
                }
            }

            & .right-part {
                width: 320px;
                background: #F4FAFF;
                border-radius: 0 16px 16px;

                & .indicator {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    & a {
                        width: 31px;
                        height: 22px;
                        background: #DCF0FF;
                        border-radius: 11px;

                        &.router-link-active {
                            background: #0981F0;
                        }
                    }

                    & button {
                        padding: 0;
                        border: 0;
                        border-radius: 24px;
                        transform: scale(0.7);
                        background-color: transparent;

                        & img {
                            height: 48px;
                            width: 48px
                        }
                    }
                }

                & .list {
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 40px;

                    & a {
                        font-size: 16px;
                        color: black;
                        text-decoration: none;
                        padding: 4px;

                        &.router-link-active {
                            font-weight: bold;
                        }
                    }
                }
            }
        }

        & .skip {
            margin-left: auto;
            width: 320px;
            height: 160px;
            font-family: 'kaisei decol', serif;
            padding: 20px;
            box-shadow: 5px 20px 50px 0px rgba(16, 112, 177, 0.2);
            border-radius: 10px;
            display: flex;
            flex-direction: column;

            & button {
                background: #0085FF;
                box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
                border-radius: 10px;
                font-size: 25px;
                padding: 6px 36px;
                border: 0px;
                margin: 20px auto 0 auto;
                font-family: 'kaisei decol', serif;
                color: white;
                border: 2px white solid;

                &:focus {
                    outline: 2px grey solid;
                }
            }
        }
    }
}
</style>