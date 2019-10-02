# JSDSL - Abstract List
An abstraction of the list data structure.

### [Find @jsdsl/abstract-list on NPM.](https://www.npmjs.com/package/@jsdsl/abstract-list)

## Table of Contents

 - [Installation](#installation)
 - [Basic Usage](#basic-usage)
 - [Documentation](#documentation)
   - [#add](#add)
   - [#addAll](#addall)
   - [#get](#get)
   - [#remove](#remove)
   - [#size](#size)
   - [#contains](#contains)
   - [#isEmpty](#isempty)
   - [#clear](#clear)
   - [#iterator](#iterator)
   - [#toArray](#toarray)
 - [License](#license) 

## Installation
Install from NPM with
```
$ npm install --save @jsdsl/abstract-list
```

## Basic Usage
The abstract class included in this package serves as a standardizing basis for a handful of other packages that implement list and list-like data structures, and is therefore not intended to be used alone.

Please refer to the documentation of the package implementing this package's abstract class for (hopefully) more useful information.

## Documentation

#### `#add`

Adds an element to this list.

**Parameters**:
 - **element** The element to add to this list.

**Returns** Void.

```typescript
public abstract add(element: E): void;
```

---

#### `#addAll`

Adds multiple elements to this list.

**Parameters**:
 - **elements** The elements to add to this list.

**Returns** Void.

```typescript
public addAll(elements: E[]): void { ... }
```

---

#### `#get`

Returns the element at the specified index, or undefined if the index was out-of-bounds.

**Parameters**:
 - **index** The index from which to retrieve an element.

**Returns** The element at the specified index, or undefined if the index was out-of-bounds.

```typescript
public abstract get(index: number): E | undefined;
```

---

#### `#remove`

Removes the specified element from this list.

**Parameters**:
 - **elements** The element to remove from this list.

**Returns** Void.

```typescript
public abstract remove(element: E): void;
```

---

#### `#size`

Returns the number of elements contained in this list.

**Parameters**:
 - _None_

**Returns** The number of elements contained in this list.

```typescript
public abstract size(): number;
```

---

#### `#contains`

Returns true if the provided element is contained in this list.

**Parameters**:
 - **elements** The element to check this list for.

**Returns** true if the provided element is contained in this list.

```typescript
public abstract contains(element: E): boolean;
```

---

#### `#isEmpty`

Returns true if this list contains no elements.

**Parameters**:
 - _None_

**Returns** true if this list contains no elements.

**See** [AbstractList#size](#size)

```typescript
public isEmpty(): boolean { ... }
```

---

#### `#clear`

Removes all elements from this list, rendering the list empty.

**Parameters**:
 - _None_

**Returns** Void.

```typescript
public abstract clear(): void;
```

---

#### `#iterator`

Returns an iterator over the elements of this list.

**Parameters**:
 - _None_

**Returns** An iterator over the elements of this list.

**See** [IIterator](https://github.com/T99/iter-over/blob/master/ts/i-iterator.ts)

```typescript
public abstract iterator(): IIterator<E>;
```

---

#### `#toArray`

Returns this list represented as an array of its elements.

**Parameters**:
 - _None_

**Returns** This list represented as an array of its elements.

```typescript
public abstract toArray(): E[];
```

---

## License
@jsdsl/abstract-list is made available under the GNU General Public License v3.

Copyright (C) 2019 Trevor Sears