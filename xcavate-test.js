
const assert = require( "assert" );
const xcavate = require( "./xcavate.js" );

let symbol = Symbol( "hello" );
let data = { };
data[ symbol ] = symbol;

assert.equal( xcavate( "hello", data ), symbol, "should be equal" );

assert.equal( xcavate( Symbol( "hello" ), data ), symbol, "should be equal" );

console.log( "ok" );
