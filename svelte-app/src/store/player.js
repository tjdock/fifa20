import { writable } from 'svelte/store';

const players = writable([]);
const selectedPlayer = writable(null);

export const playersStore = {
  subscribe: players.subscribe,
  setPlayers: arr => {
    players.set(arr);
  }
};

export const playerStore = {
  subscribe: selectedPlayer.subscribe,
  setPlayer: player => {
    selectedPlayer.set(player);
  }
};
