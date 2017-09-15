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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var xcavate = require("./xcavate.support.js");
//: @end-client






//: @client:

describe("xcavate", function () {

	describe("`xcavate( 'hello', { [ Symbol( 'hello' ) ]: Symbol( 'hello' ) } )`", function () {
		it("should be equal to Symbol( 'hello' )", function () {

			var symbol = (0, _symbol2.default)("hello");
			var data = {};
			data[symbol] = symbol;

			assert.equal(xcavate("hello", data), symbol);

		});
	});

	describe("`xcavate( Symbol( 'hello' ), { [ Symbol( 'hello' ) ]: Symbol( 'hello' ) } )`", function () {
		it("should be equal to Symbol( 'hello' )", function () {

			var symbol = (0, _symbol2.default)("hello");
			var data = {};
			data[symbol] = symbol;

			assert.equal(xcavate((0, _symbol2.default)("hello"), data), symbol);

		});
	});

	describe("`xcavate with symbol type as symbol parameter and function as entity`", function () {
		it("should be equal to Symbol.for( 'extensive' )", function () {
			var Hello = function Hello() {};
			Hello[(0, _for2.default)("extensive")] = (0, _for2.default)("extensive");

			assert.equal(xcavate((0, _for2.default)("extensive"), Hello), (0, _for2.default)("extensive"));

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwieGNhdmF0ZSIsImRlc2NyaWJlIiwiaXQiLCJzeW1ib2wiLCJkYXRhIiwiZXF1YWwiLCJIZWxsbyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLHNCQUFULENBQWhCO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxTQUFWLEVBQXFCLFlBQU87O0FBRTNCQSxVQUFVLG9FQUFWLEVBQWdGLFlBQU87QUFDdEZDLEtBQUksc0NBQUosRUFBNEMsWUFBTzs7QUFFbEQsT0FBSUMsU0FBUyxzQkFBUSxPQUFSLENBQWI7QUFDQSxPQUFJQyxPQUFPLEVBQVg7QUFDQUEsUUFBTUQsTUFBTixJQUFpQkEsTUFBakI7O0FBRUFMLFVBQU9PLEtBQVAsQ0FBY0wsUUFBUyxPQUFULEVBQWtCSSxJQUFsQixDQUFkLEVBQXdDRCxNQUF4Qzs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7QUFZQUYsVUFBVSw4RUFBVixFQUEwRixZQUFPO0FBQ2hHQyxLQUFJLHNDQUFKLEVBQTRDLFlBQU87O0FBRWxELE9BQUlDLFNBQVMsc0JBQVEsT0FBUixDQUFiO0FBQ0EsT0FBSUMsT0FBTyxFQUFYO0FBQ0FBLFFBQU1ELE1BQU4sSUFBaUJBLE1BQWpCOztBQUVBTCxVQUFPTyxLQUFQLENBQWNMLFFBQVMsc0JBQVEsT0FBUixDQUFULEVBQTRCSSxJQUE1QixDQUFkLEVBQWtERCxNQUFsRDs7QUFFQSxHQVJEO0FBU0EsRUFWRDs7QUFZQUYsVUFBVSx1RUFBVixFQUFtRixZQUFPO0FBQ3pGQyxLQUFJLDhDQUFKLEVBQW9ELFlBQU87QUFDMUQsT0FBSUksUUFBUSxTQUFTQSxLQUFULEdBQWlCLENBQUcsQ0FBaEM7QUFDQUEsU0FBTyxtQkFBWSxXQUFaLENBQVAsSUFBcUMsbUJBQVksV0FBWixDQUFyQzs7QUFFQVIsVUFBT08sS0FBUCxDQUFjTCxRQUFTLG1CQUFZLFdBQVosQ0FBVCxFQUFvQ00sS0FBcEMsQ0FBZCxFQUEyRCxtQkFBWSxXQUFaLENBQTNEOztBQUVBLEdBTkQ7QUFPQSxFQVJEOztBQVVBLENBcENEOztBQXNDQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInhjYXZhdGVcIixcblx0XHRcdFwicGF0aFwiOiBcInhjYXZhdGUvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3hjYXZhdGUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcInhjYXZhdGVcIjogXCJ4Y2F2YXRlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCB4Y2F2YXRlID0gcmVxdWlyZSggXCIuL3hjYXZhdGUuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJ4Y2F2YXRlXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYHhjYXZhdGUoICdoZWxsbycsIHsgWyBTeW1ib2woICdoZWxsbycgKSBdOiBTeW1ib2woICdoZWxsbycgKSB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbCggJ2hlbGxvJyApXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCBzeW1ib2wgPSBTeW1ib2woIFwiaGVsbG9cIiApO1xuXHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cdFx0XHRkYXRhWyBzeW1ib2wgXSA9IHN5bWJvbDtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB4Y2F2YXRlKCBcImhlbGxvXCIsIGRhdGEgKSwgc3ltYm9sICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgeGNhdmF0ZSggU3ltYm9sKCAnaGVsbG8nICksIHsgWyBTeW1ib2woICdoZWxsbycgKSBdOiBTeW1ib2woICdoZWxsbycgKSB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbCggJ2hlbGxvJyApXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCBzeW1ib2wgPSBTeW1ib2woIFwiaGVsbG9cIiApO1xuXHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cdFx0XHRkYXRhWyBzeW1ib2wgXSA9IHN5bWJvbDtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB4Y2F2YXRlKCBTeW1ib2woIFwiaGVsbG9cIiApLCBkYXRhICksIHN5bWJvbCApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHhjYXZhdGUgd2l0aCBzeW1ib2wgdHlwZSBhcyBzeW1ib2wgcGFyYW1ldGVyIGFuZCBmdW5jdGlvbiBhcyBlbnRpdHlgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbC5mb3IoICdleHRlbnNpdmUnIClcIiwgKCApID0+IHtcblx0XHRcdGxldCBIZWxsbyA9IGZ1bmN0aW9uIEhlbGxvKCApeyB9O1xuXHRcdFx0SGVsbG9bIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSBdID0gU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHhjYXZhdGUoIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSwgSGVsbG8gKSwgU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
