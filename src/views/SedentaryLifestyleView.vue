<script setup lang="ts">
import JouneyHeading from "@/components/JourneyHeading.vue";
import JourneySectionHeading from "@/components/JourneySectionHeading.vue";
import JourneySection from "@/components/JourneySection.vue"
import JourneyLayout from "@/components/JourneyLayout.vue"
import JourneyStat from "@/components/JourneyStat.vue"
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
            <p class="paragraph">Here should be a visualization to analyse risk of viewer's lifestyle</p>
        </JourneySection>
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
</style>