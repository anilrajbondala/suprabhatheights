<template>
  <div class="relative">
    <div class="w-full page1 gallerybg" style="background-image:url(statics/gallery-bg.jpg);">Gallery</div>
    <span class="page-title-overlay"></span>
    <div class="container py-4" style="margin:0 auto;">
    <div class="gallery row">
      <a class="col-md-3 p-4 g-img" href="statics/gallery/1.JPG" data-caption="Image caption">
        <img src="statics/gallery/1.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/2.JPG" data-caption="Image caption">
        <img src="statics/gallery/2.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/3.JPG" data-caption="Image caption">
        <img src="statics/gallery/3.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/4.JPG" data-caption="Image caption">
        <img src="statics/gallery/4.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/5.JPG" data-caption="Image caption">
        <img src="statics/gallery/5.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/6.JPG" data-caption="Image caption">
        <img src="statics/gallery/6.JPG" alt="First image" />
      </a>
       <a class="col-md-3 p-4 g-img" href="statics/gallery/1.JPG" data-caption="Image caption">
        <img src="statics/gallery/1.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/2.JPG" data-caption="Image caption">
        <img src="statics/gallery/2.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/3.JPG" data-caption="Image caption">
        <img src="statics/gallery/3.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/4.JPG" data-caption="Image caption">
        <img src="statics/gallery/4.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/5.JPG" data-caption="Image caption">
        <img src="statics/gallery/5.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/6.JPG" data-caption="Image caption">
        <img src="statics/gallery/6.JPG" alt="First image" />
      </a>
       <a class="col-md-3 p-4 g-img" href="statics/gallery/1.JPG" data-caption="Image caption">
        <img src="statics/gallery/1.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/2.JPG" data-caption="Image caption">
        <img src="statics/gallery/2.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/3.JPG" data-caption="Image caption">
        <img src="statics/gallery/3.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/4.JPG" data-caption="Image caption">
        <img src="statics/gallery/4.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/5.JPG" data-caption="Image caption">
        <img src="statics/gallery/5.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/6.JPG" data-caption="Image caption">
        <img src="statics/gallery/6.JPG" alt="First image" />
      </a>
       <a class="col-md-3 p-4 g-img" href="statics/gallery/1.JPG" data-caption="Image caption">
        <img src="statics/gallery/1.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/2.JPG" data-caption="Image caption">
        <img src="statics/gallery/2.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/3.JPG" data-caption="Image caption">
        <img src="statics/gallery/3.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/4.JPG" data-caption="Image caption">
        <img src="statics/gallery/4.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/5.JPG" data-caption="Image caption">
        <img src="statics/gallery/5.JPG" alt="First image" />
      </a>
      <a class="col-md-3 p-4 g-img" href="statics/gallery/6.JPG" data-caption="Image caption">
        <img src="statics/gallery/6.JPG" alt="First image" />
      </a>
    </div>
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
