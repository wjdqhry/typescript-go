//// [tests/cases/conformance/types/typeParameters/typeParameterLists/typeParameterUsedAsConstraint.ts] ////

//// [typeParameterUsedAsConstraint.ts]
class C<T, U extends T> { }
class C2<T extends U, U> { }
class C3<T extends Date, U extends T> { }
class C4<T extends U, U extends Date> { }
class C5<T extends U, U extends V, V> { }
class C6<T, U extends T, V extends U> { }

interface I<T, U extends T> { }
interface I2<T extends U, U> { }
interface I3<T extends Date, U extends T> { }
interface I4<T extends U, U extends Date> { }
interface I5<T extends U, U extends V, V> { }
interface I6<T, U extends T, V extends U> { }

function f<T, U extends T>() { }
function f2<T extends U, U>() { }
function f3<T extends Date, U extends T>() { }
function f4<T extends U, U extends Date>() { }
function f5<T extends U, U extends V, V>() { }
function f6<T, U extends T, V extends U>() { }

var e = <T, U extends T>() => { }
var e2 = <T extends U, U>() => { }
var e3 = <T extends Date, U extends T>() => { }
var e4 = <T extends U, U extends Date>() => { }
var e5 = <T extends U, U extends V, V>() => { }
var e6 = <T, U extends T, V extends U>() => { }

var a: { <T, U extends T>(): void }
var a2: { <T extends U, U>(): void }
var a3: { <T extends Date, U extends T>(): void }
var a4: { <T extends U, U extends Date>(): void }
var a5: { <T extends U, U extends V, V>(): void }
var a6: { <T, U extends T, V extends U>(): void }


//// [typeParameterUsedAsConstraint.js]
class C {
}
class C2 {
}
class C3 {
}
class C4 {
}
class C5 {
}
class C6 {
}
function f() { }
function f2() { }
function f3() { }
function f4() { }
function f5() { }
function f6() { }
var e = () => { };
var e2 = () => { };
var e3 = () => { };
var e4 = () => { };
var e5 = () => { };
var e6 = () => { };
var a;
var a2;
var a3;
var a4;
var a5;
var a6;
