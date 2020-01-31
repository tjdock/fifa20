import { writable } from 'svelte/store';

const clubs = writable([]);
const selectedClub = writable(null);

export const clubsStore = {
  subscribe: clubs.subscribe,
  setClubs: arr => {
    clubs.set(arr);
  }
};

export const clubStore = {
  subscribe: selectedClub.subscribe,
  setClub: club => {
    selectedClub.set(club);
  }
};
