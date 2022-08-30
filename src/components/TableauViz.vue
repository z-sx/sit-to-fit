<script setup lang="ts" >
import { onMounted, ref } from 'vue';

const divElement = ref<HTMLDivElement | null>(null);
onMounted(() => {
    const vizElement = divElement.value!.getElementsByTagName('object')[0];
    vizElement.style.width = '100%';
    vizElement.style.height = (divElement.value!.offsetWidth * 0.75) + 'px';
    
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode!.insertBefore(scriptElement, vizElement);
})
           
</script>

<template>
    <div class='tableauPlaceholder' ref="divElement" style='position: relative'>
        <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
            <param name='embed_code_version' value='3' />
            <param name='site_root' value='' />
            <param name='name' value='Trial_16617851089480&#47;Sheet1' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='static_image'
                value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Tr&#47;Trial_16617851089480&#47;Sheet1&#47;1.png' />
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='en-GB' />
            <param name='filter' value='publish=yes' />
        </object></div>
</template>
