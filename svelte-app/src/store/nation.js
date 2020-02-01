import { writable } from 'svelte/store';

const nations = writable([]);
const selectedNation = writable(null);

export const nationsStore = {
  subscribe: nations.subscribe,
  setNations: arr => {
    nations.set(arr);
  }
};

export const nationStore = {
  subscribe: selectedNation.subscribe,
  setNation: nation => {
    selectedNation.set(nation);
  }
};
