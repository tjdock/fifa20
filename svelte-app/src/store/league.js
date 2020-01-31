import { writable } from 'svelte/store';

const leagues = writable([]);
const selectedLeague = writable(null);

const leagueStore = {
  subscribe: [leagues.subscribe, selectedLeague.subscribe],
  setLeagues: arr => {
    leagues.set(arr);
  },
  setLeague: league => {
    selectedLeague.set(league);
  }
};

export default leagueStore;
