declare class MessagesStore {
    private defaultDuration;
    messages: {
        [key: string]: any;
    };
    constructor();
    add(item: any): void;
    close(id: string): void;
}
export declare const messagesStore: MessagesStore;
export {};
