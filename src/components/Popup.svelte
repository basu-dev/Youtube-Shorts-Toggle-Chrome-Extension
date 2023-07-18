<script lang="ts">
  import { storage } from "../storage";

  const state = storage.state;

  $: checked = $state.shortsVisible;

  function toggleChange(event: any) {
    storage.set({ shortsVisible: event.target.checked });
  }
</script>

<div class="container">
  <h3>Hide Youtube Shorts</h3>
  <input {checked} on:change={toggleChange} id="chck" type="checkbox" />
  <label for="chck" class="check-trail">
    <span class="check-handler" />
  </label>
</div>

<style lang="scss">
  $clouds: #ecf0f1;
  $turquoise: #1abc9c;
  $greensea: #16a085;
  $night: #34495e;
  $midnight: #2c3e50;
  $transition: all 0.5s ease;

  h3 {
    font-size: 1.5em;
    margin-right: 1em;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $clouds;
    min-height: 100px;
    min-width: 300px;
    border-radius: 10px;
  }
  /* Hide the input */
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  .check-trail {
    display: flex;
    align-items: center;
    width: 5em;
    height: 3em;
    background: $midnight;
    border-radius: 2.5em;
    transition: $transition;
    cursor: pointer;
  }
  .check-handler {
    display: flex;
    margin-left: 0.5em;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
    background: $night;
    border-radius: 50%;
    transition: $transition;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    &:before {
      content: "\00D7";
      color: white;
      font-size: 1em;
      font-weight: bold;
    }
  }
  input[type="checkbox"]:checked + .check-trail {
    background: $greensea;
    .check-handler {
      margin-left: 50%;
      background: $turquoise;
      &::before {
        content: "\2714";
      }
    }
  }
</style>
