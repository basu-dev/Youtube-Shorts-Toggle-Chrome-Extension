type IMessage<TType extends string, TValue = undefined> = {
    type: TType,
    value?: TValue;
};
type Message = IMessage<'reload'>;
type MessageType = Message['type'];
type MessageValueFromType<TType extends MessageType> = Extract<Message, { type: TType; }>['value'];

export function sendMessageFromPopup(value: Message, cb?: (response: Message) => void) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, value, cb);
    });
}

export function onMessage<T extends MessageType>(type: T,
    cb: (value: MessageValueFromType<T>, sendResponse: (response: Message) => void, sender?: chrome.runtime.MessageSender) => void) {
    chrome.runtime.onMessage.addListener((data: Message, sender, sendResponse) => {
        if (data.type == type) {
            cb(data.value as any, sendResponse, sender);
        }
    });
}



