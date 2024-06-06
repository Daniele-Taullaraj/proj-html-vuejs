<script>
import AppHeader from './components/AppHeader.vue';

import SectionTextImg from './components/SectionTextImg.vue';
import Carousel from './components/Carousel.vue';
import CardContainer from './components/CardContainer.vue';
import Behavior from './components/Behavior.vue';
import BestTutor from './components/BestTutor.vue';

import PageFooter from './components/PageFooter/PageFooter.vue';
export default {
  components: {
    AppHeader,
    SectionTextImg,
    Carousel,
    Behavior,
    CardContainer,
    BestTutor,
    PageFooter
  },

  data() {
    return {
      isButtonScrollTop: false
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
      });
    },
    checkVisibilityButton() {
      if (window.scrollY > (window.innerHeight * 0.9)) {
        this.isButtonScrollTop = true
      } else if (window.scrollY < (window.innerHeight * 0.9)) {
        this.isButtonScrollTop = false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkVisibilityButton);
  }

}

</script>

<template>

  <div class="position-relative">

    <AppHeader />
    <SectionTextImg />
    <Carousel />
    <Behavior />
    <CardContainer />
    <BestTutor />
    <PageFooter />

    <button class="position-fixed bottom-0 end-0 p-2 border-0 text-white" @click="scrollTop" v-show="isButtonScrollTop">
      <i class="fa-solid fa-chevron-up"></i>
      <h6 class="m-0">TOP</h6>
    </button>
  </div>

</template>

<style scoped>
button {
  background-color: #40C4FF;
}
</style>
