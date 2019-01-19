interface KeyPair {
    key: number;
    value: string;
}

// let key1: KeyPair = {key:1, value: "codereading"}; // OK
// let key2: KeyPair = {key:2, val: "kang"}; // Compile Error
// let key3: KeyPair = {key:3, value:100}; // Compile Error

interface KeyValueProcessor {
    (key: number, value: string) : void;
};

function addKeyValue(key:number, value: string): void {
    console.log(`addKeyValue: key = ${key}, value = ${value}`)
}

function updatedKeyValue(key: number, value: string): void {
    console.log(`updatedKeyValue: key = ${key}, value = ${value}`)
}

let keyPrint: KeyValueProcessor = addKeyValue;
keyPrint(1, "codereading"); // addKeyValue: key = 1, value = codereading

keyPrint = updatedKeyValue;

keyPrint(2, "kang"); // updatedKeyValue: key = 2, value = kang