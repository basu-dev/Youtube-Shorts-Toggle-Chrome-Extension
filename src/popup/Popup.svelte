<script lang="ts">
  import { sendMessageFromPopup } from "../message";
  import { storage } from "../storage";

  const state = storage.state;
  let reloaded = true;

  $: checked = $state.shortsVisible;

  function toggleChange(event: any) {
    let checked = event.target.checked;
    if (!checked) reloaded = false;
    storage.set({ shortsVisible: checked });
  }

  function reloadPage() {
    sendMessageFromPopup({ type: "reload" }, () => (reloaded = true));
  }
</script>

<div class="container">
  <div class="flex-area">
    <label for="chck">
      <h3>Hide Youtube Shorts</h3>
    </label>
    <input {checked} on:change={toggleChange} id="chck" type="checkbox" />
    <label for="chck" class="check-trail">
      <span class="check-handler" />
    </label>
  </div>
  {#if !reloaded}
    <div class={checked ? "message" : "message visible"}>
      <span>Reload the page if you don't see shorts. </span>
      <button on:click={reloadPage}>Reload </button>
    </div>
  {/if}
</div>

<style lang="scss">
  $clouds: #ecf0f1;
  $turquoise: #1abc9c;
  $greensea: #16a085;
  $night: #34495e;
  $midnight: #2c3e50;
  $transition: all 0.5s ease;

  label {
    cursor: pointer;
    h3 {
      font-size: 1.5em;
      margin-right: 1em;
    }
  }

  .container {
    min-width: 300px;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    background: $clouds;
    .flex-area {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
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
  .message {
    position: relative;
    font-size: 0.8rem;
    margin-top: 0.3rem;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding-block: 1px;
    button {
      padding: 0.3rem 0.5rem;
      background: none;
      border: 1px solid #999;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.1s;
      &:hover {
        border-color: $greensea;
        color: $greensea;
      }
    }
    &:before {
      content: "";
      position: absolute;
      inset: 0;
      height: 100%;
      width: 100%;
      background: $clouds;
      transform: scaleX(100%);
      transform-origin: right;
      transition: transform 0.3s;
    }
    &.visible {
      &:before {
        transform: scaleX(0);
        transition: transform 1s;
      }
    }
  }
</style>
