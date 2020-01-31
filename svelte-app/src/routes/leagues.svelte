<script context="module">
  export function preload() {
    mainStore.setLoading(true);
    return this.fetch(
      "http://localhost:1234/ea-leagues?filter[order]=abbrName asc"
    )
      .then(res => {
        if (!res.ok) {
          throw new Error("Fetching failed, please try again later!");
        }
        return res.json();
      })
      .then(data => {
        mainStore.setLoading(false);
        leagueStore.setLeagues(data);
      })
      .catch(err => {
        this.error(500, JSON.stringify(err));
      });
  }
</script>

<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import LeagueItem from "../components/LeagueItem.svelte";
  import leagueStore from "../store/league";
  import mainStore from "../store/main";

  let loadedLeagues = [];
  let unsubscribe;

  onMount(() => {
    unsubscribe = leagueStore.subscribe[0](item => {
      loadedLeagues = item;
    });
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });

  const itemClickHandler = league => {
    leagueStore.setLeague(league.detail);
  };
</script>

<style>
  .leagues {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>

<div class="leagues">

  {#each loadedLeagues as league}
    <LeagueItem {league} on:itemClick={itemClickHandler} />
  {/each}
</div>
