<script context="module">
  export function preload() {
    mainStore.setLoading(true);
    return this.fetch(API_URL + "/ea-leagues?filter[order]=abbrName asc")
      .then(res => {
        if (!res.ok) {
          throw new Error("Fetching failed, please try again later!");
        }
        return res.json();
      })
      .then(data => {
        mainStore.setLoading(false);
        leaguesStore.setLeagues(data);
      })
      .catch(err => {
        mainStore.setLoading(false);
        this.error(500, JSON.stringify(err));
      });
  }
</script>

<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import LeagueItem from "../components/LeagueItem.svelte";
  import { leaguesStore, leagueStore } from "../store/league";
  import mainStore from "../store/main";
  import { API_URL } from "../shared/Consts";

  let loadedLeagues = [];
  let unsubscribe;

  onMount(() => {
    unsubscribe = leaguesStore.subscribe(item => {
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
