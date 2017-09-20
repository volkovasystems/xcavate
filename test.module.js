"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "xcavate",
			"path": "xcavate/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/xcavate.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should/as-function",
			"xcavate": "xcavate"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const xcavate = require( "./xcavate.js" );
//: @end-server

//: @client:
const xcavate = require( "./xcavate.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "xcavate", ( ) => {

	describe( "`xcavate( 'hello', { [ Symbol( 'hello' ) ]: Symbol( 'hello' ) } )`", ( ) => {
		it( "should be equal to Symbol( 'hello' )", ( ) => {
			let symbol = Symbol( "hello" );
			let data = { };
			data[ symbol ] = symbol;

			assert.equal( xcavate( "hello", data ), symbol );

		} );
	} );

	describe( "`xcavate( 1, { [ Symbol( 1 ) ]: Symbol( 1 ) } )`", ( ) => {
		it( "should be equal to Symbol( 1 )", ( ) => {
			let symbol = Symbol( 1 );
			let data = { };
			data[ symbol ] = symbol;

			assert.equal( xcavate( 1, data ), symbol );

		} );
	} );

	describe( "`xcavate( Symbol( 'hello' ), { [ Symbol( 'hello' ) ]: Symbol( 'hello' ) } )`", ( ) => {
		it( "should be equal to Symbol( 'hello' )", ( ) => {
			let symbol = Symbol( "hello" );
			let data = { };
			data[ symbol ] = symbol;

			assert.equal( xcavate( Symbol( "hello" ), data ), symbol );

		} );
	} );

	describe( "`xcavate with string type as symbol parameter and function as entity`", ( ) => {
		it( "should be equal to Symbol.for( 'extensive' )", ( ) => {
			let Hello = function Hello( ){ };
			Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

			assert.equal( xcavate( "extensive", Hello ), Symbol.for( "extensive" ) );

		} );
	} );

	describe( "`xcavate with symbol type as symbol parameter and function as entity`", ( ) => {
		it( "should be equal to Symbol.for( 'extensive' )", ( ) => {
			let Hello = function Hello( ){ };
			Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

			assert.equal( xcavate( Symbol.for( "extensive" ), Hello ), Symbol.for( "extensive" ) );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "xcavate", ( ) => {

	describe( "`xcavate( 'hello', { [ Symbol( 'hello' ) ]: Symbol( 'hello' ) } )`", ( ) => {
		it( "should be equal to Symbol( 'hello' )", ( ) => {
			let symbol = Symbol( "hello" );
			let data = { };
			data[ symbol ] = symbol;

			assert.equal( xcavate( "hello", data ), symbol );

		} );
	} );

	describe( "`xcavate( 1, { [ Symbol( 1 ) ]: Symbol( 1 ) } )`", ( ) => {
		it( "should be equal to Symbol( 1 )", ( ) => {
			let symbol = Symbol( 1 );
			let data = { };
			data[ symbol ] = symbol;

			assert.equal( xcavate( 1, data ), symbol );

		} );
	} );

	describe( "`xcavate( Symbol( 'hello' ), { [ Symbol( 'hello' ) ]: Symbol( 'hello' ) } )`", ( ) => {
		it( "should be equal to Symbol( 'hello' )", ( ) => {
			let symbol = Symbol( "hello" );
			let data = { };
			data[ symbol ] = symbol;

			assert.equal( xcavate( Symbol( "hello" ), data ), symbol );

		} );
	} );

	describe( "`xcavate with string type as symbol parameter and function as entity`", ( ) => {
		it( "should be equal to Symbol.for( 'extensive' )", ( ) => {
			let Hello = function Hello( ){ };
			Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

			assert.equal( xcavate( "extensive", Hello ), Symbol.for( "extensive" ) );

		} );
	} );

	describe( "`xcavate with symbol type as symbol parameter and function as entity`", ( ) => {
		it( "should be equal to Symbol.for( 'extensive' )", ( ) => {
			let Hello = function Hello( ){ };
			Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

			assert.equal( xcavate( Symbol.for( "extensive" ), Hello ), Symbol.for( "extensive" ) );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "xcavate", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`xcavate( 'hello', { [ Symbol( 'hello' ) ]: Symbol( 'hello' ) } )`", ( ) => {
		it( "should be equal to Symbol( 'hello' )", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let symbol = Symbol( "hello" );
					let data = { };
					data[ symbol ] = symbol;
					return xcavate( "hello", data ).toString( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "Symbol(hello)" );

		} );
	} );

	describe( "`xcavate( 1, { [ Symbol( 1 ) ]: Symbol( 1 ) } )`", ( ) => {
		it( "should be equal to Symbol( 1 )", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let symbol = Symbol( 1 );
					let data = { };
					data[ symbol ] = symbol;

					return xcavate( 1, data ).toString( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "Symbol(1)" );

		} );
	} );

	describe( "`xcavate( Symbol( 'hello' ), { [ Symbol( 'hello' ) ]: Symbol( 'hello' ) } )`", ( ) => {
		it( "should be equal to Symbol( 'hello' )", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let symbol = Symbol( "hello" );
					let data = { };
					data[ symbol ] = symbol;

					return xcavate( Symbol( "hello" ), { [ Symbol( "hello" ) ]: Symbol( "hello" ) } ).toString( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "Symbol(hello)" );

		} );
	} );

	describe( "`xcavate with string type as symbol parameter and function as entity`", ( ) => {
		it( "should be equal to Symbol.for( 'extensive' )", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let Hello = function Hello( ){ };
					Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

					return xcavate( "extensive", Hello ).toString( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "Symbol(extensive)" );

		} );
	} );

	describe( "`xcavate with symbol type as symbol parameter and function as entity`", ( ) => {
		it( "should be equal to Symbol.for( 'extensive' )", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let Hello = function Hello( ){ };
					Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

					return xcavate( Symbol.for( "extensive" ), Hello ).toString( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "Symbol(extensive)" );

		} );
	} );

} );

//: @end-bridge
