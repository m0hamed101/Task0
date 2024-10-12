<template>
  <div class="" style="margin-top: 150px; ">
    <footer class=" text-light  " style="background-color: #F0F0F0;">
      <div class="container">
        <div class="newsletter d-flex flex-column flex-md-row align-items-center rounded-5 justify-content-between position-relative">
          <div class="newsletter_Head">
            <h2 class="px-lg-5">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>

          <form class="text-center" @submit.prevent="subscribe">

            <div class="justify-content-center">
              <div class="bg-white d-flex align-items-center rounded-4 px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="#000000"
                    d="M3 19V5h18v14zm9-6.884L4 6.885V18h16V6.885zM12 11l7.692-5H4.308zM4 6.885V6v12z" />
                </svg>


                <input  type="text" v-model="name"
                  class=" rounded-4 border-0 form-input p-2" placeholder="Enter your name" required />
              </div>
              <button type="submit" class="btn btn-light p-2 my-3 w-100 rounded-4">View All</button>
            </div>
          </form>
        </div>

        <div class="row">
          <div class=" col-lg-4 col-md-8 col-12">
            <h5 class="fw-bold text-dark">SHOP.CO</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-dark text-decoration-none">We have clothes that suits your style and which
                  you’re proud to wear.
                  From women to men.</a></li>
              <li><a href="#" class="text-dark text-decoration-none">social Media</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-8 col-6 mb-3">
            <h5 class="text-dark">COMPANY</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-dark text-decoration-none">About</a></li>
              <li><a href="#" class="text-dark text-decoration-none">Features</a></li>
              <li><a href="#" class="text-dark text-decoration-none">Works</a></li>
              <li><a href="#" class="text-dark text-decoration-none">Career</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-4 col-6 mb-3">
            <h5 class="text-dark">HELP</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-dark text-decoration-none">Customer Support</a></li>
              <li><a href="#" class="text-dark text-decoration-none">Delivery Details</a></li>
              <li><a href="#" class="text-dark text-decoration-none">Terms & Conditions</a></li>
              <li><a href="#" class="text-dark text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-4 col-6 mb-3">
            <h5 class="text-dark">F A Q</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-dark text-decoration-none">Account</a></li>
              <li><a href="#" class="text-dark text-decoration-none">Manage Deliveries</a></li>
              <li><a href="#" class="text-dark text-decoration-none">Orders</a></li>
              <li><a href="#" class="text-dark text-decoration-none">Payments</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-4 col-6 mb-3">
            <h5 class="text-dark">RESOURCES</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-dark text-decoration-none">Free eBooks</a></li>
              <li><a href="#" class="text-dark text-decoration-none">Development Tutorial</a></li>
              <li><a href="#" class="text-dark text-decoration-none">How to - Blog</a></li>
              <li><a href="#" class="text-dark text-decoration-none">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      name: '',
      email: ''
    };
  },
  methods: {
    subscribe() {
      console.log(`Name: ${this.name}, Email: ${this.email}`);
      this.name = '';
      this.email = '';
    }
  }
};
</script>

<style scoped>
.footer {
  padding: 20px 0;
  background-color: #343a40;
}

.newsletter {
  top: -100px;
  background-color: #000000;
  padding: 20px;
}

@media (min-width: 992px) {
  .form-input .btn {
    max-width: 300px;
  }

  .btn {
    max-width: 300px;
  }
}


@media (min-width: 992px) {
  .newsletter_Head {
    width: 50%; 
  }
}

</style>
