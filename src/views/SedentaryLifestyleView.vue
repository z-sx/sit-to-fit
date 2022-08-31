<script setup lang="ts">
import JouneyHeading from "@/components/JourneyHeading.vue";
import JourneySectionHeading from "@/components/JourneySectionHeading.vue";
import JourneySection from "@/components/JourneySection.vue"
import JourneyLayout from "@/components/JourneyLayout.vue"
import JourneyStat from "@/components/JourneyStat.vue"
import SedentaryRiskViz from "../components/SedentaryRiskViz.vue"
</script>
    
<template>
    <JourneyLayout>
        <JouneyHeading />
        <JourneySectionHeading>
            Let us learn some facts about sedentary lifestyle
        </JourneySectionHeading>
        <JourneySection>
            <h3 class="blue-heading">Firstly, let us learn some facts about sedentary lifestyle</h3>
            <p class="paragraph">Sedentary lifestyle is the abundance of sitted behaviour that involves very little
                physical activity. Desk jobs require the person to sit on a chair for elongated hours.
                <br>
                <br>
                <strong>You are living a sedentary lifestyle if you fall in one of the category below:</strong>
            </p>
            <JourneyStat></JourneyStat>
        </JourneySection>
        <JourneySectionHeading>
            Let us see about your sedentary behaviour
        </JourneySectionHeading>
        <JourneySection>
            <h3 class="blue-heading">We will require some of your statistics to determine your sedentary index in comparison to Melbourne CBD index</h3>
            <SedentaryRiskViz class="viz"></SedentaryRiskViz>
        </JourneySection>
        <section class="nav">
            <RouterLink class="left button" to="/">Exit Journey</RouterLink>
            <RouterLink class="right button" to="/physical-ergonomics">Continue</RouterLink>
        </section>
    </JourneyLayout>
</template>
    
<style lang="postcss" scoped>
.blue-heading {
    font-family: 'Kaisei Decol', serif;
    color: rgba(53, 110, 173, 0.8);
    font-size: 20px;
    margin-bottom: 20px;
}

.paragraph {
    font-family: 'Kaisei Decol', serif;
    margin-bottom: 20px;
    & strong{
        font-weight: bold;
    }
}

.viz{
    box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
    border-radius: 10px;
}

.nav{
    display: flex;
    justify-content: space-between;
    margin-left: 60px;
    padding-bottom: 50px;
    & a{
        padding: 6px 32px;
        font-size: 25px;
        border-radius: 60px;
        font-family: 'Average', serif;
        text-decoration: none;
        &.left{
          color: white;
          background-color: rgba(134, 127, 127, 0.5);
        }
        &.right{
          color: white;
          background-color: #2C99E3;
        }
    }
}
</style>