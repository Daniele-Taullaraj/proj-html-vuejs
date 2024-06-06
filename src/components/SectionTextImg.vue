<script>
export default {
    name: 'Counter',
    data() {
        return {
            // Valore iniziale del primo contatore
            counter1: 0,
            // Valore massimo del primo contatore
            maxCounter1: 168,
            counter2: 0,
            maxCounter2: 347,
            // Variabile per memorizzare l'intervallo del primo contatore
            interval1: null,
            interval2: null,
            // Velocità di incremento in millisecondi 
            speed: 20,
            speed2: 10,
            // verifica se i contatori sono già partiti
            hasStarted: false
        };
    },
    methods: {
        startCounter1() {
            clearInterval(this.interval1);
            this.interval1 = setInterval(() => {
                if (this.counter1 < this.maxCounter1) {
                    this.counter1++;
                } else {
                    clearInterval(this.interval1);
                }
            }, this.speed);
        },
        startCounter2() {
            clearInterval(this.interval2);
            this.interval2 = setInterval(() => {
                if (this.counter2 < this.maxCounter2) {
                    this.counter2++;
                } else {
                    clearInterval(this.interval2);
                }
            }, this.speed2);
        },
        handleMouseOver() {
            if (!this.hasStarted) {
                this.hasStarted = true;
                this.startCounter1();
                this.startCounter2();
            }
        }
    },
};
</script>

<template>
    <div>
        <!-- Prima sezione  -->
        <!-- Container per la sezione -->
        <div class="container-fluid my-5 boxed">
            <div class="row justify-content-center border-bottom">
                <!-- Text column -->
                <div class="col-5 d-flex align-items-center">
                    <div>
                        <h2 class="py-2 fs-1">The trasted name for in-Home tutoring.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, eligendi! Voluptate hic
                            earum
                            nobis perferendis rem, consequuntur vitae odit culpa officiis eos assumenda molestias
                            et,
                            ipsum
                            deleniti quidem asperiores excepturi?</p>
                        <a class="fw-bolder" href="">LEARN MORE</a>
                    </div>
                </div>
                <!-- Image column -->
                <div class="col-7">
                    <img src="../assets/img/h5-img-1.jpg" alt="Placeholder Image" class="img-fluid">
                </div>
            </div>
        </div>


        <!-- seconda sezione -->
        <!-- Container sezione 2 -->
        <div class=" boxed container-fluid" @mouseover="handleMouseOver">
            <div class="row boxed justify-content-center">

                <!-- Image column -->
                <div class="col-6">
                    <img src="../assets/img/h5-img-2.jpg" alt="Placeholder Image" class="img-fluid">
                </div>
                <!-- Text column -->
                <div class="col-6 d-flex align-items-center">
                    <div>
                        <h2 class="py-2 fs-1">Empowering Children to Reach Their Potential.</h2>
                        <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, eligendi!
                            Voluptate hic earum
                            nobis perferendis rem, consequuntur vitae odit culpa officiis eos assumenda molestias et,
                            ipsum
                            deleniti quidem asperiores excepturi?</p>
                        <div class="row">
                            <div class="col-6">
                                <span class="counter-color  fw-bold fs-1">{{ counter1 }}</span>
                                <p class="counter-color fs-5">User stories</p>
                            </div>
                            <div class="col-6">
                                <span class="counter-color  fw-bold fs-1">{{ counter2 }}</span>
                                <p class="counter-color fs-5">Events</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    color: #40C4FF;
}

h2 {
    font-family: "Merriweather", serif;
    font-weight: bold;
}

.counter-color {
    color: #40C4FF;

}

.boxed {
    max-width: 1400px;
}
</style>