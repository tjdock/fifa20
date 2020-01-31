import { writable } from 'svelte/store';
import { clubStore } from './club';

const leagues = writable([]);
const selectedLeague = writable(null);

export const leaguesStore = {
  subscribe: leagues.subscribe,
  setLeagues: arr => {
    leagues.set(arr);
  }
};

export const leagueStore = {
  subscribe: selectedLeague.subscribe,
  setLeague: league => {
    selectedLeague.set(league);
    //选择联赛的时候，要重新把俱乐部清空
    clubStore.setClub(null);
  }
};
