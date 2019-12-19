<template>
  <div>
    <div class="w-full h-10 bg-black page">Contact</div>
    <div class="row">
      <div class="col-12 col-md-4 text-center bg-white rounded p-6">
        <div class="rounded overflow-hidden shadow-lg py-4">
          <q-icon class="text-4xl theme-clr" name="ti-map-alt" />
          <div class="px-6 py-4">
            <h3 class="font-bold text-xl mb-2">Visit Our Office</h3>
            <p style="padding-bottom:30px">
              Plot No - 6 &amp; 7, Samathapuri Colony,
              <br />Nagole Main Road, Hyderabad TS
              <br />500035
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 text-center bg-white rounded p-6">
        <div class="rounded overflow-hidden shadow-lg py-4">
          <q-icon class="text-4xl theme-clr" name="ti-headphone-alt" />
          <div class="px-6 py-4">
            <h3 class="font-bold text-xl mb-2">Call Us</h3>
            <p style="padding-bottom:50px">
              +91 844 844 0609
              <br />
              <span>Monday - Sunday:</span> 9.00am to 6.00pm
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 text-center bg-white rounded p-6">
        <div class="rounded overflow-hidden shadow-lg py-4">
          <q-icon class="text-4xl theme-clr" name="ti-email" />
          <div class="px-6 py-4">
            <h3 class="font-bold text-xl mb-2">Mail Us</h3>
            <p style="padding-bottom :50px">
              dhruvasaiinfrapvtltd@gmail.com
              <br />dhruvasai72@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-6">
      <div class="col-12 col-md-6 p-6 border-2">
        <form class="w-full">
          <div class="sec-title with-text">
            <p>Drop Us a Line</p>
            <div class="title">
              Send Your
              <span>Message</span>
            </div>
            <p
              class="bottom-text"
            >If you have question or would like more information on our works, Please complete the form and we’ll aim get back to you with in 24 hours.</p>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6 mt-4">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >First Name</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >Last Name</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Doe"
              />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >Email</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                placeholder="test@gmail.com"
              />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >Phone Number</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="+91 12345 12345"
              />
            </div>
          </div>
          <button
            class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow"
          >Summit</button>
        </form>
      </div>
      <div class="col-12 col-md-6 px-2">
        <div>
          <iframe
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Suprabhat%20Heights%20(VNR%20Ventures)+(Suprabhat%20Heights%20(Dhurva%20Sai))&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          >
            <a href="https://www.maps.ie/coordinates.html">gps coordinates</a>
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>
