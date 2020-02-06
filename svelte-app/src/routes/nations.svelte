<script context="module">
  export function preload() {
    mainStore.setLoading(true);
    return this.fetch(API_URL + "/ea-nations?filter[order]=name asc")
      .then(res => {
        if (!res.ok) {
          throw new Error("Fetching failed, please try again later!");
        }
        return res.json();
      })
      .then(data => {
        mainStore.setLoading(false);
        nationsStore.setNations(data);
      })
      .catch(err => {
        mainStore.setLoading(false);
        this.error(500, JSON.stringify(err));
      });
  }
</script>

<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import NationItem from "../components/NationItem.svelte";
  import { nationsStore, nationStore } from "../store/nation";
  import mainStore from "../store/main";
  import { API_URL } from "../shared/Consts";

  let loadedNations = [];
  let unsubscribe;

  onMount(() => {
    unsubscribe = nationsStore.subscribe(item => {
      loadedNations = item;
    });
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });

  const itemClickHandler = nation => {
    nationStore.setNation(nation.detail);
  };
</script>

<style>
  .nations {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>

<div class="nations">
  {#each loadedNations as nation}
    <NationItem {nation} on:itemClick={itemClickHandler} />
  {/each}
</div>
