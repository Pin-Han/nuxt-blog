<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
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
  data() {
    return {};
  },
  asyncData(context) {
    console.log(context)
    return axios
      .get(
        `https://nuxt-blog-67338.firebaseio.com/posts/${context.route.params.postid}.json`
      )
      .then(res => {
        console.log('res',res)
        return {
          loadedPost: { ...res.data, id: context.params.postid }
        };
      })
      .catch(e => context.error(e));
  },
  methods: {
    onSubmitted(editPost) {
      this.$store.dispatch("editPost", editPost).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>
<style scoped>
.update-form {
  max-width: 600px;
  margin: 0 auto;
  width: 70%;
}
</style>
