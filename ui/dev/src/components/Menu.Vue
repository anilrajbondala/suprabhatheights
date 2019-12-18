<template>
    <div>
        <div class="flex flex-wrap items-center justify-between">
        <div class="flex">
          <img class="h-20" src="statics/second.png" />
          <img class="h-20 ml-2 hide-sm" src="statics/main-logo.png" />
        </div>
        <div class="flex text-xl">
          <div class="mr-4">
            <router-link to='/'>HOME</router-link>
          </div>
          <div class="mr-4">
            <router-link to='location'>LOCATION</router-link>
          </div>
          <div class="mr-4">
            <router-link to="gallery">GALLERY</router-link>
          </div>
          <div class="mr-4">
            <router-link to="documents">DOCUMENTS</router-link>
          </div>
          <div class="mr-4">
            <router-link to="about">ABOUT US</router-link>
          </div>
          <div class="mr-4">
            <router-link to="contact">CONTACT US</router-link>
          </div>
        </div>
      </div>
    </div>
</template>