
import { writable } from 'svelte/store';

type IStorage = {
    shortsVisible: boolean;
};

const defaultStorage: IStorage = {
    shortsVisible: true,
};

const _state = writable(defaultStorage);

async function loadState() {
    let state = await (chrome.storage.sync.get(defaultStorage) as Promise<IStorage>);
    _state.set(state);
}

async function setState(partialState: Partial<IStorage>) {
    let state = await (chrome.storage.sync.get(defaultStorage) as Promise<IStorage>);
    return chrome.storage.sync.set({ ...state, ...partialState });
}

loadState();
chrome.storage.sync.onChanged.addListener(_ => loadState());

export const storage = {
    state: _state,
    set: setState,
};


