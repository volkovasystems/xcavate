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

	describe("`xcavate( 1, { [ Symbol( 1 ) ]: Symbol( 1 ) } )`", function () {
		it("should be equal to Symbol( 1 )", function () {
			var symbol = (0, _symbol2.default)(1);
			var data = {};
			data[symbol] = symbol;

			assert.equal(xcavate(1, data), symbol);

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

	describe("`xcavate with string type as symbol parameter and function as entity`", function () {
		it("should be equal to Symbol.for( 'extensive' )", function () {
			var Hello = function Hello() {};
			Hello[(0, _for2.default)("extensive")] = (0, _for2.default)("extensive");

			assert.equal(xcavate("extensive", Hello), (0, _for2.default)("extensive"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwieGNhdmF0ZSIsImRlc2NyaWJlIiwiaXQiLCJzeW1ib2wiLCJkYXRhIiwiZXF1YWwiLCJIZWxsbyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLHNCQUFULENBQWhCO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxTQUFWLEVBQXFCLFlBQU87O0FBRTNCQSxVQUFVLG9FQUFWLEVBQWdGLFlBQU87QUFDdEZDLEtBQUksc0NBQUosRUFBNEMsWUFBTztBQUNsRCxPQUFJQyxTQUFTLHNCQUFRLE9BQVIsQ0FBYjtBQUNBLE9BQUlDLE9BQU8sRUFBWDtBQUNBQSxRQUFNRCxNQUFOLElBQWlCQSxNQUFqQjs7QUFFQUwsVUFBT08sS0FBUCxDQUFjTCxRQUFTLE9BQVQsRUFBa0JJLElBQWxCLENBQWQsRUFBd0NELE1BQXhDOztBQUVBLEdBUEQ7QUFRQSxFQVREOztBQVdBRixVQUFVLGtEQUFWLEVBQThELFlBQU87QUFDcEVDLEtBQUksZ0NBQUosRUFBc0MsWUFBTztBQUM1QyxPQUFJQyxTQUFTLHNCQUFRLENBQVIsQ0FBYjtBQUNBLE9BQUlDLE9BQU8sRUFBWDtBQUNBQSxRQUFNRCxNQUFOLElBQWlCQSxNQUFqQjs7QUFFQUwsVUFBT08sS0FBUCxDQUFjTCxRQUFTLENBQVQsRUFBWUksSUFBWixDQUFkLEVBQWtDRCxNQUFsQzs7QUFFQSxHQVBEO0FBUUEsRUFURDs7QUFXQUYsVUFBVSw4RUFBVixFQUEwRixZQUFPO0FBQ2hHQyxLQUFJLHNDQUFKLEVBQTRDLFlBQU87QUFDbEQsT0FBSUMsU0FBUyxzQkFBUSxPQUFSLENBQWI7QUFDQSxPQUFJQyxPQUFPLEVBQVg7QUFDQUEsUUFBTUQsTUFBTixJQUFpQkEsTUFBakI7O0FBRUFMLFVBQU9PLEtBQVAsQ0FBY0wsUUFBUyxzQkFBUSxPQUFSLENBQVQsRUFBNEJJLElBQTVCLENBQWQsRUFBa0RELE1BQWxEOztBQUVBLEdBUEQ7QUFRQSxFQVREOztBQVdBRixVQUFVLHVFQUFWLEVBQW1GLFlBQU87QUFDekZDLEtBQUksOENBQUosRUFBb0QsWUFBTztBQUMxRCxPQUFJSSxRQUFRLFNBQVNBLEtBQVQsR0FBaUIsQ0FBRyxDQUFoQztBQUNBQSxTQUFPLG1CQUFZLFdBQVosQ0FBUCxJQUFxQyxtQkFBWSxXQUFaLENBQXJDOztBQUVBUixVQUFPTyxLQUFQLENBQWNMLFFBQVMsV0FBVCxFQUFzQk0sS0FBdEIsQ0FBZCxFQUE2QyxtQkFBWSxXQUFaLENBQTdDOztBQUVBLEdBTkQ7QUFPQSxFQVJEOztBQVVBTCxVQUFVLHVFQUFWLEVBQW1GLFlBQU87QUFDekZDLEtBQUksOENBQUosRUFBb0QsWUFBTztBQUMxRCxPQUFJSSxRQUFRLFNBQVNBLEtBQVQsR0FBaUIsQ0FBRyxDQUFoQztBQUNBQSxTQUFPLG1CQUFZLFdBQVosQ0FBUCxJQUFxQyxtQkFBWSxXQUFaLENBQXJDOztBQUVBUixVQUFPTyxLQUFQLENBQWNMLFFBQVMsbUJBQVksV0FBWixDQUFULEVBQW9DTSxLQUFwQyxDQUFkLEVBQTJELG1CQUFZLFdBQVosQ0FBM0Q7O0FBRUEsR0FORDtBQU9BLEVBUkQ7O0FBVUEsQ0F2REQ7O0FBeURBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwieGNhdmF0ZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwieGNhdmF0ZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMveGNhdmF0ZS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGQvYXMtZnVuY3Rpb25cIixcblx0XHRcdFwieGNhdmF0ZVwiOiBcInhjYXZhdGVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IHhjYXZhdGUgPSByZXF1aXJlKCBcIi4veGNhdmF0ZS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcInhjYXZhdGVcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgeGNhdmF0ZSggJ2hlbGxvJywgeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06IFN5bWJvbCggJ2hlbGxvJyApIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sKCAnaGVsbG8nIClcIiwgKCApID0+IHtcblx0XHRcdGxldCBzeW1ib2wgPSBTeW1ib2woIFwiaGVsbG9cIiApO1xuXHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cdFx0XHRkYXRhWyBzeW1ib2wgXSA9IHN5bWJvbDtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB4Y2F2YXRlKCBcImhlbGxvXCIsIGRhdGEgKSwgc3ltYm9sICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgeGNhdmF0ZSggMSwgeyBbIFN5bWJvbCggMSApIF06IFN5bWJvbCggMSApIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sKCAxIClcIiwgKCApID0+IHtcblx0XHRcdGxldCBzeW1ib2wgPSBTeW1ib2woIDEgKTtcblx0XHRcdGxldCBkYXRhID0geyB9O1xuXHRcdFx0ZGF0YVsgc3ltYm9sIF0gPSBzeW1ib2w7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggeGNhdmF0ZSggMSwgZGF0YSApLCBzeW1ib2wgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB4Y2F2YXRlKCBTeW1ib2woICdoZWxsbycgKSwgeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06IFN5bWJvbCggJ2hlbGxvJyApIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sKCAnaGVsbG8nIClcIiwgKCApID0+IHtcblx0XHRcdGxldCBzeW1ib2wgPSBTeW1ib2woIFwiaGVsbG9cIiApO1xuXHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cdFx0XHRkYXRhWyBzeW1ib2wgXSA9IHN5bWJvbDtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB4Y2F2YXRlKCBTeW1ib2woIFwiaGVsbG9cIiApLCBkYXRhICksIHN5bWJvbCApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHhjYXZhdGUgd2l0aCBzdHJpbmcgdHlwZSBhcyBzeW1ib2wgcGFyYW1ldGVyIGFuZCBmdW5jdGlvbiBhcyBlbnRpdHlgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbC5mb3IoICdleHRlbnNpdmUnIClcIiwgKCApID0+IHtcblx0XHRcdGxldCBIZWxsbyA9IGZ1bmN0aW9uIEhlbGxvKCApeyB9O1xuXHRcdFx0SGVsbG9bIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSBdID0gU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHhjYXZhdGUoIFwiZXh0ZW5zaXZlXCIsIEhlbGxvICksIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHhjYXZhdGUgd2l0aCBzeW1ib2wgdHlwZSBhcyBzeW1ib2wgcGFyYW1ldGVyIGFuZCBmdW5jdGlvbiBhcyBlbnRpdHlgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbC5mb3IoICdleHRlbnNpdmUnIClcIiwgKCApID0+IHtcblx0XHRcdGxldCBIZWxsbyA9IGZ1bmN0aW9uIEhlbGxvKCApeyB9O1xuXHRcdFx0SGVsbG9bIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSBdID0gU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHhjYXZhdGUoIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSwgSGVsbG8gKSwgU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
