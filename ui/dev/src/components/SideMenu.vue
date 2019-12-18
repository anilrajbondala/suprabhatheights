<template>
  <div>
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="ti-align-left" />
        <q-toolbar-title><img src="statics/ds.jpg" class="ds_small-logo"/>Dhruva Sai Infra Structures</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerLeft" show-if-above :width="200" elevated content-class="text-black">
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <q-list bordered separator>
            <q-item clickable v-ripple>
              <q-item-section>
                <router-link to="/">HOME</router-link>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <router-link to="location">LOCATION</router-link>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <router-link to="gallery">GALLERY</router-link>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <router-link to="documents">DOCUMENTS</router-link>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <router-link to="about">ABOUT US</router-link>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <router-link to="contact">CONTACT US</router-link>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-scroll-area>
    </q-drawer>

  </div>
</template>


<script>
export default {
  name: "SideMenu",
  data() {
    return {
      drawerLeft: false
    };
  }
};
</script>
