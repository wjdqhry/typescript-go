//// [tests/cases/compiler/collisionRestParameterFunctionExpressions.ts] ////

//// [collisionRestParameterFunctionExpressions.ts]
function foo() {
    function f1(_i: number, ...restParameters) { //_i is error
        var _i = 10; // no error
    }
    function f1NoError(_i: number) { // no error
        var _i = 10; // no error
    }
    function f3(...restParameters) {
        var _i = 10; // no error
    }
    function f3NoError() {
        var _i = 10; // no error
    }

    function f4(_i: number, ...rest); // no codegen no error
    function f4(_i: string, ...rest); // no codegen no error
    function f4(_i: any, ...rest) { // error
    }

    function f4NoError(_i: number); // no error
    function f4NoError(_i: string); // no error
    function f4NoError(_i: any) { // no error
    }
}

//// [collisionRestParameterFunctionExpressions.js]
function foo() {
    function f1(_i, ...restParameters) {
        var _i = 10; // no error
    }
    function f1NoError(_i) {
        var _i = 10; // no error
    }
    function f3(...restParameters) {
        var _i = 10; // no error
    }
    function f3NoError() {
        var _i = 10; // no error
    }
    function f4(_i, ...rest) {
    }
    function f4NoError(_i) {
    }
}
