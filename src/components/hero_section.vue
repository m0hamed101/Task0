<template>
  <div class="row" style="background: #f2f0f1">
    <div class="col text-center align-item-center justify-content-center d-flex">
      <div>
        <div class="p-lg-5 p-3 text-start">
          <h1 class="title fw-bold responsive-title">FIND CLOTHES </h1>
          <h1 class="title fw-bold responsive-title"> THAT MATCHES </h1>
          <h1 class="title fw-bold responsive-title"> YOUR STYLE</h1>
          <h9 class="">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality
            and cater to your sense of style.
          </h9>
          <button class="rounded-5 bg-dark text-light my-3 p-1 custom-btn">SHOP New</button>
        </div>
        <div class="numbers row">
          <div class="col w-100">
            <div style="font-family: satoshi; font-style: normal; font-size: 40px; line-height: 54px;">200+</div>
            <div class="fs-13px text-black-50">International Brands</div>
          </div>
          <div class="col w-100">
            <div style="font-family: satoshi; font-style: normal; font-size: 40px; line-height: 54px;">2,000+</div>
            <div class="fs-13px text-black-50">High-Quality Products</div>
          </div>
          <div class="col w-100">
            <div style="font-family: satoshi; font-style: normal; font-size: 40px; line-height: 54px;">30,000+</div>
            <div class="fs-13px text-black-50">Happy Customers</div>
          </div>
        </div>
      </div>
    </div>
    <img class="col" src="../assets/image.png" alt="" />
  </div>
</template>
<script>
export default {

}
</script>
<style>
.custom-btn {
  width: 300px;
}

@media (min-width: 992px) {


  .custom-btn {
    width: 200px;

  }
}

.responsive-title {
  font-size: 35px;
}

@media (min-width: 992px) {
  .responsive-title {
    font-size: 70px;
  }
}
</style>
