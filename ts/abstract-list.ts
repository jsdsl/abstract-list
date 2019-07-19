/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:57 PM -- July 18th, 2019.
 *	Project: @jsdsl/abstract-list
 */

import { IIterator } from "iter-over";

/**
 * An abstraction of the list data structure.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class AbstractList<E> {
	
	public abstract add(element: E): void;
	
	public addAll(elements: E[]): void {
		
		for (let element of elements) this.add(element);
		
	}
	
	public abstract get(index: number): E;
	
	public abstract remove(element: E): void;
	
	public abstract size(): number;
	
	public abstract contains(element: E): boolean;
	
	public isEmpty(): boolean {
		
		return (this.size() === 0);
		
	}
	
	public abstract clear(): void;
	
	public abstract iterator(): IIterator<E>;
	
	public abstract toArray(): E[];
	
}