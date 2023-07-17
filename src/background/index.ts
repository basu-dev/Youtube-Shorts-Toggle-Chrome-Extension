import { storage } from "../storage";

chrome.runtime.onInstalled.addListener(() => {
    storage.state.set({ count: 1000 });
});
