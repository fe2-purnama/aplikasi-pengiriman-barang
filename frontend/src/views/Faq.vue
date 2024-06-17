<template>
  <div class="container">
    <h1 class="mb-4">Frequently Asked Questions</h1>
    <div v-for="(faq, index) in faqs" :key="index" class="accordion mb-3">
      <div class="accordion-item">
        <h2 class="accordion-header" :id="'heading' + index">
          <button
            class="accordion-button collapsed"
            type="button"
            :data-bs-toggle="'#collapse' + index"
            aria-expanded="false"
            :aria-controls="'collapse' + index"
          >
            <i class="fas fa-question-circle me-2"></i>{{ faq.question }}
          </button>
        </h2>
        <div
          :id="'collapse' + index"
          class="accordion-collapse collapse"
          :aria-labelledby="'heading' + index"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "How long does shipping take?",
          answer: "Shipping typically takes 3-5 business days."
        },
        {
          question: "Can I track my package?",
          answer: "Yes, you can track your package using our online tracking system."
        },
        {
          question: "What should I do if my package is damaged?",
          answer: "Please contact our customer support immediately with details and photos of the damaged package."
        },
        {
          question: "Do you offer international shipping?",
          answer: "Yes, we offer international shipping to selected countries."
        },
        {
          question: "How can I change my shipping address?",
          answer: "You can change your shipping address by logging into your account and updating your address details."
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  margin-top: 100px;
}
.accordion-button {
  background-color: #f8f9fa;
  color: #212529;
  border-color: #dee2e6;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 18px;
  text-align: left;
  transition: background-color 0.3s ease;
}
.accordion-button:hover {
  background-color: #e9ecef;
}
.accordion-body {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
