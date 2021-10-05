<template>
    <div class="weather">
         <RootWeatherComponent />
    </div>
</template>

<script>
    import RootWeatherComponent from '../components/weather/RootWeatherComponent.vue'
    export default {
        components :{
            RootWeatherComponent
        }
    }
</script>
