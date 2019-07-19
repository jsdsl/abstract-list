import { IIterator } from "iter-over";
export declare abstract class AbstractList<E> {
    abstract add(element: E): void;
    addAll(elements: E[]): void;
    abstract get(index: number): E;
    abstract remove(element: E): void;
    abstract size(): number;
    abstract contains(element: E): boolean;
    isEmpty(): boolean;
    abstract clear(): void;
    abstract iterator(): IIterator<E>;
    abstract toArray(): E[];
}
