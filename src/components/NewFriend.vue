<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Full Name</label>
      <input type="text" v-model="enterdName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enterdPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enterdEmail" />
    </div>
    <div>
      <button>Add</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enterdName: "",
      enterdPhone: "",
      enterdEmail: "",
    };
  },
  methods: {
    submitData() {
      // Lift form input data to App component
      this.$emit("add-contact", {
        name: this.enterdName,
        phone: this.enterdPhone,
        email: this.enterdEmail,
      });
    },
  },
};
</script>
