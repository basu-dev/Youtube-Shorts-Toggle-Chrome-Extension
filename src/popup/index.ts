import { sendMessageFromPopup } from "src/message";
import Options from "../components/Options.svelte";

const target = document.getElementById("app");

function render() {
    new Options({ target });

    sendMessageFromPopup({
        type: 'test3',
        value: { value: 23 }
    }, (message) => {
        console.log(message.type);
    });
}

document.addEventListener("DOMContentLoaded", render);
