<script lang="ts">
  import Options from "./Options.svelte";
</script>

<div class="overlay">
  <Options />
</div>

<style scoped>
  .overlay {
    position: fixed;
    top: 16px;
    left: 16px;
    background-color: white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    z-index: 1000;
    max-width: 300px;
  }
</style>
