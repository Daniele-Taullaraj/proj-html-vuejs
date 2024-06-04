<script>
export default {
    name: "ClientsSection",
    data() {
        return {

        }
    },
    methods: {},
    mouthed() { }

}

</script>

<template>
    <div class="container-fluid p-5">
        <div class="row p-5 text-white">
            <div class="col-3 pe-4">
                <a href="" class="pb-5"><img class="w-50" src="../../../assets/img/footer-logo-1.png" alt=""></a>
                <span>Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to
                    Home</span>
                <a href="" class="pt-5">
                    <i class="fa-solid fa-phone  me-2"></i><span>1-677-124-44227</span>
                </a>
                <a href="" class="pt-3">
                    <i class="fa-regular fa-clock me-2"></i><span>Mon-Sat 8.00-18.00</span>
                </a>
            </div>

            <div class="col-2">
                <h4 class="fw-bold pb-5 m-0">Popular Courses</h4>
                <div>
                    <a href="" class="hover-blue fs-5 fw-semibold">Business English</a>
                    <a href="" class="hover-grey">Preston Marshall</a>
                </div>
                <div class="pt-3">
                    <a href="" class="hover-blue fs-5 fw-semibold">Socail Computing</a>
                    <a href="" class="hover-grey">David Sanders</a>
                </div>
                <div class="pt-3">
                    <a href="" class="hover-blue fs-5 fw-semibold">Learn Spanish</a>
                    <a href="" class="hover-grey">Jennie King</a>
                </div>
            </div>

            <div class="col-2 ps-4">
                <h4 class="fw-bold pb-5 m-0">Supports</h4>
                <a href="" class="hover-blue d-block pb-3">User dashborad</a>
                <a href="" class="hover-blue d-block pb-3">Contact Us</a>
                <a href="" class="hover-blue d-block pb-3">FAQ</a>
                <a href="" class="hover-blue d-block pb-3">Course Offer</a>
                <a href="" class="hover-blue d-block pb-3">Events</a>
            </div>

            <div class="offset-2 col-3">
                <h4 class="fw-bold pb-4">Flexible Learning</h4>
                <img class="w-100" src="../../../assets/img/footer-img-1.png" alt="">
            </div>
        </div>

        <hr class="text-white m-5">

        <div class="row px-5">
            <div class="col-3">
                <a href="">Copyrights 2017 ©Mikado Themes </a>
            </div>
            <div class="offset-5 col-4 text-white">
                <span class="me-4">CALL +44 300 303 0266</span>
                <span class="me-4">FOLLOW US</span>
                <a href=""><i class="fa-brands fa-twitter me-4"></i></a>
                <a href=""><i class="fa-brands fa-instagram me-4"></i></a>
                <a href=""><i class="fa-brands fa-facebook me-4"></i></a>

            </div>
        </div>
    </div>
</template>

<style scoped>
.container-fluid {
    background-color: #222222
}

a:hover i,
.hover-blue:hover {
    color: #40C4FF;
}

.hover-grey:hover {
    color: #959595
}

a {
    display: inline-block;
    text-decoration: none;
    color: #CECECE;
}

span {
    color: #CECECE
}
</style>
