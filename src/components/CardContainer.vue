<script>
import store from '../data/store.js';

export default {
    data() {
        return {
            cards: store.cards,

            // Indice di partenza per il gruppo di card da visualizzare
            startIndex: 0,
            // Numero di card da visualizzare per pagina
            cardsPerPage: 3,
            // Timer per il cambio automatico delle card
            timer: null,
        };
    },
    computed: {
        // Card attualmente visibili
        displayedCards() {
            const endIndex = this.startIndex + this.cardsPerPage;
            return this.cards.slice(this.startIndex, endIndex);
        },
        // Calcola il numero totale di gruppi di card per i pallini di navigazione
        totalDots() {
            return Math.ceil(this.cards.length / this.cardsPerPage);
        }
    },
    methods: {
        // Va al gruppo di card precedente
        prevPage() {
            this.startIndex = Math.max(0, this.startIndex - this.cardsPerPage);
        },
        // Va al gruppo di card successivo
        nextPage() {
            const maxIndex = Math.ceil(this.cards.length / this.cardsPerPage) - 1;
            if (this.startIndex + this.cardsPerPage >= this.cards.length) {
                this.startIndex = 0;
            } else {
                this.startIndex = Math.min(maxIndex * this.cardsPerPage, this.startIndex + this.cardsPerPage);
            }
        },
        // Va a un gruppo di card specifico cliccando sul pallino
        goToPage(index) {
            this.startIndex = index * this.cardsPerPage;
        },
        // Inizia il timer per il cambio automatico delle card
        startAutoScroll() {
            this.timer = setInterval(this.nextPage, 4000);
        },
    },
    mounted() {
        // Avvia il cambio automatico delle card quando il componente è montato
        this.startAutoScroll();
    },
};
</script>

<template>
    <div id="bg-container" class="border-top border-bottom pb-5">
        <div class="container-fluid  px-5 boxed">
            <div class="row justify-content-center text-center my-5">
                <div class="col-8">
                    <h1>Popular online coursers</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, cum, similique nostrum, laboriosam
                        asperiores corporis amet animi quo beatae magnam labore! Hic consequatur dolorem iusto ipsum
                        minus
                        sunt saepe officiis!</p>
                </div>
            </div>
            <!-- Contenitore principale del carosello -->
            <div class="container p-0">
                <div class="row">
                    <!-- Visualizza le card in blocchi da 3 -->
                    <div v-for="(card, index) in displayedCards" class="card">
                        <!-- Immagine della card -->
                        <img :src="card.imgSrc" alt="" class="pb-4">
                        <!-- Titolo della card -->
                        <div class="row align-items-center">
                            <div class="col-9">
                                <h4>{{ card.title }}</h4>
                            </div>
                            <div class="col-1"><span class="badge rounded-pill bg-primary ">Primary</span></div>
                        </div>
                        <!-- nome -->
                        <p>{{ card.name }}</p>
                        <!-- Contenuto della card -->
                        <p>{{ card.content }}</p>
                        <div class="icon-container">
                            <span><i class="fa-solid fa-user" style="color: #B9B9B9;"> 0</i></span>
                            <span class="px-3"><i class="fa-solid fa-tag" style="color: #B9B9B9;"> {{ card.tag
                                    }}</i></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contenitore dei pallini di navigazione -->
            <div class="dots-container">
                <!-- Crea un pallino per ogni gruppo di card -->
                <span v-for="(dot, index) in totalDots" class="dot"
                    :class="{ active: startIndex / cardsPerPage === index }" @click="goToPage(index)"></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
#bg-container {
    background-image: url("../assets/img/background-pattern.jpg");
}

.icon-container {
    font-size: 12px;
    padding: 1rem 0;
}

.card {
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    width: calc((100% - 3rem) / 3);
    margin-right: 1rem;
}

/* stile font */
h1,
h4 {
    font-family: "Merriweather", serif;
    font-weight: bold;
}

/* Stile per il contenitore dei pallini di navigazione */
.dots-container {
    text-align: center;
    margin-top: 10px;
}

/* Stile per i pallini di navigazione */
.dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #2873ff50;
    margin: 0 5px;
    cursor: pointer;
}

/* Stile per il pallino attivo */
.dot.active {
    background-color: #2873ff;
}

.boxed {
    max-width: 1400px;
}
</style>