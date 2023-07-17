interface IMessage<TType extends string, TValue> {
    type: TType,
    value: TValue;
}

export type Message =
    IMessage<'test', string> |
    IMessage<'test1', number> |
    IMessage<'test3', { value: number; }>
    ;

export type MessageType = Message['type'];
export type MessageValueFromType<TType extends MessageType> = Extract<Message, { type: TType; }>['value'];
