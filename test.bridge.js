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
              			"assert": "should",
              			"xcavate": "xcavate"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("xcavate", function () {


	var directory = __dirname;
	var testBridge = path.resolve(directory, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("\"xcavate( \"hello\", data )\"", function () {

		describe("\"xcavate( Symbol( \"hello\" ), data \"", function () {
			var symbol = (0, _symbol2.default)("hello");
			var data = {};
			data[symbol] = symbol;

			it("should be equal to Symbol( 'hello' )", function () {

				assert.equal(xcavate(true, true));

			});
			it("should be equal to Symbol( 'hello' )", function () {

				assert.equal(xcavate(true, true));

			});
		});
	});



});

//: @end-bridge






// const assert = require( "assert" );
// const xcavate = require( "./xcavate.js" );

// let symbol = Symbol( "hello" );
// let data = { };
// data[ symbol ] = symbol;

// assert.equal( xcavate( "hello", data ), symbol, "should be equal to Symbol( 'hello' )" );

// assert.equal( xcavate( Symbol( "hello" ), data ), symbol, "should be equal to Symbol( 'hello' )" );

// console.log( "ok" );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJkaXJlY3RvcnkiLCJfX2Rpcm5hbWUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsImJyaWRnZVVSTCIsInN5bWJvbCIsImRhdGEiLCJpdCIsImVxdWFsIiwieGNhdmF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxTQUFWLEVBQXFCLFlBQU87OztBQUczQixLQUFJQyxZQUFZQyxTQUFoQjtBQUNBLEtBQUlDLGFBQWFKLEtBQUtLLE9BQUwsQ0FBY0gsU0FBZCxFQUF5QixhQUF6QixDQUFqQjtBQUNBLEtBQUlJLHdCQUF1QkYsVUFBM0I7O0FBRUFILDRDQUF3QyxZQUFPOztBQUU5Q0Esc0RBQWlELFlBQU87QUFDdkQsT0FBSU0sU0FBUyxzQkFBUSxPQUFSLENBQWI7QUFDQSxPQUFJQyxPQUFPLEVBQVg7QUFDQUEsUUFBTUQsTUFBTixJQUFpQkEsTUFBakI7O0FBRUFFLE1BQUksc0NBQUosRUFBNEMsWUFBTzs7QUFFbkRYLFdBQU9ZLEtBQVAsQ0FBYUMsUUFBVSxJQUFWLEVBQWdCLElBQWhCLENBQWI7O0FBRUMsSUFKRDtBQUtBRixNQUFJLHNDQUFKLEVBQTRDLFlBQU87O0FBRW5EWCxXQUFPWSxLQUFQLENBQWFDLFFBQVUsSUFBVixFQUFnQixJQUFoQixDQUFiOztBQUVDLElBSkQ7QUFLQSxHQWZEO0FBZ0JBLEVBbEJEOzs7O0FBc0JBLENBN0JEOztBQStCQTs7Ozs7OztBQU9BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInhjYXZhdGVcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwieGNhdmF0ZS90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMveGNhdmF0ZS5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcInhjYXZhdGVcIjogXCJ4Y2F2YXRlXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XHJcbi8vOiBAZW5kLWJyaWRnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcblxyXG5kZXNjcmliZSggXCJ4Y2F2YXRlXCIsICggKSA9PiB7XHJcblxyXG5cdFxyXG5cdGxldCBkaXJlY3RvcnkgPSBfX2Rpcm5hbWU7XHJcblx0bGV0IHRlc3RCcmlkZ2UgPSBwYXRoLnJlc29sdmUoIGRpcmVjdG9yeSwgXCJicmlkZ2UuaHRtbFwiICk7XHJcblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgdGVzdEJyaWRnZSB9YDtcclxuXHJcblx0ZGVzY3JpYmUoIGBcInhjYXZhdGUoIFwiaGVsbG9cIiwgZGF0YSApXCJgLCAoICkgPT4ge1xyXG5cclxuXHRcdGRlc2NyaWJlKCBgXCJ4Y2F2YXRlKCBTeW1ib2woIFwiaGVsbG9cIiApLCBkYXRhIFwiYCwgKCApID0+IHtcclxuXHRcdFx0bGV0IHN5bWJvbCA9IFN5bWJvbCggXCJoZWxsb1wiICk7XHJcblx0XHRcdGxldCBkYXRhID0geyB9O1xyXG5cdFx0XHRkYXRhWyBzeW1ib2wgXSA9IHN5bWJvbDtcclxuXHJcblx0XHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBTeW1ib2woICdoZWxsbycgKVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKHhjYXZhdGUgKCB0cnVlLCB0cnVlICkgKTtcclxuXHJcblx0XHRcdH0gKTtcclxuXHRcdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbCggJ2hlbGxvJyApXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoeGNhdmF0ZSAoIHRydWUsIHRydWUgKSApO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdFxyXG59ICk7XHJcblxyXG4vLzogQGVuZC1icmlkZ2VcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG4vLyBjb25zdCB4Y2F2YXRlID0gcmVxdWlyZSggXCIuL3hjYXZhdGUuanNcIiApO1xyXG5cclxuLy8gbGV0IHN5bWJvbCA9IFN5bWJvbCggXCJoZWxsb1wiICk7XHJcbi8vIGxldCBkYXRhID0geyB9O1xyXG4vLyBkYXRhWyBzeW1ib2wgXSA9IHN5bWJvbDtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggeGNhdmF0ZSggXCJoZWxsb1wiLCBkYXRhICksIHN5bWJvbCwgXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sKCAnaGVsbG8nIClcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB4Y2F2YXRlKCBTeW1ib2woIFwiaGVsbG9cIiApLCBkYXRhICksIHN5bWJvbCwgXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sKCAnaGVsbG8nIClcIiApO1xyXG5cclxuLy8gY29uc29sZS5sb2coIFwib2tcIiApO1xyXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
