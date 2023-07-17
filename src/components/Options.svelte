<script lang="ts">
  import { storage } from "../storage";

  let state = storage.state;

  $: count = $state.count;

  function click(count: number) {
    storage.set({ count });
  }
</script>

<div class="container">
  <h1>Counter</h1>
  <p>Current count: <b>{count}</b></p>
  <div>
    <button on:click={(_) => click(count - 1)}>-</button>
    <button on:click={(_) => click(count + 1)}>+</button>
  </div>
</div>

<style lang="scss" scoped>
  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .container {
    min-width: 250px;
    color: #333;
  }
  div {
    button {
      border-radius: 5px;
      background-color: #2ecc71;
      color: #ecf0f1;
      padding: 5px 20px;
      border: none;
      margin-right: 1rem;
      &:active {
        background-color: #10763b;
      }
    }
  }
</style>
