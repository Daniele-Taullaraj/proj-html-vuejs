<script>
import store from '../../../data/store.js';
export default {
    name: "ClientsSection",
    data() {
        return {
            store
        }
    },
    methods: {
        checkOver(img) {
            img.isActive = false
        },
        checkLeave(img) {
            img.isActive = true
        },
    },
    created() {
    },
    mouthed() {
    }

}

</script>

<template>

    <div class="container-fluid px-5 py-3">
        <div class="row mx-4 d-flex flex-nowrap overflow-hidden">
            <a href="" class="py-5" v-for="img in store.clients" @mouseover="checkOver(img)"
                @mouseleave="checkLeave(img)">
                <img :src="img.normal" :class="{ 'd-block': img.isActive, 'd-none': !img.isActive }" alt="">
                <img :src="img.hover" :class="{ 'd-none': img.isActive, 'd-block': !img.isActive }" alt="">
            </a>
            <a href="" class="py-5" v-for="img in store.clients" @mouseover="checkOver(img)"
                @mouseleave="checkLeave(img)">
                <img :src="img.normal" :class="{ 'd-block': img.isActive, 'd-none': !img.isActive }" alt="">
                <img :src="img.hover" :class="{ 'd-none': img.isActive, 'd-block': !img.isActive }" alt="">
            </a>
        </div>
    </div>

</template>

<style scoped>
/* container */
.container-fluid {
    max-width: 1400px;
}

/* slide animation */
@keyframes slide {
    0% {
        transform: translate(0);
    }

    8% {
        transform: translate(0);
    }

    10% {
        transform: translate(-100%);
    }

    20% {
        transform: translate(-100%);
    }

    22% {
        transform: translate(-200%);
    }

    40% {
        transform: translate(-200%);
    }

    42% {
        transform: translate(-300%);
    }

    60% {
        transform: translate(-300%);
    }

    62% {
        transform: translate(-400%);
    }

    80% {
        transform: translate(-400%);
    }

    82% {
        transform: translate(-500%);
    }

    100% {
        transform: translate(-500%);
    }
}

a {
    animation: slide 40s linear infinite;
}


/* img size */
img {
    width: 100%;
}

.row a {
    width: calc(100%/5);
}

/* hover */
.row a:hover {
    cursor: pointer;
}
</style>
