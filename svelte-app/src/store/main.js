import { writable } from 'svelte/store';

const loading = writable(false);

const mainStore = {
  subscribe: loading.subscribe,
  setLoading: flag => {
    loading.set(flag);
  }
};

export default mainStore;
