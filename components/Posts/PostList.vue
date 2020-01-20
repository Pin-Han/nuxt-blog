<template>
  <div>
    <section class="post-list">
      <PostPreview
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :is-admin="isAdmin"
        :thumbnail="post.thumbnail"
        :title="post.title"
        :previewText="post.previewText"
      />
    </section>
  </div>
</template>
<script>
import PostPreview from "@/components/Posts/PostPeview.vue";

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
      required: false
    },
    posts: {
      type: Array,
      required: true
    }
  },
  computed: {
    posts() {
      return this.$store.getters.loadedPosts;
    }
  }
};
</script>
<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
