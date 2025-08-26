function addieren(a, b) {
    return a + b
}

function subtrahieren(a, b) {
    return a - b
}

function multiplizieren(a, b) {
    return a * b
}

function dividieren(a, b) {
    if (b === 0) {
        throw new Error("Division durch Null ist nicht erlaubt!")
    }
    return a / b
}

function dummyfunction() {
    return 0;
}

module.exports = {
    addieren,
    subtrahieren,
    multiplizieren,
    dividieren
}