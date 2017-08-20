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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwieGNhdmF0ZSIsImRlc2NyaWJlIiwic3ltYm9sIiwiZGF0YSIsIml0IiwiZXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLHNCQUFULENBQWhCO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxTQUFWLEVBQXFCLFlBQU87O0FBRTNCQSw0Q0FBd0MsWUFBTzs7QUFFOUNBLHNEQUFpRCxZQUFPO0FBQ3ZELE9BQUlDLFNBQVMsc0JBQVEsT0FBUixDQUFiO0FBQ0EsT0FBSUMsT0FBTyxFQUFYO0FBQ0FBLFFBQU1ELE1BQU4sSUFBaUJBLE1BQWpCOztBQUVBRSxNQUFJLHNDQUFKLEVBQTRDLFlBQU87O0FBRW5ETixXQUFPTyxLQUFQLENBQWNMLFFBQVMsT0FBVCxFQUFrQkcsSUFBbEIsQ0FBZCxFQUF3Q0QsTUFBeEM7O0FBRUMsSUFKRDtBQUtBRSxNQUFJLHNDQUFKLEVBQTRDLFlBQU87O0FBRW5ETixXQUFPTyxLQUFQLENBQWNMLFFBQVMsc0JBQVEsT0FBUixDQUFULEVBQTRCRyxJQUE1QixDQUFkLEVBQWtERCxNQUFsRDs7QUFFQyxJQUpEO0FBS0EsR0FmRDtBQWdCQSxFQWxCRDtBQW1CQSxDQXJCRDs7QUF1QkEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInhjYXZhdGVcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwieGNhdmF0ZS90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMveGNhdmF0ZS5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcInhjYXZhdGVcIjogXCJ4Y2F2YXRlXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcbmNvbnN0IHhjYXZhdGUgPSByZXF1aXJlKCBcIi4veGNhdmF0ZS5zdXBwb3J0LmpzXCIgKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5cclxuZGVzY3JpYmUoIFwieGNhdmF0ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRkZXNjcmliZSggYFwieGNhdmF0ZSggXCJoZWxsb1wiLCBkYXRhIClcImAsICggKSA9PiB7XHJcblxyXG5cdFx0ZGVzY3JpYmUoIGBcInhjYXZhdGUoIFN5bWJvbCggXCJoZWxsb1wiICksIGRhdGEgXCJgLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgc3ltYm9sID0gU3ltYm9sKCBcImhlbGxvXCIgKTtcclxuXHRcdFx0bGV0IGRhdGEgPSB7IH07XHJcblx0XHRcdGRhdGFbIHN5bWJvbCBdID0gc3ltYm9sO1xyXG5cclxuXHRcdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbCggJ2hlbGxvJyApXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHhjYXZhdGUoIFwiaGVsbG9cIiwgZGF0YSApLCBzeW1ib2wpO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cdFx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sKCAnaGVsbG8nIClcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggeGNhdmF0ZSggU3ltYm9sKCBcImhlbGxvXCIgKSwgZGF0YSApLCBzeW1ib2wgKTtcclxuXHJcblx0XHRcdH0gKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcbn0gKTtcclxuXHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG4iXX0=
//# sourceMappingURL=test.support.js.map
