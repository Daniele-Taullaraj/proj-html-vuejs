<script>
import AppHeader from './components/AppHeader.vue';

import SectionTextImg from './components/SectionTextImg.vue';
import Carousel from './components/Carousel.vue';
import CardContainer from './components/CardContainer.vue';
import Behavior from './components/Behavior.vue';

import PageFooter from './components/PageFooter/PageFooter.vue';
export default {
  components: {
    AppHeader,
    SectionTextImg,
    Carousel,
    Behavior,
    CardContainer,
    PageFooter
  },

  data() {
    return {

    }
  },
  methods: {},
  mouthed() { }

}

</script>

<template>
  <AppHeader />
  <SectionTextImg />
  <Carousel />
  <Behavior />
  <CardContainer />
  <PageFooter />
</template>

<style scoped></style>
