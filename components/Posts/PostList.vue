<template>
  <div>
    <section class="post-list">
      <PostPreview
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://images.unsplash.com/photo-1567815883115-bcf719bdc8ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80"
        title="Hello THere"
        previewText="This is my first post"
      />
      <PostPreview
        id="2"
        :is-admin="isAdmin"
        thumbnail="https://images.unsplash.com/photo-1567815883115-bcf719bdc8ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80"
        title="Hello THere second time"
        previewText="This is my second post"
      />
      <PostPreview
        id="3"
        :is-admin="isAdmin"
        thumbnail="https://images.unsplash.com/photo-1567815883115-bcf719bdc8ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80"
        title="Hello THere third time"
        previewText="This is my third post"
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
