<template>
  <div>
    <h1>THe users page</h1>
    <input type="text" v-model="userId" />
    <button @click="onLoadUser()">Load User</button>
    
    <nuxt-child />  <!-- 父級頁面 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: ""
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push(`/users/${this.userId}`);
    }
  },
  layout:'users'
};
</script>