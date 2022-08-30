<script setup lang="ts">
</script>
    
<template>
<div class="journey-stat">
    <div>
        <span class="red number">8+</span>
        <img src="@/assets/images/IconGraph.svg" alt="Open graph">
        <span class="description">hours of sitting on an average weekday</span>
    </div>
    <div>
        <span class="small number">22%</span>
        <span class="description">are engaged in desk job</span>
    </div>
    <div>
        <span class="small number">63%</span>
        <span class="description">are below the recommended physical activity</span>
    </div>
    <div>
        <span class="small number">70%</span>
        <span class="description">are below the recommended physical activity</span>
    </div>
</div>
</template>
    
<style lang="postcss" scoped>
.red {
    color: #F94D4D;
}
.journey-stat{
    transform: scale(0.8) translate(-10%);
    display:flex;
    gap: 16px;
    width: calc(220px * 4 + 3 * 16px);
    @media ()
    & >div{
        width:220px;
        height: 200px;
        background-color: white;
        box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        position: relative;
        & .number{
            font-size: 55px;
            font-family: Inter, sans-serif;
            font-weight: bold;
            font-style: italic;
            line-height: 1;
            flex: 1 1 auto;
            &.small{
                font-size: 40px;
                line-height: 55px;
            }
        }
        & .description{
            height: 96px;
            font-size: 20px;
            font-family: Inika, serif;
        }
        & img{
            position: absolute;
            right: 20px;
            width: 32px;
            height: 32px;
        }
    }
}
</style>