<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    // resize the viz when its width is changed
    const el = ref<HTMLIFrameElement | null>(null);
    const resizeObserver = new ResizeObserver(() => {
      const width = el.value!.getBoundingClientRect().width;
      const height = width * 1.8;
      el.value!.style.height = `${height}px`;
    })
    onMounted(() => {
      resizeObserver.observe(el.value!)
    })
    onBeforeUnmount(() => {
      resizeObserver.unobserve(el.value!)
    })
    
    </script>
        
    <template>
      <iframe ref="el"
        src="https://ounam-gupta.shinyapps.io/risk_meter/"
        frameborder="0"></iframe>
    </template>
        
    <style>
    iframe {
      width: 100%;
      height: 500px;
    }
    </style>