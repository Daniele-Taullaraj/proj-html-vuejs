<script>
export default {
    data() {
        return {
            cards: [
                {
                    imgSrc: new URL('../assets/img/h5-team-member-1.jpg', import.meta.url).href,
                    title: 'Brenda Harris',
                    subtitle: 'TEACHER',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',

                },
                {
                    imgSrc: new URL('../assets/img/h5-team-member-2.jpg', import.meta.url).href,
                    title: 'Lisa Griffin',
                    subtitle: 'TEACHER',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',

                },
                {
                    imgSrc: new URL('../assets/img/h5-team-member-3.jpg', import.meta.url).href,
                    title: 'Victor Green',
                    subtitle: 'TEACHER',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.',

                }
            ]
        };
    }
};
</script>

<template>
    <div class="container-fluid">
        <div class="row text-center justify-content-center py-5">
            <div class="col-8">
                <h2 class="fs-1">The Best Tutors in Town</h2>
                <p class="mb-5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam quia
                    consectetur
                    officia
                    temporibus, magni nisi iusto a nesciunt. Repudiandae, obcaecati! Nihil maxime magni quos fugiat
                    voluptatibus magnam beatae aspernatur.</p>
            </div>

        </div>


        <div class="container">
            <div class="row justify-content-center">
                <div v-for="(card, index) in cards" class="col-4 text-center">
                    <div class="card text-center">
                        <div>
                            <img :src="card.imgSrc" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title mt-3">{{ card.title }}</h5>
                            <h6 class="card-subtitle m-2">{{ card.subtitle }}</h6>
                            <p class="card-text m-3">{{ card.description }}</p>
                            <div class="icons">
                                <div class="text-center  p-3">
                                    <span class="icon"><i class="fa-brands fa-twitter"></i></span>
                                    <span class="icon"><i class="fa-brands fa-instagram"></i></span>
                                    <span class="icon"><i class="fa-brands fa-facebook-f"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
i {
    color: #B9B9B9;
}

i:hover {
    color: #40C4FF;
}

h2,
h5 {
    font-family: "Merriweather", serif;
    font-weight: bold;
}

.card {
    margin-bottom: 20px;
    border: none;
}

.card img {
    width: 40%;
}

h6,
p {
    color: #959595
}

.icons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.icon {
    width: 30px;
    height: 30px;
    padding: 0 0.5rem;
}

span:hover {
    color: red;
}

.container-fluid {
    max-width: 1400px;
}
</style>