import { onMessage } from "src/message";
import { storage } from "src/storage";

const styleID = 'youtube-shorts-toggle-style';
const youtubeShortsSectionSelector = '[is-shorts],ytd-reel-shelf-renderer';
const youtubeShortsSidebarButtonSelector = "#endpoint[title='Shorts']";

function removeStyles() {
    let addedStyle = document.getElementById(styleID);
    if (addedStyle) addedStyle.remove();
    return;
}

function addStyles() {
    const styleElement = document.createElement('style');
    styleElement.id = styleID;
    styleElement.innerHTML = `${youtubeShortsSectionSelector},${youtubeShortsSidebarButtonSelector} { display: none !important; }`;
    document.head.appendChild(styleElement);
}

function checkForCurrenShortsActiveAndRemove() {
    let isShortsActive = location.href.includes('/shorts/');
    if (isShortsActive) history.back();
}

function toggleShorts(hide: boolean) {
    if (!hide) return removeStyles();
    addStyles();
    checkForCurrenShortsActiveAndRemove();
}

onMessage('reload', _ => window.location.reload());

storage.state.subscribe(state => toggleShorts(state.shortsVisible))

