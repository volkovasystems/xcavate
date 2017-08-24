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
              */var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var mtch = require("mtch");
var protype = require("protype");

var SYMBOL_PATTERN = /^Symbol\((.+?)\)$/;

var xcavate = function xcavate(symbol, entity) {
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

	if (falzy(symbol) || !protype(symbol, NUMBER + STRING + SYMBOL)) {
		throw new Error("invalid symbol");
	}

	if (falzy(entity) || !protype(entity, FUNCTION + OBJECT)) {
		throw new Error("invalid entity");
	}

	if ((typeof symbol === "undefined" ? "undefined" : (0, _typeof3.default)(symbol)) != SYMBOL) {
		symbol = (0, _symbol2.default)(symbol);
	}

	var string = mtch(symbol.toString(), SYMBOL_PATTERN, 1);

	return (0, _getOwnPropertySymbols2.default)(entity).reduce(function (symbol, property) {
		if (mtch(property.toString(), SYMBOL_PATTERN, 1) == string) {
			return property;
		}

		return symbol;
	}, symbol);
};

module.exports = xcavate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhjYXZhdGUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJtdGNoIiwicHJvdHlwZSIsIlNZTUJPTF9QQVRURVJOIiwieGNhdmF0ZSIsInN5bWJvbCIsImVudGl0eSIsIk5VTUJFUiIsIlNUUklORyIsIlNZTUJPTCIsIkVycm9yIiwiRlVOQ1RJT04iLCJPQkpFQ1QiLCJzdHJpbmciLCJ0b1N0cmluZyIsInJlZHVjZSIsInByb3BlcnR5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNRyxpQkFBaUIsbUJBQXZCOztBQUVBLElBQU1DLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQ2pEOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEtBQUlQLE1BQU9NLE1BQVAsS0FBbUIsQ0FBQ0gsUUFBU0csTUFBVCxFQUFpQkUsU0FBU0MsTUFBVCxHQUFrQkMsTUFBbkMsQ0FBeEIsRUFBcUU7QUFDcEUsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlYLE1BQU9PLE1BQVAsS0FBbUIsQ0FBQ0osUUFBU0ksTUFBVCxFQUFpQkssV0FBV0MsTUFBNUIsQ0FBeEIsRUFBOEQ7QUFDN0QsUUFBTSxJQUFJRixLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksUUFBT0wsTUFBUCx1REFBT0EsTUFBUCxNQUFpQkksTUFBckIsRUFBNkI7QUFDNUJKLFdBQVMsc0JBQVFBLE1BQVIsQ0FBVDtBQUNBOztBQUVELEtBQUlRLFNBQVNaLEtBQU1JLE9BQU9TLFFBQVAsRUFBTixFQUEwQlgsY0FBMUIsRUFBMEMsQ0FBMUMsQ0FBYjs7QUFFQSxRQUFPLHFDQUE4QkcsTUFBOUIsRUFBdUNTLE1BQXZDLENBQStDLFVBQUVWLE1BQUYsRUFBVVcsUUFBVixFQUF3QjtBQUM3RSxNQUFJZixLQUFNZSxTQUFTRixRQUFULEVBQU4sRUFBNEJYLGNBQTVCLEVBQTRDLENBQTVDLEtBQW1EVSxNQUF2RCxFQUErRDtBQUM5RCxVQUFPRyxRQUFQO0FBQ0E7O0FBRUQsU0FBT1gsTUFBUDtBQUNBLEVBTk0sRUFNSkEsTUFOSSxDQUFQO0FBT0EsQ0F0Q0Q7O0FBd0NBWSxPQUFPQyxPQUFQLEdBQWlCZCxPQUFqQiIsImZpbGUiOiJ4Y2F2YXRlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInhjYXZhdGVcIixcblx0XHRcdFwicGF0aFwiOiBcInhjYXZhdGUveGNhdmF0ZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwieGNhdmF0ZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ4Y2F2YXRlXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy94Y2F2YXRlLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwieGNhdmF0ZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEV4dHJhY3QgcmVhbCBzeW1ib2wuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwibXRjaFwiOiBcIm10Y2hcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgbXRjaCA9IHJlcXVpcmUoIFwibXRjaFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcblxuY29uc3QgU1lNQk9MX1BBVFRFUk4gPSAvXlN5bWJvbFxcKCguKz8pXFwpJC87XG5cbmNvbnN0IHhjYXZhdGUgPSBmdW5jdGlvbiB4Y2F2YXRlKCBzeW1ib2wsIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInN5bWJvbDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcIm9iamVjdFwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggc3ltYm9sICkgfHwgIXByb3R5cGUoIHN5bWJvbCwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBzeW1ib2xcIiApO1xuXHR9XG5cblx0aWYoIGZhbHp5KCBlbnRpdHkgKSB8fCAhcHJvdHlwZSggZW50aXR5LCBGVU5DVElPTiArIE9CSkVDVCApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcblx0fVxuXG5cdGlmKCB0eXBlb2Ygc3ltYm9sICE9IFNZTUJPTCApe1xuXHRcdHN5bWJvbCA9IFN5bWJvbCggc3ltYm9sICk7XG5cdH1cblxuXHRsZXQgc3RyaW5nID0gbXRjaCggc3ltYm9sLnRvU3RyaW5nKCApLCBTWU1CT0xfUEFUVEVSTiwgMSApO1xuXG5cdHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKCBlbnRpdHkgKS5yZWR1Y2UoICggc3ltYm9sLCBwcm9wZXJ0eSApID0+IHtcblx0XHRpZiggbXRjaCggcHJvcGVydHkudG9TdHJpbmcoICksIFNZTUJPTF9QQVRURVJOLCAxICkgPT0gc3RyaW5nICl7XG5cdFx0XHRyZXR1cm4gcHJvcGVydHk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN5bWJvbDtcblx0fSwgc3ltYm9sICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHhjYXZhdGU7XG4iXX0=
//# sourceMappingURL=xcavate.support.js.map
