<script>
  import { createEventDispatcher } from "svelte";

  export let club;
  const dispatch = createEventDispatcher();
</script>

<style>
  .club-item {
    display: flex;
    align-items: center;
    width: 250px;
    height: 55px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 0 10px;
    border-radius: 10px;
    padding: 10px;
    margin: 0 0px 20px 0;
    font-size: 14px;
    position: relative;
  }
  .club-item img {
    width: 40px;
    cursor: pointer;
  }
  .club-item .club-name {
    width: 100%;
    word-break: break-all;
    margin-left: 10px;
    cursor: pointer;
  }
  .club-item .btn-delete {
    position: absolute;
    right: 5px;
    top: 0px;
    width: 10px;
    display: block;
    text-align: center;
  }
</style>

<div class="club-item">
  <img
    src={club.imageUrls.light.small}
    alt="club"
    on:click={() => dispatch('itemClick', club)} />
  <span class="club-name" on:click={() => dispatch('itemClick', club)}>
    {club.name}
  </span>
  <a href="/" class="btn-delete">x</a>
</div>
