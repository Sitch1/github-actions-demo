const { addieren, subtrahieren, multiplizieren, dividieren } = require("./math.js")
test("addierte 2 + 2, ergebnis soll 4 sein", () => {
    expect(addieren(7, 2)).toBe(9)
})

test("addiert 7,2 soll nicht 10 ergeben", () => {
    expect(addieren(7, 2)).not.toBe(10)
})

test("subtrahieren 7,5, ergebnis soll 2 sein", () => {
    expect(subtrahieren(7, 5)).toBe(2)
})

test("multiplizieren 7,5, ergebnis soll 35 sein", () => {
    expect(multiplizieren(7, 5)).toBe(35)
})

test("dividieren 10,2, ergeniss soll 5 sein", () => {
    expect(dividieren(10, 2)).toBe(5)
})

test("dividieren durch 0 schmeißt einen Fehler", () => {
    expect(() => dividieren(5, 0)).toThrow("Division durch Null ist nicht erlaubt!")
})