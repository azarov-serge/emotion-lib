declare class ModalStore {
    isOpen: boolean;
    constructor();
    showToggle(): void;
    setIsOpen(value: boolean): void;
}
export declare const modalStore: ModalStore;
export {};
