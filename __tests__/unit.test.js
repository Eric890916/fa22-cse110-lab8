// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test("is 3-3-4 phone number", () => {
    expect(functions.isPhoneNumber("858-914-6748")).toBe(true);
});

test("is 3-3-4 phone number", () => {
    expect(functions.isPhoneNumber("408-828-4012")).toBe(true);
});

test("is 3-3-4 phone number", () => {
    expect(functions.isPhoneNumber("0978728915")).toBe(false);
});

test("is 3-3-4 phone number", () => {
    expect(functions.isPhoneNumber("")).toBe(false);
});

test("isEmail", () => {
    expect(functions.isEmail("huko@ucsd.edu")).toBe(true);
});

test("isEmail", () => {
    expect(functions.isEmail("eric890916@gmail.com")).toBe(true);
});

test("isEmail", () => {
    expect(functions.isEmail("")).toBe(false);
});

test("isEmail", () => {
    expect(functions.isEmail("google.com")).toBe(false);
});

test("isStrongPassword", () => {
    expect(functions.isStrongPassword("AbCd1234")).toBe(true);
});

test("isStrongPassword", () => {
    expect(functions.isStrongPassword("KoKo890916")).toBe(true);
});

test("isStrongPassword", () => {
    expect(functions.isStrongPassword("12345")).toBe(false);
});

test("isStrongPassword", () => {
    expect(functions.isStrongPassword("")).toBe(false);
});

test("idDate XX / XX / YYYY", () => {
    expect(functions.isDate("09/16/2000")).toBe(true);
});

test("idDate XX / XX / YYYY", () => {
    expect(functions.isDate("11/23/2000")).toBe(true);
});

test("idDate XX / XX / YYYY", () => {
    expect(functions.isDate("ab/cd/2000")).toBe(false);
});

test("idDate XX / XX / YYYY", () => {
    expect(functions.isDate("@@/XD/2000")).toBe(false);
});

test("isHexColor", () => {
    expect(functions.isHexColor("ABCFFF")).toBe(true);
});

test("isHexColor", () => {
    expect(functions.isHexColor("111111")).toBe(true);
});

test("isHexColor", () => {
    expect(functions.isHexColor("")).toBe(false);
});

test("isHexColor", () => {
    expect(functions.isHexColor("GGGGGG")).toBe(false);
});