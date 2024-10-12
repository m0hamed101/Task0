<template>
  <div class="mt-5">
    <div class="col text-center d-flex justify-content-between px-lg-5">
      <h2>Our Happy Customers</h2>
      <div class="arrow d-flex">
        <div @click="scrollLeft">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="#000000" d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"/>
          </svg>
        </div>

        <div @click="scrollRight">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="#000000" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <div ref="reviewsContainer" class="reviews-container $enable-smooth-scroll	 d-flex mt-3 overflow-x-auto">
  <div v-for="(review, index) in customerReviews" :key="index" class="col-12 col-sm-6 col-md-3 mx-1">
    <div class="border rounded p-3">
      <div>
        <span class="text-warning" v-for="star in review.rating" :key="star">★</span>
        <span class="text-muted" v-for="star in 5 - review.rating" :key="star + 'empty'">☆</span>
      </div>
      <h6 style="font-weight: bold;">{{ review.name }}</h6>
      <p>{{ review.comment }}</p>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      customerReviews: [
        {
          name: "John Doe",
          comment: "I'm blown away by the quality and style of the clothes I received from Shop.co.",
          rating: 5,
        },
        {
          name: "Jane Smith",
          comment: "Affordable prices, will shop again.",
          rating: 4,
        },
        {
          name: "Michael Johnson",
          comment: "Satisfied with my purchase.",
          rating: 4,
        },
        {
          name: "Emily Clark",
          comment: "Great customer service and fast delivery.",
          rating: 5,
        },{
          name: "John Doe",
          comment: "I'm blown away by the quality and style of the clothes I received from Shop.co.",
          rating: 5,
        },
        {
          name: "Jane Smith",
          comment: "Affordable prices, will shop again.",
          rating: 4,
        },
        {
          name: "Michael Johnson",
          comment: "Satisfied with my purchase.",
          rating: 4,
        },
        {
          name: "Emily Clark",
          comment: "Great customer service and fast delivery.",
          rating: 5,
        },{
          name: "John Doe",
          comment: "I'm blown away by the quality and style of the clothes I received from Shop.co.",
          rating: 5,
        },
        {
          name: "Jane Smith",
          comment: "Affordable prices, will shop again.",
          rating: 4,
        },
        {
          name: "Michael Johnson",
          comment: "Satisfied with my purchase.",
          rating: 4,
        },
        {
          name: "Emily Clark",
          comment: "Great customer service and fast delivery.",
          rating: 5,
        },
      ],
    };
  },
  methods: {
    scrollLeft() {
      const container = this.$refs.reviewsContainer;
      if (container) {
        container.scrollBy({ left: -300, behavior: 'smooth' });
      }
    },
    scrollRight() {
      const container = this.$refs.reviewsContainer;
      if (container) {
        container.scrollBy({ left: 300, behavior: 'smooth' });
      }
    },
  },
};
</script>



<style>
.reviews-container {
}

.reviews-container::-webkit-scrollbar {
  display: none; 
}

.border.rounded.p-3 {
  min-height: 150px;
}
</style>
