<template>
  <button type="button" v-on="$listeners">{{`Click Me! (${loading})`}}</button>
</template>

<script>
export default {
  props: { loading: Boolean }
};
</script>

<style>
</style>
