<script>
import store from '../data/store.js';

export default {
    name: 'Carousel',
    data() {
        return {
            currentIndex: 0,
            timer: null,
            slides: store.slides,
        };
    },
    methods: {
        goToSlide(index) {
            this.currentIndex = index;
        },
        nextSlide() {
            if (this.currentIndex + 1 >= this.slides.length) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },
        startAutoScroll() {
            this.timer = setInterval(this.nextSlide, 3000);
        },
        stopAutoScroll() {
            clearInterval(this.timer);
        }
    },
    mounted() {
        this.startAutoScroll();
    },
};
</script>

<template>
    <div class="CS_bg boxed">
        <div class="container d-flex flex-column align-items-center w-50 text-center">
            <div class="py-5" v-for="(slide, index) in slides" :key="index" v-show="index === currentIndex">
                <img :src="slide.imgSrc" alt="Slide image">
                <p class="py-3">{{ slide.text }}</p>
                <p class="fs-4 fw-bolder">{{ slide.subText1 }}</p>
                <p class=" fs-8 m-0">{{ slide.subText2 }}</p>
            </div>
            <div class="button-container py-0">
                <button v-for="(slide, index) in slides" :key="index" :class="{ active: index === currentIndex }"
                    @click="goToSlide(index)" class="indicator"></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Stile per il contenitore principale del carosello con effetto parallax */
.CS_bg {
    width: 100%;
    background-image: url('../assets/img/h5-parallax-img-1.png');
    background-size: cover;
    background-size: 100%;
    background-attachment: fixed;
    padding: 2rem 0;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

p {
    color: #ffffff;
    font-size: 20px;
}

/* Stile per il bottone attivo */
.indicator.active {
    background-color: #ffffff;
}

/* Stile per il contenitore dei bottoni di navigazione */
.button-container {
    width: 5rem;
    display: flex;
    justify-content: space-around;
}

/* Stile per ogni indicatore (bottone di navigazione) */
.indicator {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.50);
    border: none;
    cursor: pointer;
}
</style>