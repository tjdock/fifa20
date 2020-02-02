<script context="module">
  export function preload() {
    let selectedLeague = get(leagueStore);
    let selectedClub = get(clubStore);
    let selectedNation = get(nationStore);
    if (selectedLeague && selectedClub) {
      mainStore.setLoading(true);
      let url = `${API_URL}/ea-players?filter[where][league.id]=${selectedLeague.id}&filter[where][club.id]=${selectedClub.id}&filter[order]=name asc`;
      if (selectedNation) {
        url += `&filter[where][nation.id]=${selectedNation.id}`;
      }
      return this.fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error("Fetching failed, please try again later!");
          }
          return res.json();
        })
        .then(data => {
          mainStore.setLoading(false);
          playersStore.setPlayers(data);
        })
        .catch(err => {
          mainStore.setLoading(false);
          this.error(500, JSON.stringify(err));
        });
    }
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import PlayerItem from "../../components/PlayerItem.svelte";

  import { get } from "svelte/store";
  import mainStore from "../../store/main";
  import { clubStore, clubsStore } from "../../store/club";
  import { leagueStore } from "../../store/league";
  import { nationStore } from "../../store/nation";
  import { playersStore, playerStore } from "../../store/player";

  import { API_URL } from "../../shared/Consts";

  let loadedPlayers = [];
  let unsubscribe;
  let sorting = "asc";
  let sortCol = "name";
  let attrSortCol = null;
  let attrSorting = "asc";

  onMount(() => {
    unsubscribe = playersStore.subscribe(item => {
      loadedPlayers = item;
    });
  });
  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
  const itemClickHandler = player => {
    goto("/players/" + player.detail.id);
  };
  $: getColStatus = name => {
    if (name === sortCol) {
      return sorting;
    }
  };
  $: getAttrColStatus = name => {
    if (name === attrSortCol) {
      return attrSorting;
    }
  };
  const sortAttr = (index, name) => {
    if (name === attrSortCol) {
      if (attrSorting === "desc") {
        attrSorting = "asc";
      } else {
        attrSorting = "desc";
      }
    } else {
      attrSortCol = name;
      attrSorting = "asc";
    }

    const updatedPlayers = [...loadedPlayers];
    updatedPlayers.sort((a, b) => {
      let diff = a.attributes[index].value - b.attributes[index].value;
      return attrSorting === "asc" ? diff : -diff;
    });

    loadedPlayers = updatedPlayers;
  };

  const thClickHandler = name => {
    if (name === sortCol) {
      sorting === "desc" ? (sorting = "asc") : (sorting = "desc");
    } else {
      sortCol = name;
      sorting = "asc";
    }

    loadData();
  };
  const loadData = () => {
    let selectedLeague = get(leagueStore);
    let selectedClub = get(clubStore);
    let selectedNation = get(nationStore);
    mainStore.setLoading(true);
    let url = `${API_URL}/ea-players?filter[where][league.id]=${selectedLeague.id}&filter[where][club.id]=${selectedClub.id}&filter[order]=${sortCol} ${sorting}`;
    if (selectedNation) {
      url += `&filter[where][nation.id]=${selectedNation.id}`;
    }
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Fetching failed, please try again later!");
        }
        return res.json();
      })
      .then(data => {
        mainStore.setLoading(false);
        playersStore.setPlayers(data);
      })
      .catch(err => {
        mainStore.setLoading(false);
        console.error(500, JSON.stringify(err));
      });
  };
</script>

<style>
  .table {
    text-align: left;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    font-size: 14px;
  }
  tr {
    border-bottom: 1px solid #ccc;
  }
  .fixed-width {
    /* width: 50px; */
    text-align: center;
  }
  th {
    position: relative;
    cursor: pointer;
  }
  th.asc::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    border-bottom: 4px solid black;
    position: absolute;
    top: 8px;
    margin-left: 5px;
  }
  th.desc::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    border-top: 4px solid black;
    position: absolute;
    top: 8px;
    margin-left: 5px;
  }
</style>

{#if loadedPlayers.length > 0}
  <table class="table">
    <thead>
      <tr>
        <th class="fixed-width" />
        <th
          class={getColStatus('name')}
          on:click={() => thClickHandler('name')}>
          Name
        </th>
        <th
          class="fixed-width {getColStatus('rating')}"
          on:click={() => thClickHandler('rating')}>
          RAT
        </th>
        <th
          class="fixed-width {getColStatus('position')}"
          on:click={() => thClickHandler('position')}>
          POS
        </th>
        <th
          class="fixed-width {getAttrColStatus('pac')}"
          on:click={() => sortAttr(0, 'pac')}>
          PAC
        </th>
        <th
          class="fixed-width {getAttrColStatus('sho')}"
          on:click={() => sortAttr(1, 'sho')}>
          SHO
        </th>
        <th
          class="fixed-width {getAttrColStatus('pas')}"
          on:click={() => sortAttr(2, 'pas')}>
          PAS
        </th>
        <th
          class="fixed-width {getAttrColStatus('dri')}"
          on:click={() => sortAttr(3, 'dri')}>
          DRI
        </th>
        <th
          class="fixed-width {getAttrColStatus('def')}"
          on:click={() => sortAttr(4, 'def')}>
          DEF
        </th>
        <th
          class="fixed-width {getAttrColStatus('phy')}"
          on:click={() => sortAttr(5, 'phy')}>
          PHY
        </th>
        <th
          class="fixed-width {getColStatus('skillMoves')}"
          on:click={() => thClickHandler('skillMoves')}>
          SKI
        </th>
        <th
          class="fixed-width {getColStatus('weakFoot')}"
          on:click={() => thClickHandler('weakFoot')}>
          WF
        </th>
        <th
          class="fixed-width {getColStatus('foot')}"
          on:click={() => thClickHandler('foot')}>
          FOOT
        </th>
        <th
          class="fixed-width {getColStatus('height')}"
          on:click={() => thClickHandler('height')}>
          HEIGHT
        </th>
        <th
          class="fixed-width {getColStatus('weight')}"
          on:click={() => thClickHandler('weight')}>
          WEIGHT
        </th>
        <th
          class="fixed-width {getColStatus('age')}"
          on:click={() => thClickHandler('age')}>
          AGE
        </th>
      </tr>
    </thead>
    <tbody>

      {#each loadedPlayers as player}
        <PlayerItem {player} on:itemClick={itemClickHandler} />
      {/each}

    </tbody>
  </table>
{:else}
  <p>Please elect a league and a club</p>
{/if}
