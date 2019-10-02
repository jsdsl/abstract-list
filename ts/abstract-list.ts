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
 * @version v0.4.0
 * @since v0.1.0
 */
export abstract class AbstractList<E> {
	
	/**
	 * Adds an element to this list.
	 * 
	 * @param element The element to add to this list.
	 */
	public abstract add(element: E): void;
	
	/**
	 * Adds multiple elements to this list.
	 * 
	 * @param elements The elements to add to this list.
	 */
	public addAll(elements: E[]): void {
		
		for (let element of elements) this.add(element);
		
	}
	
	/**
	 * Returns the element at the specified index, or undefined if the index was out-of-bounds.
	 * 
	 * @param index The index from which to retrieve an element.
	 * @return The element at the specified index, or undefined if the index was out-of-bounds.
	 */
	public abstract get(index: number): E | undefined;
	
	/**
	 * Removes the specified element from this list.
	 * 
	 * @param element The element to remove from this list.
	 */
	public abstract remove(element: E): void;
	
	/**
	 * Returns the number of elements contained in this list.
	 * 
	 * @return The number of elements contained in this list.
	 */
	public abstract size(): number;
	
	/**
	 * Returns true if the provided element is contained in this list.
	 * 
	 * @param element The element to check this list for.
	 * @return true if the provided element is contained in this list.
	 */
	public abstract contains(element: E): boolean;
	
	/**
	 * Returns true if this list contains no elements.
	 * 
	 * @return true if this list contains no elements.
	 * @see AbstractList#size
	 */
	public isEmpty(): boolean {
		
		return (this.size() === 0);
		
	}
	
	/**
	 * Removes all elements from this list, rendering the list empty.
	 */
	public abstract clear(): void;
	
	/**
	 * Returns an iterator over the elements of this list.
	 * 
	 * @return An iterator over the elements of this list.
	 * @see IIterator
	 */
	public abstract iterator(): IIterator<E>;
	
	/**
	 * Returns this list represented as an array of its elements.
	 * 
	 * @return This list represented as an array of its elements.
	 */
	public abstract toArray(): E[];
	
}