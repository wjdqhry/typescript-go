//// [tests/cases/conformance/types/union/discriminatedUnionTypes2.ts] ////

//// [discriminatedUnionTypes2.ts]
function f10(x : { kind: false, a: string } | { kind: true, b: string } | { kind: string, c: string }) {
    if (x.kind === false) {
        x.a;
    }
    else if (x.kind === true) {
        x.b;
    }
    else {
        x.c;
    }
}

function f11(x : { kind: false, a: string } | { kind: true, b: string } | { kind: string, c: string }) {
    switch (x.kind) {
        case false:
            x.a;
            break;
        case true:
            x.b;
            break;
        default:
            x.c;
    }
}

function f13(x: { a: null; b: string } | { a: string, c: number }) {
    x = { a: null, b: "foo", c: 4};  // Error
}

function f14<T>(x: { a: 0; b: string } | { a: T, c: number }) {
    if (x.a === 0) {
        x.b;  // Error
    }
}

type Result<T> = { error?: undefined, value: T } | { error: Error };

function f15(x: Result<number>) {
    if (!x.error) {
        x.value;
    }
    else {
        x.error.message;
    }
}

f15({ value: 10 });
f15({ error: new Error("boom") });

// Repro from #24193

interface WithError {
    error: Error
    data: null
}

interface WithoutError<Data> {
    error: null
    data: Data
}

type DataCarrier<Data> = WithError | WithoutError<Data>

function f20<Data>(carrier: DataCarrier<Data>) {
    if (carrier.error === null) {
        const error: null = carrier.error
        const data: Data = carrier.data
    } else {
        const error: Error = carrier.error
        const data: null = carrier.data
    }
}

// Repro from #28935

type Foo = { tag: true, x: number } | { tag: false, y: number } | { [x: string]: string };

function f30(foo: Foo) {
    if (foo.tag) {
        foo;
    }
    else {
        foo;
    }
}

function f31(foo: Foo) {
    if (foo.tag === true) {
        foo;
    }
    else {
        foo;
    }
}

// Repro from #33448

type a = {
    type: 'a',
    data: string
}
type b = {
    type: 'b',
    name: string
}
type c = {
    type: 'c',
    other: string
}

type abc = a | b | c;

function f(problem: abc & (b | c)) {
    if (problem.type === 'b') {
        problem.name;
    }
    else {
        problem.other;
    }
}

type RuntimeValue =
    | { type: 'number', value: number }
    | { type: 'string', value: string }
    | { type: 'boolean', value: boolean };

function foo1(x: RuntimeValue & { type: 'number' }) {
    if (x.type === 'number') {
        x.value;  // number
    }
    else {
        x.value;  // number
    }
}

function foo2(x: RuntimeValue & ({ type: 'number' } | { type: 'string' })) {
    if (x.type === 'number') {
        x.value;  // number
    }
    else {
        x.value;  // string
    }
}


//// [discriminatedUnionTypes2.js]
function f10(x) {
    if (x.kind === false) {
        x.a;
    }
    else if (x.kind === true) {
        x.b;
    }
    else {
        x.c;
    }
}
function f11(x) {
    switch (x.kind) {
        case false:
            x.a;
            break;
        case true:
            x.b;
            break;
        default:
            x.c;
    }
}
function f13(x) {
    x = { a: null, b: "foo", c: 4 }; // Error
}
function f14(x) {
    if (x.a === 0) {
        x.b; // Error
    }
}
function f15(x) {
    if (!x.error) {
        x.value;
    }
    else {
        x.error.message;
    }
}
f15({ value: 10 });
f15({ error: new Error("boom") });
function f20(carrier) {
    if (carrier.error === null) {
        const error = carrier.error;
        const data = carrier.data;
    }
    else {
        const error = carrier.error;
        const data = carrier.data;
    }
}
function f30(foo) {
    if (foo.tag) {
        foo;
    }
    else {
        foo;
    }
}
function f31(foo) {
    if (foo.tag === true) {
        foo;
    }
    else {
        foo;
    }
}
function f(problem) {
    if (problem.type === 'b') {
        problem.name;
    }
    else {
        problem.other;
    }
}
function foo1(x) {
    if (x.type === 'number') {
        x.value; // number
    }
    else {
        x.value; // number
    }
}
function foo2(x) {
    if (x.type === 'number') {
        x.value; // number
    }
    else {
        x.value; // string
    }
}
