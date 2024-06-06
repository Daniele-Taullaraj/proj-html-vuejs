<script>

import AppCard from './AppCard.vue'


export default {

    components: {
        AppCard
    },


    data() {
        return {
            navList: [
                { name: 'HOME', dropdown: ['home', 'home'], show: false },
                { name: 'COURSES', dropdown: ['Course 1', 'Course 2'], show: false },
                { name: 'INSTRUCTORS', dropdown: ['Instructor 1', 'Instructor 2'], show: false },
                { name: 'EVENTS', dropdown: ['event 1', 'event 2'], show: false },
                { name: 'PAGES', dropdown: ['Page 1', 'Page 2'] },
                { name: 'ELEMENTS', dropdown: ['Element 1', 'Element 2'], show: false },
            ],

            HeaderSlide: [
                {
                    title: 'Accelerate Your Career',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime nisi tempora. Tempora quisquam optio autem, quod mollitia eius veniam dolore nam, ipsum fuga tenetur quae amet enim itaque porro.',
                    image: 'src/assets/img/h5-slide-1-background.jpg',
                    button: 'REGISTER NOW'
                },

                {
                    title: 'Premium Education',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime nisi tempora. Tempora quisquam optio autem, quod mollitia eius veniam dolore nam, ipsum fuga tenetur quae amet enim itaque porro.',
                    image: 'src/assets/img/h5-slide-2-background.jpg',
                    button: 'REGISTER NOW'
                },

                {
                    title: 'Contemporary Ideas',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime nisi tempora. Tempora quisquam optio autem, quod mollitia eius veniam dolore nam, ipsum fuga tenetur quae amet enim itaque porro.',
                    image: 'src/assets/img/h5-slide-3-background.jpg',
                    button: 'REGISTER NOW'
                },
            ],

            currentSlide: 0,
            interval: null
        }
    },

    methods: {

        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.HeaderSlide.length;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.HeaderSlide.length) % this.HeaderSlide.length;
        },
        startCarousel() {
            this.interval = setInterval(this.nextSlide, 5000); // Cambia immagine ogni 3 secondi
        },
        stopCarousel() {
            clearInterval(this.interval);
            this.interval = null;
        },

        // Funzione per mostrare il dropdown
        showDropdown(index) {
            // Setta 'show' a true per mostrare il dropdown
            console.log("Mostra dropdown:", index);
            this.navList[index].show = true;
        },
        // Funzione per nascondere il dropdown
        hideDropdown(index) {
            // Setta 'show' a false per nascondere il dropdown
            console.log("Nascondi dropdown:", index);
            this.navList[index].show = false;
        }



    },

    mounted() {

        this.startCarousel(); // Avvia il carosello quando il componente è montato
    },

    beforeDestroy() {
        this.stopCarousel(); // Ferma il carosello quando il componente viene distrutto
    }




}


</script>

<template>
    <!-- NAVBAR -->
    <div class="container-fluid st_slideContainer"
        :style="{ backgroundImage: `url(${HeaderSlide[currentSlide].image})` }">
        <div class="container-fluid" id="max-width">
            <div class="row">
                <div class="col-12">
                    <div class="row mt-4">
                        <div class="col-3 st_logo">
                            <img src="../assets/img/logo-light.png" alt="">
                        </div>
                        <div class="col-7 st_links">
                            <ul class="d-flex m-0">
                                <li class="mx-4" v-for="(element, index) in navList" @mouseover="showDropdown(index)"
                                    @mouseleave="hideDropdown(index)" :class="{ 'dropdown-open': element.show }">
                                    <a href="">{{ element.name }}</a>
                                    <ul v-if="element.dropdown && element.dropdown.length && element.show"
                                        class="dropdown">
                                        <li v-for="item in element.dropdown">{{ item }}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="col-2 st_icons ">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <i class="fa-solid fa-bag-shopping"></i>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="container-fluid st_containerMain">
            <div class="row st_mainRow">
                <div class="col-12 text-center st_mainContent">
                    <h1 class="st_contentTitle">{{ HeaderSlide[currentSlide].title }}</h1>
                    <p>{{ HeaderSlide[currentSlide].content }}</p>
                    <button class="st_slideContentButton " v-if="currentSlide != 1">{{ HeaderSlide[currentSlide].button
                        }}</button>
                    <h2 v-if="currentSlide == 1"><i class="fa-solid fa-play"></i>
                    </h2>
                    <p @click="nextSlide" class="nextBtn"><i class="fa-solid fa-chevron-right"></i></p>
                    <p @click="prevSlide" class="prevBtn"><i class="fa-solid fa-chevron-left"></i></p>
                </div>
            </div>
        </div>
    </div>



    <AppCard />



</template>

<style scoped>
#max-width {
    max-width: 1400px;
}

.fa-play {
    font-size: 2rem;
    background-color: white;
    color: black;
    padding: 1.2rem;
    border-radius: 50%;
    padding-left: 1.4rem;
    margin-top: 1rem;
}

/* container */

.st_slideContainer {
    height: 90vh;
    margin-bottom: 2rem;
}

.st_containerMain {
    height: 28rem;
    margin-bottom: 4rem;
    background-size: cover;
    background-position: center;
    transition: background-image 1s ease-in-out;
}

/************** dropdown *******************/

.dropdown {
    position: absolute;
    background: white;
    color: black;
    list-style: none;
    padding: 0;
    margin: 0;
    top: 100%;
    left: 0;
    z-index: 1000;
}

.dropdown li {
    padding: 0.5rem 1rem;
}

.dropdown li:hover {
    background: #f0f0f0;
}

.st_links li:hover>.dropdown {
    display: block;
}

.dropdown-open .dropdown {
    display: block;
}


/* main-content */

.st_mainContent {
    color: white;
    max-width: 1000px;
    /* Imposta la larghezza massima del contenuto */
    margin: 0 auto;
    /* Per centrare il contenuto */
    word-wrap: break-word;
    /* Per fare andare a capo il testo lungo */

}

.st_mainRow {
    margin-top: 10rem;
}

.st_logo img {
    margin-left: 4rem;
    height: 2rem;
}

.st_logo {
    display: flex;
    align-items: center;
}

.st_icons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
}

.st_links {
    display: flex;
    align-items: center;
    justify-content: center;

}

.st_contentTitle {
    font-size: 80px;
    font-family: "Merriweather", serif;
    font-weight: bold;
}

.st_slideContentButton {
    padding: 1rem;
    background-color: #16B7FE;
    color: white;
    border: none;
    margin-top: 1rem;
}

.nextBtn {
    position: absolute;
    right: 5rem;
    top: 18rem;
    font-size: 50px;
}

.prevBtn {
    position: absolute;
    left: 5rem;
    top: 18rem;
    font-size: 50px;
}

a {
    text-decoration: none;
    color: white;
}

ul {
    list-style-type: none;
}
</style>