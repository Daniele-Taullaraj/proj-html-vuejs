<script>
import PricingPlansSection from './PageFooterComponents/PricingPlansSection.vue';
import ClientsSection from './PageFooterComponents/ClientsSection.vue';
import LinksFooterSection from './PageFooterComponents/LinksFooterSection.vue'



export default {
  name: "PageFooter",
  components: {
    PricingPlansSection,
    ClientsSection,
    LinksFooterSection
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
  <LinksFooterSection />
</template>

<style scoped></style>
