import { onMessage } from "src/message";
import Overlay from "../components/Overlay.svelte";

// Some global styles on the page
// import "./styles.css";

// Some JS on the page

// Some svelte component on the page
new Overlay({ target: document.body });


onMessage('test3', function (value, sendResponse) {
    console.log(value);
    sendResponse({
        type: 'test1',
        value: 5
    });
});

