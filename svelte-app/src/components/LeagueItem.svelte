<script>
  import { createEventDispatcher } from "svelte";

  export let league;
  const dispatch = createEventDispatcher();
</script>

<style>
  .league-item {
    display: flex;
    align-items: center;
    width: 160px;
    height: 95px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 0 10px;
    border-radius: 10px;
    padding: 10px;
    margin: 0 0px 20px 0;
    font-size: 14px;
    position: relative;
  }
  .league-item img {
    width: 40px;
    cursor: pointer;
  }
  .league-item .league-name {
    width: 100%;
    word-break: break-all;
    margin-left: 10px;
    cursor: pointer;
  }
  .league-item .btn-delete {
    position: absolute;
    right: 5px;
    top: 0px;
    width: 10px;
    display: block;
    text-align: center;
  }
</style>

<div class="league-item">
  <img
    src={league.imageUrls.light}
    alt="league"
    on:click={() => dispatch('itemClick', league)} />
  <span class="league-name" on:click={() => dispatch('itemClick', league)}>
    [{league.abbrName}]
    <br />
    {league.name}
  </span>
  <a href="/" class="btn-delete">x</a>
</div>
