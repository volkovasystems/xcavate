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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhjYXZhdGUuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJtdGNoIiwicHJvdHlwZSIsIlNZTUJPTF9QQVRURVJOIiwieGNhdmF0ZSIsInN5bWJvbCIsImVudGl0eSIsIk5VTUJFUiIsIlNUUklORyIsIlNZTUJPTCIsIkVycm9yIiwiRlVOQ1RJT04iLCJPQkpFQ1QiLCJzdHJpbmciLCJ0b1N0cmluZyIsInJlZHVjZSIsInByb3BlcnR5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNRyxpQkFBaUIsbUJBQXZCOztBQUVBLElBQU1DLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQ2pEOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEtBQUlQLE1BQU9NLE1BQVAsS0FBbUIsQ0FBQ0gsUUFBU0csTUFBVCxFQUFpQkUsU0FBU0MsTUFBVCxHQUFrQkMsTUFBbkMsQ0FBeEIsRUFBcUU7QUFDcEUsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlYLE1BQU9PLE1BQVAsS0FBbUIsQ0FBQ0osUUFBU0ksTUFBVCxFQUFpQkssV0FBV0MsTUFBNUIsQ0FBeEIsRUFBOEQ7QUFDN0QsUUFBTSxJQUFJRixLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksUUFBT0wsTUFBUCx1REFBT0EsTUFBUCxNQUFpQkksTUFBckIsRUFBNkI7QUFDNUJKLFdBQVMsc0JBQVFBLE1BQVIsQ0FBVDtBQUNBOztBQUVELEtBQUlRLFNBQVNaLEtBQU1JLE9BQU9TLFFBQVAsRUFBTixFQUEwQlgsY0FBMUIsRUFBMEMsQ0FBMUMsQ0FBYjs7QUFFQSxRQUFPLHFDQUE4QkcsTUFBOUIsRUFBdUNTLE1BQXZDLENBQStDLFVBQUVWLE1BQUYsRUFBVVcsUUFBVixFQUF3QjtBQUM3RSxNQUFJZixLQUFNZSxTQUFTRixRQUFULEVBQU4sRUFBNEJYLGNBQTVCLEVBQTRDLENBQTVDLEtBQW1EVSxNQUF2RCxFQUErRDtBQUM5RCxVQUFPRyxRQUFQO0FBQ0E7O0FBRUQsU0FBT1gsTUFBUDtBQUNBLEVBTk0sRUFNSkEsTUFOSSxDQUFQO0FBT0EsQ0F0Q0Q7O0FBd0NBWSxPQUFPQyxPQUFQLEdBQWlCZCxPQUFqQiIsImZpbGUiOiJ4Y2F2YXRlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwieGNhdmF0ZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJ4Y2F2YXRlL3hjYXZhdGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwieGNhdmF0ZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInhjYXZhdGVcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMveGNhdmF0ZS5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwieGNhdmF0ZS10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdEV4dHJhY3QgcmVhbCBzeW1ib2wuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwibXRjaFwiOiBcIm10Y2hcIixcclxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCBtdGNoID0gcmVxdWlyZSggXCJtdGNoXCIgKTtcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcblxyXG5jb25zdCBTWU1CT0xfUEFUVEVSTiA9IC9eU3ltYm9sXFwoKC4rPylcXCkkLztcclxuXHJcbmNvbnN0IHhjYXZhdGUgPSBmdW5jdGlvbiB4Y2F2YXRlKCBzeW1ib2wsIGVudGl0eSApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwic3ltYm9sOnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwibnVtYmVyXCIsXHJcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxyXG5cdFx0XHRcdFx0XCJzeW1ib2xcIlxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFx0XCJvYmplY3RcIlxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIHN5bWJvbCApIHx8ICFwcm90eXBlKCBzeW1ib2wsIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBzeW1ib2xcIiApO1xyXG5cdH1cclxuXHJcblx0aWYoIGZhbHp5KCBlbnRpdHkgKSB8fCAhcHJvdHlwZSggZW50aXR5LCBGVU5DVElPTiArIE9CSkVDVCApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xyXG5cdH1cclxuXHJcblx0aWYoIHR5cGVvZiBzeW1ib2wgIT0gU1lNQk9MICl7XHJcblx0XHRzeW1ib2wgPSBTeW1ib2woIHN5bWJvbCApO1xyXG5cdH1cclxuXHJcblx0bGV0IHN0cmluZyA9IG10Y2goIHN5bWJvbC50b1N0cmluZyggKSwgU1lNQk9MX1BBVFRFUk4sIDEgKTtcclxuXHJcblx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoIGVudGl0eSApLnJlZHVjZSggKCBzeW1ib2wsIHByb3BlcnR5ICkgPT4ge1xyXG5cdFx0aWYoIG10Y2goIHByb3BlcnR5LnRvU3RyaW5nKCApLCBTWU1CT0xfUEFUVEVSTiwgMSApID09IHN0cmluZyApe1xyXG5cdFx0XHRyZXR1cm4gcHJvcGVydHk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHN5bWJvbDtcclxuXHR9LCBzeW1ib2wgKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0geGNhdmF0ZTtcclxuIl19
//# sourceMappingURL=xcavate.support.js.map
