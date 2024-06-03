<script>
import PricingPlansSection from './PageFooterComponents/PricingPlansSection.vue';
import ClientsSection from './PageFooterComponents/ClientsSection.vue';


export default {
  name: "PageFooter",
  components: {
    PricingPlansSection,
    ClientsSection
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
  <PricingPlansSection />
  <ClientsSection />
</template>

<style scoped></style>
