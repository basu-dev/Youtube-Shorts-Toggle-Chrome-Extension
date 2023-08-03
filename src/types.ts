interface IMessage<TType extends string, TValue = undefined> {
    type: TType,
    value?: TValue;
}

export type Message = IMessage<'reload'>;

export type MessageType = Message['type'];
export type MessageValueFromType<TType extends MessageType> = Extract<Message, { type: TType; }>['value'];
