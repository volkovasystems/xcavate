
const assert = require( "assert" );
const xcavate = require( "./xcavate.js" );

let symbol = Symbol( "hello" );
let data = { };
data[ symbol ] = symbol;

assert.equal( xcavate( "hello", data ), symbol, "should be equal to Symbol( 'hello' )" );

assert.equal( xcavate( Symbol( "hello" ), data ), symbol, "should be equal to Symbol( 'hello' )" );

console.log( "ok" );
