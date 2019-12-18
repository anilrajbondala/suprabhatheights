<template>
  <q-layout view="hHh LpR lFr">
    <div>
      <SideMenu class='sm:block md:block lg:hidden' />
      <Menu class='hide-sm sm:hidden md:hidden lg:block' />
      <Carousel />
      <router-view />
    </div>
  </q-layout>
</template>

<script>
import Menu from '../components/Menu';
import SideMenu from '../components/SideMenu';
import Carousel from '../components/Carousel';
export default {
  name: "MyLayout",
  components: {
    SideMenu,
    Menu,
    Carousel
  },
  data() {
    return {
    };
  }
};
</script>
