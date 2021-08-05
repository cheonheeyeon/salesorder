sap.ui.define([], function () {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
        currencyValue : function (sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
			
		salestatus : function (sValue) {
			switch(sValue){
				case 'O':
					return "생성";
					break; 
				case 'D':
					return "배송중";
					break;
				case 'C':
					return "완료";
					break; 
			}
		},
			
		devstatus : function (sValue) {
			switch(sValue){
				case 'P':
					return "피킹";
					break; 
				case 'D':
					return "배송중";
					break;
				case 'C':
					return "완료";
					break; 
				default:
					return "처리중";
					break;
			}
        },
        
        BPtype : function (sValue) {
			switch(sValue){
				case 'C':
					return "고객";
					break; 
				case 'V':
					return "거래처";
					break;
				case 'D':
					return "배송업체";
					break; 
				default:
					return "";
					break;
			}
		}
	};
});