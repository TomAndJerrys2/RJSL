// Hash Table Implementation

const KVPairs = function() {
    this.keys = [];
    this.values = [];
}

KVPairs.prototype.set = function(key, val) {
    this.keys.push(key);
    this.values.push(val);
}

KVPairs.prototype.get = function(getkey) {
    for(let i = 0; i < this.keys.length; i++) {
        let key = this.keys[i];

        if(key === getkey) {
            return this.values[i];
        }
    }
}

export const HashTable = function() {
    this.indexingCount = 10000;
    this.slots = []; // an array to store the indexes in the hash table

    for(let i = 0; i < this.indexingCount; i++) {
        this.slots.push(new KVPairs);
    }
}

// an example hash function just to remind myself for now
HashTable.prototype.hash = function(key) {
    let hash = 0;

    if(key.length == 0) return hash;

    for(let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i) * i;
        hash = hash & hash; // converts to a 32bit Int
    }

    return Math.abs(hash);
}

// find the index in the hash table
HashTable.prototype.getSlotIndex = function(key) {
    return this.hash(key) % this.indexingCount;
}

// returns the contents of a slot in the hash table
HashTable.prototype.getSlot = function(key) {
    return this.slots[this.getSlotIndex(key)];
}

// Set and Get
HashTable.prototype.set = function(key, value) {
    this.getSlot(key).set(key, value);
}

HashTable.prototype.get = function(key) {
    return this.getSlot(key).get(key);
}