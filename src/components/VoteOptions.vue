<template>
  <div style="width: 300px;">
    <ul>
      <slot v-for="optionItem in options" name="item" :option-item="optionItem">
        <li :key="option.id">{{optionItem.name}}</li>
      </slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VoteOptions",
  data() {
    return {
      //   options: ["tak", "nie"],
      options: [
        {
          id: 0,
          name: "tak"
        },
        {
          id: 1,
          name: "nie"
        }
      ]
    };
  }
};
</script>

<style>
</style>
