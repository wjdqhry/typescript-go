//// [tests/cases/compiler/unusedImports15.ts] ////

//// [foo.tsx]
import Element = require("react");

export const FooComponent = <div></div>

//// [index.d.ts]
export = React;
export as namespace React;

declare namespace React {
    function createClass<P, S>(spec);
}
declare global {
    namespace JSX {
    }
}




//// [foo.jsx]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooComponent = void 0;
exports.FooComponent = <div></div>;
