<template>
  <div>
    <label for="a">{{label}}</label>
    <input id="a" type="text" :value="newValue" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: { label: String, value: { type: String, required: true } },
  data() {
    return {
      newValue: this.value
    };
  }
};
</script>

<style>
</style>
