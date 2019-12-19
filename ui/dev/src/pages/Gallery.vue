<template>
  <div>
    <div class="w-full h-10 bg-black page">Gallery</div>
    <div class="gallery row">
      <a class="col-md-3 p-4" href="statics/gallery/1.JPG" data-caption="Image caption">
        <img src="statics/gallery/1.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4" href="statics/gallery/2.JPG" data-caption="Image caption">
        <img src="statics/gallery/2.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4" href="statics/gallery/3.JPG" data-caption="Image caption">
        <img src="statics/gallery/3.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4" href="statics/gallery/4.JPG" data-caption="Image caption">
        <img src="statics/gallery/4.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4" href="statics/gallery/5.JPG" data-caption="Image caption">
        <img src="statics/gallery/5.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4" href="statics/gallery/6.JPG" data-caption="Image caption">
        <img src="statics/gallery/6.JPG" alt="First image" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageGallery",
  created() {},
  mounted() {
    baguetteBox.run(".gallery");
  }
};
</script>
