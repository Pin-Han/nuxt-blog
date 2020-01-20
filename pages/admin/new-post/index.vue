<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>
<script>
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost',postData)
      .then(()=>{
        this.$router.push('/admin');
      })
    }
  }
};
</script>
<style scoped>
.admin-new-post-page {
  max-width: 600px;
  margin: 0 auto;
  width: 70%;
}
</style>
