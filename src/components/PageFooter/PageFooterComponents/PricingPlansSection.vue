<script>
export default {
    name: "PricingPlansSection",
    data() {
        return {

        }
    },
    methods: {},
    mouthed() { }

}

</script>

<template>

    <!-- section container della sezione -->
    <div id="background-pattern" class="container-fluid p-5 border-bottom">


        <!-- titolo sezione + stringa di testo -->
        <h1 class="text-center">Pricing Plans</h1>
        <span class="d-block text-center pb-5">Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,lorem
            quis bibendum auci </span>


        <!-- container tabella -->
        <div class="container d-flex px-0 pb-5">

            <!-- tabella di sinistra -->
            <div class="w-25">
                <table class="table border border-end-0 m-0">
                    <thead>
                        <tr>
                            <th class="p-4">
                                <h4 class="m-0 pb-3">Save up to 40% by paying weekly</h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="px-4 py-3">Number of Courses</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-3">Time</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-3">Web Designing</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-3">Human-Centered Design</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-3">Basic Marketing</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-3">Python for Everybody</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-3">Android Developer</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-3">Business English</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- tabella di destra -->
            <div class="w-75">
                <table class="table table-bordered m-0">
                    <thead>
                        <th class="p-4 w-25">
                            <div class="d-flex flex-column align-items-center">
                                <img src="../../../assets/img/h5-custom-icon-7.png" alt="">
                                <h4 class="pt-3">Standard</h4>
                                <h4>$12</h4>
                            </div>
                        </th>
                        <th class="p-4 w-25">
                            <div class="d-flex flex-column align-items-center">
                                <img src="../../../assets/img/h5-custom-icon-8.png" alt="">
                                <h4 class="pt-3">Professional</h4>
                                <h4>$59</h4>
                            </div>
                        </th>
                        <th class="p-4 w-25">
                            <div class="d-flex flex-column align-items-center">
                                <img src="../../../assets/img/h5-custom-icon-9.png" alt="">
                                <h4 class="pt-3">Advanced</h4>
                                <h4>$88</h4>
                            </div>
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="px-4 py-3 text-center">2</td>
                            <td class="px-4 py-3 text-center">4</td>
                            <td class="px-4 py-3 text-center">6</td>
                        </tr>

                        <tr>
                            <td class="px-4 py-3 text-center">15 Days</td>
                            <td class="px-4 py-3 text-center">30 Days</td>
                            <td class="px-4 py-3 text-center">30 Days</td>
                        </tr>

                        <tr>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-check"></i></td>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-check"></i></td>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-check"></i></td>
                        </tr>

                        <tr>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-check"></i></td>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-check"></i></td>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-check"></i></td>
                        </tr>

                        <tr>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-x"></i></td>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-check"></i></td>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-check"></i></td>
                        </tr>

                        <tr>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-x"></i></td>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-check"></i></td>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-check"></i></td>
                        </tr>

                        <tr>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-x"></i></td>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-x"></i></td>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-check"></i></td>
                        </tr>

                        <tr>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-x"></i></td>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-x"></i></td>
                            <td class="px-4 py-3 text-center"><i class="fa-solid fa-check"></i></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="px-4 py-3 text-center">
                                <button type="button" class="btn bg-white border w-75 p-2">GET IT NOW</button>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <button type="button" class="btn bg-white border w-75 p-2">GET IT NOW</button>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <button type="button" class="btn bg-white border w-75 p-2">GET IT NOW</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>

        <!-- fine section container -->
    </div>
</template>

<style scoped>
/* background container */
#background-pattern {
    background-image: url(../../../assets/img/background-pattern.jpg);
}

/* table */
th {
    height: 14rem;
    border-top: 4px solid #D6F2FF;
}

td {
    color: #959595
}

.w-75 th,
tfoot td {
    background-color: #F7FDFF
}

.fa-check {
    color: #40C4FF
}

/* hover */
/* .w-75 th:hover {
    border-top: 4px solid #40C4FF
} */
</style>
