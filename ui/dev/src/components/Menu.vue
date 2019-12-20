<template>
    <div>
        <div class="flex flex-wrap items-center justify-between">
        <div class="flex">
          <img src="statics/ds-logo-final.png" class="h-16" />
          <!-- <img class="h-20" src="statics/second.png" />
          <img class="h-20 ml-2 hide-sm" src="statics/main-logo.png" /> -->
        </div>
        <div class="">
          <div class="flex" style="height: 44px;">
            <div class="w-full text-right float-right">
              <span class="px-2">+91  844 844 0609</span>
              <a class="border-1 p-1 border-solid border mr-2 my-1 px-2 border-gray-600" target="_blank"><i aria-hidden="true" class="themify-icon ti-facebook q-icon"> </i></a>
              <a class="border-1 p-1 border-solid border mr-2 my-1 px-2 border-gray-600" target="_blank"><i aria-hidden="true" class="themify-icon ti-linkedin q-icon"> </i></a>
              <a class="border-1 p-1 border-solid border mr-2 my-1 px-2 border-gray-600" target="_blank"><i aria-hidden="true" class="themify-icon ti-instagram q-icon"> </i></a>
              <a class="border-1 p-1 border-solid border mr-2 my-1 px-2 border-gray-600" target="_blank"><i aria-hidden="true" class="themify-icon ti-pinterest q-icon"> </i></a>
            </div>
          </div>
          <div  class="flex text-base" style="height: 46px;">
          <div class="mr-10 m-item self-end">
            <router-link to='/'>HOME</router-link>
          </div>
          <!-- <div class="mr-10 m-item self-end">
            <router-link to='location'>LOCATION</router-link>
          </div> -->
          <div class="mr-10 m-item self-end">
            <router-link to="gallery">GALLERY</router-link>
          </div>
          <div class="mr-10 m-item self-end">
            <router-link to="documents">DOCUMENTS</router-link>
          </div>
          <div class="mr-10 m-item self-end">
            <router-link to="about">ABOUT US</router-link>
          </div>
          <div class=" m-item self-end">
            <router-link to="contact">CONTACT US</router-link>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>