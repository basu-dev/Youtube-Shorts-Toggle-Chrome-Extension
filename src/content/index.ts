import { storage } from "src/storage";

const styleID = 'youtube-shorts-toggle-style';
const youtubeShortsSectionSelector = '[is-shorts],ytd-reel-shelf-renderer';
const youtubeShortsSidebarButtonSelector = "#endpoint[title='Shorts']";

function toggleShorts(hide: boolean) {
    if (!hide) {
        let addedStyle = document.getElementById(styleID);
        if (addedStyle) addedStyle.remove();
        return;
    }

    const styleElement = document.createElement('style');
    styleElement.id = styleID;
    styleElement.innerHTML = `${youtubeShortsSectionSelector},${youtubeShortsSidebarButtonSelector} { display: none !important; }`;
    document.head.appendChild(styleElement);
}

storage.state.subscribe(state => toggleShorts(state.shortsVisible))

