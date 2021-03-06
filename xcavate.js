"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "xcavate",
			"path": "xcavate/xcavate.js",
			"file": "xcavate.js",
			"module": "xcavate",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/xcavate.git",
			"test": "xcavate-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Extract real symbol.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"mtch": "mtch",
			"protype": "protype"
		}
	@end-include
*/

const falzy = require( "falzy" );
const mtch = require( "mtch" );
const protype = require( "protype" );

const SYMBOL_PATTERN = /^Symbol\((.+?)\)$/;

const xcavate = function xcavate( symbol, entity ){
	/*;
		@meta-configuration:
			{
				"symbol:required": [
					"number",
					"string",
					"symbol"
				],
				"entity:required": [
					"function",
					"object"
				]
			}
		@end-meta-configuration
	*/

	if( falzy( symbol ) || !protype( symbol, NUMBER + STRING + SYMBOL ) ){
		throw new Error( "invalid symbol" );
	}

	if( falzy( entity ) || !protype( entity, FUNCTION + OBJECT ) ){
		throw new Error( "invalid entity" );
	}

	if( typeof symbol != SYMBOL ){
		symbol = Symbol( symbol );
	}

	let string = mtch( symbol.toString( ), SYMBOL_PATTERN, 1 );

	return Object.getOwnPropertySymbols( entity ).reduce( ( symbol, property ) => {
		if( mtch( property.toString( ), SYMBOL_PATTERN, 1 ) == string ){
			return property;
		}

		return symbol;
	}, symbol );
};

module.exports = xcavate;
