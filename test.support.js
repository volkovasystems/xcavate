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



//: @client:
var xcavate = require("./xcavate.support.js");
//: @end-client






//: @client: 

describe("xcavate", function () {

	describe("\"xcavate( \"hello\", data )\"", function () {

		describe("\"xcavate( Symbol( \"hello\" ), data \"", function () {
			var symbol = (0, _symbol2.default)("hello");
			var data = {};
			data[symbol] = symbol;

			it("should be equal to Symbol( 'hello' )", function () {

				assert.equal(xcavate("hello", data), symbol);

			});
			it("should be equal to Symbol( 'hello' )", function () {

				assert.equal(xcavate((0, _symbol2.default)("hello"), data), symbol);

			});
		});
	});
});

//: @end-client









// const assert = require( "assert" );
// const xcavate = require( "./xcavate.js" );

// let symbol = Symbol( "hello" );
// let data = { };
// data[ symbol ] = symbol;

// assert.equal( xcavate( "hello", data ), symbol, "should be equal to Symbol( 'hello' )" );

// assert.equal( xcavate( Symbol( "hello" ), data ), symbol, "should be equal to Symbol( 'hello' )" );

// console.log( "ok" );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwieGNhdmF0ZSIsImRlc2NyaWJlIiwic3ltYm9sIiwiZGF0YSIsIml0IiwiZXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLHNCQUFULENBQWhCO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxTQUFWLEVBQXFCLFlBQU87O0FBRTNCQSw0Q0FBd0MsWUFBTzs7QUFFOUNBLHNEQUFpRCxZQUFPO0FBQ3ZELE9BQUlDLFNBQVMsc0JBQVEsT0FBUixDQUFiO0FBQ0EsT0FBSUMsT0FBTyxFQUFYO0FBQ0FBLFFBQU1ELE1BQU4sSUFBaUJBLE1BQWpCOztBQUVBRSxNQUFJLHNDQUFKLEVBQTRDLFlBQU87O0FBRW5ETixXQUFPTyxLQUFQLENBQWNMLFFBQVMsT0FBVCxFQUFrQkcsSUFBbEIsQ0FBZCxFQUF3Q0QsTUFBeEM7O0FBRUMsSUFKRDtBQUtBRSxNQUFJLHNDQUFKLEVBQTRDLFlBQU87O0FBRW5ETixXQUFPTyxLQUFQLENBQWNMLFFBQVMsc0JBQVEsT0FBUixDQUFULEVBQTRCRyxJQUE1QixDQUFkLEVBQWtERCxNQUFsRDs7QUFFQyxJQUpEO0FBS0EsR0FmRDtBQWdCQSxFQWxCRDtBQW1CQSxDQXJCRDs7QUF1QkE7Ozs7Ozs7Ozs7QUFVQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwieGNhdmF0ZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJ4Y2F2YXRlL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy94Y2F2YXRlLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwieGNhdmF0ZVwiOiBcInhjYXZhdGVcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDpcclxuY29uc3QgeGNhdmF0ZSA9IHJlcXVpcmUoIFwiLi94Y2F2YXRlLnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6IFxyXG5cclxuZGVzY3JpYmUoIFwieGNhdmF0ZVwiLCAoICkgPT4ge1xyXG5cdFxyXG5cdGRlc2NyaWJlKCBgXCJ4Y2F2YXRlKCBcImhlbGxvXCIsIGRhdGEgKVwiYCwgKCApID0+IHtcclxuXHJcblx0XHRkZXNjcmliZSggYFwieGNhdmF0ZSggU3ltYm9sKCBcImhlbGxvXCIgKSwgZGF0YSBcImAsICggKSA9PiB7XHJcblx0XHRcdGxldCBzeW1ib2wgPSBTeW1ib2woIFwiaGVsbG9cIiApO1xyXG5cdFx0XHRsZXQgZGF0YSA9IHsgfTtcclxuXHRcdFx0ZGF0YVsgc3ltYm9sIF0gPSBzeW1ib2w7XHJcblxyXG5cdFx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sKCAnaGVsbG8nIClcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggeGNhdmF0ZSggXCJoZWxsb1wiLCBkYXRhICksIHN5bWJvbCk7XHJcblxyXG5cdFx0XHR9ICk7XHJcblx0XHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBTeW1ib2woICdoZWxsbycgKVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB4Y2F2YXRlKCBTeW1ib2woIFwiaGVsbG9cIiApLCBkYXRhICksIHN5bWJvbCApO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxufSApO1xyXG5cclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwiYXNzZXJ0XCIgKTtcclxuLy8gY29uc3QgeGNhdmF0ZSA9IHJlcXVpcmUoIFwiLi94Y2F2YXRlLmpzXCIgKTtcclxuXHJcbi8vIGxldCBzeW1ib2wgPSBTeW1ib2woIFwiaGVsbG9cIiApO1xyXG4vLyBsZXQgZGF0YSA9IHsgfTtcclxuLy8gZGF0YVsgc3ltYm9sIF0gPSBzeW1ib2w7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHhjYXZhdGUoIFwiaGVsbG9cIiwgZGF0YSApLCBzeW1ib2wsIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbCggJ2hlbGxvJyApXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggeGNhdmF0ZSggU3ltYm9sKCBcImhlbGxvXCIgKSwgZGF0YSApLCBzeW1ib2wsIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbCggJ2hlbGxvJyApXCIgKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKCBcIm9rXCIgKTtcclxuIl19
//# sourceMappingURL=test.support.js.map
