<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <VoteOptions>
      <template v-slot:item="{optionItem}">
        <li>
          <strong>{{optionItem.name}}</strong>
        </li>
      </template>
    </VoteOptions>
  </div>
</template>

<script>
import VoteOptions from "../components/VoteOptions";
export default {
  name: "home",
  components: { VoteOptions },
  data() {
    return {
      options: ["tak", "może", "nie wiem", "nie"]
    };
  }
};
</script>
