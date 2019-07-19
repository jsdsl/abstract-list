"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractList {
    addAll(elements) {
        for (let element of elements)
            this.add(element);
    }
    isEmpty() {
        return (this.size() === 0);
    }
}
exports.AbstractList = AbstractList;
//# sourceMappingURL=abstract-list.js.map