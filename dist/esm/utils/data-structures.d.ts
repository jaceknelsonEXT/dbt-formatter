import { Node } from '@types';
export declare class LinkedList<T> {
    private readonly EMPTY_NODE;
    private head;
    private tail;
    getHead: () => Node<T>;
    getTail: () => Node<T>;
    insert: (value: T) => LinkedList<T>;
    append: (value: T) => LinkedList<T>;
    fromArray: (values: T[]) => LinkedList<T>;
    toArray: () => T[];
    size: () => number;
    isEmpty: () => boolean;
    items(): Generator<Node<T>, void, unknown>;
    iterate: (accept: (accept: T) => void) => void;
    private forgeNode;
    private appendToTheEndOfTheList;
}
