<template>
  <div>
    <h1>Single user id :{{ $route.params.id }}</h1>
  </div>
</template>
<script>
export default {
  validate(data) {
    console.log(data);
    return data.params.id === '1';
  }
};
</script>
