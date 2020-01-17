<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadPost" />
    </section>
  </div>
</template>
<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";
export default {
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadPost: {
        author: "Patrick",
        title: "My awesome post",
        content: "Super amazing, thanks for that!",
        thumbnailLink:
          "https://images.unsplash.com/photo-1567815883115-bcf719bdc8ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80"
      }
    };
  }
};
</script>
