<script>
export default {
    name: "ClientsSection",
    data() {
        return {
            clients: [
                { normal: '/src/assets/img/h5-client-2.png', hover: '/src/assets/img/h5-client-2-h.png', isActive: true },
                { normal: '/src/assets/img/h5-client-3.png', hover: '/src/assets/img/h5-client-3-h.png', isActive: true },
                { normal: '/src/assets/img/h5-client-4.png', hover: '/src/assets/img/h5-client-4-h.png', isActive: true },
                { normal: '/src/assets/img/h5-client-5.png', hover: '/src/assets/img/h5-client-5-h.png', isActive: true },
                { normal: '/src/assets/img/h5-client-1.png', hover: '/src/assets/img/h5-client-1-h.png', isActive: true }
            ],
        }
    },
    methods: {
        checkOver(img) {
            img.isActive = false
        },
        checkLeave(img) {
            img.isActive = true
        }
    },
    mouthed() { }

}

</script>

<template>
    <div class="container-fluid px-5 py-3">
        <div class="row mx-4">

            <a href="" class="py-5" v-for="img, in clients" @mouseover="checkOver(img)" @mouseleave="checkLeave(img)">
                <img :src="img.normal" :class="{ 'd-block': img.isActive, 'd-none': !img.isActive }" alt="">
                <img :src="img.hover" :class="{ 'd-none': img.isActive, 'd-block': !img.isActive }" alt="">
            </a>

        </div>
    </div>
</template>

<style scoped>
.row a {
    width: calc(100%/5);
}

.row a:hover {
    cursor: pointer;
}
</style>
