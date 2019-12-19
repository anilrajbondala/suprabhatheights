<template>
  <div>
    <Carousel />

    <div class="row my-1 bg-blue-900 text-white">
      <div class="col-12 col-md-6 p-4">
        <span class='text-2xl'>DHURVA SAI INFRASTRUCTURE</span>
        <p style="text-align:justify" class='leading-loose mt-4 text-base'>
          Suprabhat Real Estate & Developers need no introduction in Real Estate ﬁeld. From Uppal to Bhongiri, their pioneering projects blossomed into elite communities for over 30 years. Our is as ﬁrm as concrete. As a prestigious and the largest layout in Yadadri Bhuvanagiri, Suprabhat Heights promises to deliver more value per square yard.
          <br />Dhruva Sai Infra Structure is one of the prominent residential and open plot developers in Hyderabad. We offer Open and HMDA approved plots in Bhongiri. Dhruva Sai Infra has been driven by quality, timely deliver, and customer centricity of Commercial and Residential Plots in Bhongiri.
        </p>
      </div>
      <div class="col-12 col-md-6 p-4">
        <video controls autoplay>
          <source src="statics/d.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <!-- why suprabhat -->
    <div class="row my-1">
      <div
        class="col-12 col-md-6"
        style="background-image: url('statics/s1.jpg'); background-size:cover;"
      >
        <!-- <img src="statics/s1.jpg" /> -->
      </div>
      <div class="col-12 col-md-6">
        <div class="lg:pl-16 lg:mt-0">
          <h2
            class="text-3xl mb-4 leading-tight font-heading text-white whysup"
          >HIGHLIGHTS OF SUPRABHAT HEIGHTS !</h2>
          <div class="mb-4 row" v-for="(item) in highlights" v-bind:key="item">
            <div class="col-1 text-center">
              <h5 class="text-xl mb-2 font-heading"><q-icon class="text-xl theme-clr" name="ti-hand-point-right" /></h5>
            </div>
            <div class="col-11" style="padding-left:-10px">
              <h5 class="text-xl mb-2 font-heading">{{item}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Amenities-->
    <q-card class="my-card my-1 bg-black text-white">
      <q-card-section>
        <section class="py-12 px-4 text-center">
          <h2 class="text-4xl mb-2 leading-tight font-heading">OUR AMENITIES</h2>
          <p
            class="max-w-xl mx-auto mb-12 text-gray-500"
          >Suprabhat Heights is paving way to a lifestyle imbued in freedom. Suprabhat Heights offers plots in an ideal environment. Soak in golden sunshine on hilly terrain and fresh breeze.</p>
          <div class="flex flex-wrap -mx-4">
            <div class="w-1/2 lg:w-1/4 p-4" v-for="item in ame" v-bind:key="item.name">
              <img class="mx-auto mb-4" style="height: 160px;width:250px;" :src="item.img" alt />
              <h3 class="text-xl font-heading font-semibold leading-none">{{item.name}}</h3>
            </div>
          </div>
        </section>
      </q-card-section>
    </q-card>

    <!-- invest -->
    <div class="invest my-1">
      <div class="row">
        <div
          class="col-12 p-4 invest-title text-white font-bold text-2xl"
        >DEVELOPMENT AROUND YADADRI - BHUVANAGIRI</div>
      </div>
      <div class="row" style="background: #ebedec">
        <div class="col-12 col-md-6 p-4" v-for="item in yghighlights" v-bind:key="item.name">
          <div class="row">
            <div class="col-1 "><img :src="item.img" class="sm-py-4" /></div>
            <div class="col-11 px-2 text-lg py-2">{{item.name}}</div>
          </div>
        </div>
        <div class="col-12 col-md-6 p-4">
          <div class="row">
            <div class="col-1"><img src="statics/home.jpg" class="ygImg" /></div>
            <div class="col-11 px-2 text-lg">1400-Acre Temple Township on Mallapur Road for Cottages, Kalyana Mandapam, Shopping Complex, Restaurents & Many more.</div>
          </div>
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12">
          <div class="row">
        <div
          class="col-12 p-4 invest-title text-white font-bold text-2xl"
        >DISTANCE FROM SITE</div>
      </div>
          <img src="statics/distance1.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
export default {
  name: "PageIndex",
  components: {
    Carousel
  },
  data() {
    return {
      highlights: [
        "HMDA-Approved 90-Acre Gated Community",
        "Spot Registration",
        "30, 40, 60 & 100 ft Wide International BT Roads",
        "Highway Facing venture",
        "Venture Beside Bhongiri Head Quarters",
        "1 km Distance From Collectorate Office",
        "1/2 km Distance Prior Vivera Hotel On Highway",
        "YTDA Ring Road Which Is Closer To Venture"
      ],
      yghighlights: [
         {
          name: "YTDA Ring Road which is closer to Suprabhat Heights",
          img: "statics/road.jpg"
        },
         {
          name: "All Connecting Roads to Bhoingir to be made 6-Lane",
          img: "statics/allroad.jpg"
        },
         {
          name: "Proposed MMTS Station at Bhoingir",
          img: "statics/mmts.jpg"
        },
         {
          name: "9 Surroundings Hills to be developed as NAVA Narsimha Temples",
          img: "statics/hill.jpg"
        },
         {
          name: "Vedic & Sculpture Schools",
          img: "statics/school.jpg"
        },
         {
          name: "250-Acre Siddhi Kshetra Dham",
          img: "statics/dham.jpg"
        },
         {
          name: "Proposed 200-Acre Garden at Basvapur Reservation",
          img: "statics/garden.jpg"
        }
      ],
      ame: [
        {
          name: "CLUB HOUSE",
          img: "statics/amenities/club.jpg"
        },
        {
          name: "SWIMMING POOL",
          img: "statics/amenities/pool.jpg"
        },
        {
          name: "PARKS & PLAY AREA",
          img: "statics/amenities/park.jpg"
        },
        {
          name: "STREET LIGHTING",
          img: "statics/amenities/led.jpg"
        },
        {
          name: "JOGGING TRACK",
          img: "statics/amenities/track.jpg"
        },
        {
          name: "FOOT PATH KERB STONES",
          img: "statics/amenities/kerb.jpg"
        },
        {
          name: "24-HOURS SECURITY",
          img: "statics/amenities/security.jpg"
        },
        {
          name: "WATER HARVESTING & PITS",
          img: "statics/amenities/harvesting.jpg"
        },
        {
          name: "UNDER GROUND DRINAGE",
          img: "statics/amenities/drinage.jpg"
        },
        {
          name: "DESIGNER LANDSCAPING",
          img: "statics/amenities/land.jpg"
        },
        {
          name: "ALL ROUND FENCING",
          img: "statics/amenities/fence.jpg"
        },
        {
          name: "AVENUE PLANTATION",
          img: "statics/amenities/avenue1.jpg"
        }
      ]
    };
  }
};
</script>
