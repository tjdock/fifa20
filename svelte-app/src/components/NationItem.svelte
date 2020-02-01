<script>
  import { createEventDispatcher } from "svelte";

  export let nation;
  const dispatch = createEventDispatcher();
</script>

<style>
  .nation-item {
    display: flex;
    align-items: center;
    width: 150px;
    height: 55px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 0 10px;
    border-radius: 10px;
    padding: 10px;
    margin: 0 0px 20px 0;
    font-size: 14px;
    position: relative;
  }
  .nation-item img {
    width: 40px;
    cursor: pointer;
  }
  .nation-item .nation-name {
    width: 100%;
    word-break: break-all;
    margin-left: 10px;
    cursor: pointer;
  }
  .nation-item .btn-delete {
    position: absolute;
    right: 5px;
    top: 0px;
    width: 10px;
    display: block;
    text-align: center;
  }
</style>

<div class="nation-item">
  <img
    src={nation.imageUrls.small}
    alt="nation"
    on:click={() => dispatch('itemClick', nation)} />
  <span class="nation-name" on:click={() => dispatch('itemClick', nation)}>
    {nation.name}
  </span>
  <a href="/" class="btn-delete">x</a>
</div>
