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

var assert = require("should/as-function");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("xcavate", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`xcavate( 'hello', { [ Symbol( 'hello' ) ]: Symbol( 'hello' ) } )`", function () {
		it("should be equal to Symbol( 'hello' )", function () {
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

			assert.equal(result, "Symbol(hello)");

		});
	});

	describe("`xcavate( 1, { [ Symbol( 1 ) ]: Symbol( 1 ) } )`", function () {
		it("should be equal to Symbol( 1 )", function () {
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

			assert.equal(result, "Symbol(1)");

		});
	});

	describe("`xcavate( Symbol( 'hello' ), { [ Symbol( 'hello' ) ]: Symbol( 'hello' ) } )`", function () {
		it("should be equal to Symbol( 'hello' )", function () {
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

			assert.equal(result, "Symbol(hello)");

		});
	});

	describe("`xcavate with string type as symbol parameter and function as entity`", function () {
		it("should be equal to Symbol.for( 'extensive' )", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Hello = function Hello( ){ };
   					Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );
   
   					return xcavate( "extensive", Hello ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "Symbol(extensive)");

		});
	});

	describe("`xcavate with symbol type as symbol parameter and function as entity`", function () {
		it("should be equal to Symbol.for( 'extensive' )", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Hello = function Hello( ){ };
   					Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );
   
   					return xcavate( Symbol.for( "extensive" ), Hello ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "Symbol(extensive)");

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsU0FBVixFQUFxQixZQUFPOztBQUUzQixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSxvRUFBVixFQUFnRixZQUFPO0FBQ3RGSSxLQUFJLHNDQUFKLEVBQTRDLFlBQU87QUFDbEQ7QUFDSDs7Ozs7Ozs7Ozs7O0FBWUE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixlQUF0Qjs7QUFFQSxHQWxCRDtBQW1CQSxFQXBCRDs7QUFzQkFOLFVBQVUsa0RBQVYsRUFBOEQsWUFBTztBQUNwRUksS0FBSSxnQ0FBSixFQUFzQyxZQUFPO0FBQzVDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUFhQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLFdBQXRCOztBQUVBLEdBbkJEO0FBb0JBLEVBckJEOztBQXVCQU4sVUFBVSw4RUFBVixFQUEwRixZQUFPO0FBQ2hHSSxLQUFJLHNDQUFKLEVBQTRDLFlBQU87QUFDbEQ7QUFDSDs7Ozs7Ozs7Ozs7OztBQWFBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsZUFBdEI7O0FBRUEsR0FuQkQ7QUFvQkEsRUFyQkQ7O0FBdUJBTixVQUFVLHVFQUFWLEVBQW1GLFlBQU87QUFDekZJLEtBQUksOENBQUosRUFBb0QsWUFBTztBQUMxRDtBQUNIOzs7Ozs7Ozs7Ozs7QUFZQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLG1CQUF0Qjs7QUFFQSxHQWxCRDtBQW1CQSxFQXBCRDs7QUFzQkFOLFVBQVUsdUVBQVYsRUFBbUYsWUFBTztBQUN6RkksS0FBSSw4Q0FBSixFQUFvRCxZQUFPO0FBQzFEO0FBQ0g7Ozs7Ozs7Ozs7OztBQVlBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsbUJBQXRCOztBQUVBLEdBbEJEO0FBbUJBLEVBcEJEOztBQXNCQSxDQXBIRDs7QUFzSEEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInhjYXZhdGVcIixcblx0XHRcdFwicGF0aFwiOiBcInhjYXZhdGUvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3hjYXZhdGUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcInhjYXZhdGVcIjogXCJ4Y2F2YXRlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcInhjYXZhdGVcIiwgKCApID0+IHtcblxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYHhjYXZhdGUoICdoZWxsbycsIHsgWyBTeW1ib2woICdoZWxsbycgKSBdOiBTeW1ib2woICdoZWxsbycgKSB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbCggJ2hlbGxvJyApXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IHN5bWJvbCA9IFN5bWJvbCggXCJoZWxsb1wiICk7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cdFx0XHRcdFx0ZGF0YVsgc3ltYm9sIF0gPSBzeW1ib2w7XG5cdFx0XHRcdFx0cmV0dXJuIHhjYXZhdGUoIFwiaGVsbG9cIiwgZGF0YSApLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIlN5bWJvbChoZWxsbylcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHhjYXZhdGUoIDEsIHsgWyBTeW1ib2woIDEgKSBdOiBTeW1ib2woIDEgKSB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbCggMSApXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IHN5bWJvbCA9IFN5bWJvbCggMSApO1xuXHRcdFx0XHRcdGxldCBkYXRhID0geyB9O1xuXHRcdFx0XHRcdGRhdGFbIHN5bWJvbCBdID0gc3ltYm9sO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHhjYXZhdGUoIDEsIGRhdGEgKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJTeW1ib2woMSlcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHhjYXZhdGUoIFN5bWJvbCggJ2hlbGxvJyApLCB7IFsgU3ltYm9sKCAnaGVsbG8nICkgXTogU3ltYm9sKCAnaGVsbG8nICkgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBTeW1ib2woICdoZWxsbycgKVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBzeW1ib2wgPSBTeW1ib2woIFwiaGVsbG9cIiApO1xuXHRcdFx0XHRcdGxldCBkYXRhID0geyB9O1xuXHRcdFx0XHRcdGRhdGFbIHN5bWJvbCBdID0gc3ltYm9sO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHhjYXZhdGUoIFN5bWJvbCggXCJoZWxsb1wiICksIHsgWyBTeW1ib2woIFwiaGVsbG9cIiApIF06IFN5bWJvbCggXCJoZWxsb1wiICkgfSApLnRvU3RyaW5nKCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIlN5bWJvbChoZWxsbylcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHhjYXZhdGUgd2l0aCBzdHJpbmcgdHlwZSBhcyBzeW1ib2wgcGFyYW1ldGVyIGFuZCBmdW5jdGlvbiBhcyBlbnRpdHlgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbC5mb3IoICdleHRlbnNpdmUnIClcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgSGVsbG8gPSBmdW5jdGlvbiBIZWxsbyggKXsgfTtcblx0XHRcdFx0XHRIZWxsb1sgU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApIF0gPSBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICk7XG5cblx0XHRcdFx0XHRyZXR1cm4geGNhdmF0ZSggXCJleHRlbnNpdmVcIiwgSGVsbG8gKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJTeW1ib2woZXh0ZW5zaXZlKVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgeGNhdmF0ZSB3aXRoIHN5bWJvbCB0eXBlIGFzIHN5bWJvbCBwYXJhbWV0ZXIgYW5kIGZ1bmN0aW9uIGFzIGVudGl0eWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sLmZvciggJ2V4dGVuc2l2ZScgKVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBIZWxsbyA9IGZ1bmN0aW9uIEhlbGxvKCApeyB9O1xuXHRcdFx0XHRcdEhlbGxvWyBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICkgXSA9IFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKTtcblxuXHRcdFx0XHRcdHJldHVybiB4Y2F2YXRlKCBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICksIEhlbGxvICkudG9TdHJpbmcoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwiU3ltYm9sKGV4dGVuc2l2ZSlcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtYnJpZGdlXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
