<template>
  <q-layout view="hHh LpR lFr">
    <div>
      <div class='flex justify-between bg-gray-700 text-white p-2 font-bold'>
        <div>
          <q-icon name="ti-email" /> : dhruvasaiinfrapvtltd@gmail.com
           <q-icon name="ti-headphone-alt ml-2" /> : +91  844 844 0609
        </div>
        <div class='flex'>
          <a href="https://www.facebook.com/suprabhatheightsofficial/" target="_blank"><q-icon name="ti-facebook mr-4" /></a>
          <a href="https://www.facebook.com/suprabhatheightsofficial/" target="_blank"><q-icon name="ti-linkedin mr-4" /></a>
          <a href="https://www.instagram.com/suprabhat_heights/" target="_blank"><q-icon name="ti-instagram mr-4" /></a>
          <a href="https://in.pinterest.com/dhruvainfradevelopers/" target="_blank"><q-icon name="ti-pinterest mr-4" /></a>
        </div>
      </div>
      <hr/>
      <SideMenu class="sm:block md:block lg:hidden" />
      <Menu class="hide-sm sm:hidden md:hidden lg:block" />
      <router-view />
      <footer class="flex flex-wrap items-center justify-between p-4 bg-gray-800 text-white">
        <div
          class="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center"
        >© 2019 Dhruva Sai InfraStructures</div>
        <div class="flex flex-grow items-center w-full lg:w-auto">
          <div class="mx-auto lg:mx-0 lg:ml-auto">
            <a class="inline-block mt-0 mr-8 text-white hover:text-blue-700" href="#">Terms</a>
            <a
              class="inline-block mt-0 mr-8 text-white hover:text-blue-700"
              href="#"
            >Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  </q-layout>
</template>

<script>
import Menu from "../components/Menu";
import SideMenu from "../components/SideMenu";
export default {
  name: "MyLayout",
  components: {
    SideMenu,
    Menu
  },
  data() {
    return {};
  }
};
</script>
