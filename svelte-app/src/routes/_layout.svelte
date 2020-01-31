<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  export let segment;
  import mainStore from "../store/main";
  import { leagueStore } from "../store/league";
  import { clubStore } from "../store/club";
  let isLoading;
  let unsubscribeMain;
  let unsubscribeLeague;
  let unsubscribeClub;
  let selectedLeague;
  let selectedClub;

  onMount(() => {
    unsubscribeMain = mainStore.subscribe(flag => {
      isLoading = flag;
    });
    unsubscribeLeague = leagueStore.subscribe(item => {
      selectedLeague = item;
    });
    unsubscribeClub = clubStore.subscribe(item => {
      selectedClub = item;
    });
  });
  onDestroy(() => {
    if (unsubscribeMain) {
      unsubscribeMain();
    }
    if (unsubscribeLeague) {
      unsubscribeLeague();
    }
    if (unsubscribeClub) {
      unsubscribeClub();
    }
  });
</script>

<style>

</style>

<div id="app">
  <div class="left-menu">
    <div class="logo">
      <img src="assets/images/logo.png" alt="logo" />
    </div>
    <div class="menu">
      <ul>
        <li class={segment === undefined ? 'active' : ''}>
          <a href=".">Positions</a>
        </li>
        <li class={segment === 'leagues' ? 'active' : ''}>
          <a href="leagues">Leagues</a>
        </li>
        <li class={segment === 'clubs' ? 'active' : ''}>
          <a href="clubs">Clubs</a>
        </li>
        <li class={segment === 'nations' ? 'active' : ''}>
          <a href="nations">Nations</a>
        </li>
        <li class={segment === 'players' ? 'active' : ''}>
          <a rel="prefetch" href="players">Players</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="right-container">
    <div class="top-bar">
      {#if selectedLeague}
        <img alt="league" class="filter" src={selectedLeague.imageUrls.light} />
      {/if}
      {#if selectedClub}
        <img
          alt="club"
          class="filter"
          src={selectedClub.imageUrls.light.small} />
      {/if}
      <div class="spacer" />
      <a href="logout">logout</a>
    </div>
    <div class="content">
      <div class="main">
        <slot />
      </div>
    </div>
  </div>

  {#if isLoading}
    <div class="loading">
      <div class="content">Loading...</div>
    </div>
  {/if}
</div>
