<script context="module">
  export function preload() {
    let selectedLeague = get(leagueStore);
    if (selectedLeague) {
      mainStore.setLoading(true);
      return this.fetch(
        `${API_URL}/ea-clubs?filter[where][leagueId]=${selectedLeague.id}&filter[order]=name asc`
      )
        .then(res => {
          if (!res.ok) {
            throw new Error("Fetching failed, please try again later!");
          }
          return res.json();
        })
        .then(data => {
          mainStore.setLoading(false);
          clubsStore.setClubs(data);
        })
        .catch(err => {
          this.error(500, JSON.stringify(err));
        });
    }
  }
</script>

<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import ClubItem from "../components/ClubItem.svelte";

  import { get } from "svelte/store";
  import mainStore from "../store/main";
  import { clubStore, clubsStore } from "../store/club";
  import { leagueStore } from "../store/league";

  import { API_URL } from "../shared/Consts";

  let loadedClubs = [];
  let unsubscribe;

  onMount(() => {
    unsubscribe = clubsStore.subscribe(item => {
      loadedClubs = item;
    });
  });
  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
  const itemClickHandler = club => {
    clubStore.setClub(club.detail);
  };
</script>

<style>
  .clubs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>

<div class="clubs">
  {#if loadedClubs.length > 0}
    {#each loadedClubs as club}
      <ClubItem {club} on:itemClick={itemClickHandler} />
    {/each}
  {:else}
    <p>Please Select a League</p>
  {/if}
</div>
