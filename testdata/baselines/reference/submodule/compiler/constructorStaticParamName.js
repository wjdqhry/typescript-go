//// [tests/cases/compiler/constructorStaticParamName.ts] ////

//// [constructorStaticParamName.ts]
// static as constructor parameter name should only give error if 'use strict'

class test {
    constructor (static) { }
}


//// [constructorStaticParamName.js]
// static as constructor parameter name should only give error if 'use strict'
class test {
    constructor(static) { }
}
