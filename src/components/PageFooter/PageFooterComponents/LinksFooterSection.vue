<script>
export default {
    name: "LinksfooterSection",
    data() {
        return {

        }
    },
    methods: {},
    mouthed() { }

}

</script>

<template>
    <div id="background-pattern">

        <!-- section container -->
        <div class="container-fluid p-5">

            <div class="row py-5 px-4 text-white">

                <!-- iAcademy -->
                <div class="col-3 pe-4">
                    <a href="" class="pb-5"><img class="w-50" src="../../../assets/img/footer-logo-1.png" alt=""></a>
                    <span>Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer
                        to
                        Home</span>
                    <a href="" class="pt-5">
                        <i class="fa-solid fa-phone me-2"></i><span>1-677-124-44227</span>
                    </a>
                    <a href="" class="pt-3">
                        <i class="fa-regular fa-clock me-2"></i><span>Mon-Sat 8.00-18.00</span>
                    </a>
                </div>

                <!-- Popular Courses -->
                <div class="col-2">
                    <h5 class="fw-bold pb-5 m-0">Popular Courses</h5>
                    <div>
                        <a href="" class="hover-blue d-block">Business English</a>
                        <a href="" class="hover-grey">Preston Marshall</a>
                    </div>
                    <div class="pt-4">
                        <a href="" class="hover-blue d-block">Socail Computing</a>
                        <a href="" class="hover-grey">David Sanders</a>
                    </div>
                    <div class="pt-4">
                        <a href="" class="hover-blue d-block">Learn Spanish</a>
                        <a href="" class="hover-grey">Jennie King</a>
                    </div>
                </div>

                <!-- Supports -->
                <div class="col-2 ps-4">
                    <h5 class="fw-bold pb-5 m-0">Supports</h5>
                    <a href="" class="hover-blue d-block pb-3">User dashborad</a>
                    <a href="" class="hover-blue d-block pb-3">Contact Us</a>
                    <a href="" class="hover-blue d-block pb-3">FAQ</a>
                    <a href="" class="hover-blue d-block pb-3">Course Offer</a>
                    <a href="" class="hover-blue d-block pb-3">Events</a>
                </div>

                <!-- Flexible Learning -->
                <div class="offset-2 col-3">
                    <h5 class="fw-bold pb-4">Flexible Learning</h5>
                    <img class="w-100" src="../../../assets/img/footer-img-1.png" alt="">
                </div>
            </div>

            <!-- hr -->
            <hr class="text-white my-5 mx-4">


            <!-- sezione contatti -->
            <div class="row px-4">
                <div class="col-3">
                    <a href="">Copyrights 2017 ©Mikado Themes </a>
                </div>
                <div class="offset-5 col-4 text-white ">
                    <span class=" me-4">CALL +44 300 303 0266</span>
                    <span class="me-4">FOLLOW US</span>
                    <a href=""><i class="fa-brands fa-twitter me-4"></i></a>
                    <a href=""><i class="fa-brands fa-instagram me-4"></i></a>
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                </div>
            </div>

            <!-- fine section -->
        </div>
    </div>
</template>

<style scoped>
/* backround container */
#background-pattern {
    background-color: #222222;
}

/* section container */
#background-pattern>div {
    max-width: 1400px;
}

/* text style  */
a {
    display: inline-block;
    text-decoration: none;
}

span,
a {
    color: #CECECE
}

h5,
div a.hover-blue:first-child {
    font-family: "Merriweather", serif;
}

/* hover */
a:hover i,
.hover-blue:hover {
    color: #40C4FF;
}

.hover-grey:hover {
    color: #959595
}
</style>
