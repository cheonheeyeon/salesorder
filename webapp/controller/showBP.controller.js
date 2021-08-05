sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/m/library"
], function (BaseController, JSONModel, formatter, mobileLibrary) {
	"use strict";
    return BaseController.extend("so.zwijard01.controller.showBP", {

        formatter: formatter
			 
		// onInit: function() {
			
		// 	var oModel = new JSONModel();
		// 	this.getView().byId("orderedItem").setModel(oModel);
		// },
		
		// onAdd: function(oEvent) {
		// 	//This code was generated by the layout editor.
		// 	var Kunnr = this.getView().byId("ikunnr").getValue();
		// 	if(Kunnr == ""){
		// 		alert("고객번호를 입력하세요");
		// 	}
			
		// 	var matnr = this.getView().byId("imatnr").getValue();
		// 	var menged = this.getView().byId("imenged").getValue();
			
		// 	if(matnr != "" && menged != ""){
				
		// 		var itemRow = {
		// 			Matnr : matnr,
		// 			MengeD : menged
		// 		};
				
		// 		var oModel = this.getView().byId("orderedItem").getModel();
		// 		var itemData = oModel.getProperty("/data");
				
		// 		if(typeof itemData !== "undefined" && itemData !== null && itemData.length > 0){
		// 			itemData.push(itemRow);
		// 		}else{
		// 			itemData = [];
		// 			itemData.push(itemRow);
		// 		}
				
		// 		oModel.setData({
		// 			data:itemData
		// 		});
				
		// 		this.getView().byId("imatnr").setValue("");
		// 		this.getView().byId("imenged").setValue("");
				
		// 	}else{
		// 		alert("입력값을 확인하세요");
		// 	}
		// },
		
		// onDelete: function(oEvent) {
			
		// 	var oTable = this.getView().byId("orderedItem");
		// 	var oModel2 = oTable.getModel();
		// 	var aRows = oModel2.getData().data;
		// 	var aContexts = oTable.getSelectedContexts();
			
		// 	for(var i = aContexts.length - 1; i >= 0; i--){
		// 		var oThisObj = aContexts[i].getObject();
				
		// 		var index = $.map(aRows, function(obj,index){
		// 			if(obj===oThisObj){
		// 				return index;
		// 			}
		// 		});
				
		// 		aRows.splice(index,1);
		// 	}
			
		// 	oModel2.setData({
		// 		data:aRows
		// 	});
			
		// 	oTable.removeSelections(true);
			
		// },
		
		// onSave: function() {
			
		// 	var oTable = this.getView().byId("orderedItem");
		// 	var oModel = oTable.getModel();
		// 	var aItems = oTable.getItems();
			
		// 	var itemData = [];
			
		// 	for(var iRowIndex = 0; iRowIndex < aItems.length; iRowIndex++){
		// 		// var l_kunnr = oModel.getProperty("Kunnr", aItems[iRowIndex].getBindingContext());
		// 		var l_matnr = oModel.getProperty("Matnr", aItems[iRowIndex].getBindingContext());
		// 		var l_menged = oModel.getProperty("MengeD", aItems[iRowIndex].getBindingContext());
				
		// 		itemData.push({
		// 			// Kunnr: l_kunnr,
		// 			Matnr: l_matnr,
		// 			MengeD: l_menged
		// 		});
				
		// 	}
		// 	var kunnr = this.getView().byId("ikunnr").getValue();
			
		// 	var oEntry1 = {};
			
		// 	oEntry1.Kunnr = kunnr;
		// 	oEntry1.SOItem = itemData;
			
		// 	var oModel1 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZTEST6414_02_SRV/");
			                           
		// 	this.getView().setModel(oModel1);
		// 	oModel1.setHeaders({
		// 		"X-Requested-With": "x"
		// 	});
			
		// 	oModel1.create("/SOHeaderSet", oEntry1, {
 
		// 	success: function(oData, oResponse) {
				
		// 		alert("The backend SAP System is Connected Successfully");
 
		// 		var successObj = oResponse.data.HandlingUnit;
		// 		var message = "Batch : " + successObj + "  " + "updated successfully";
 
		// 		jQuery.sap.require("sap.m.MessageBox");
 
		// 		sap.m.MessageBox.show(message, {
		// 			icon: sap.m.MessageBox.Icon.SUCCESS,
		// 			title: "Backend Table(s) Update Status",
		// 			actions: [sap.m.MessageBox.Action.OK]
		// 		});
		// 	},
		// 	error: function(oError) {
		// 		// alert("Failure - OData Service could not be called. Please check the Network Tab at Debug.");
		// 	}
		// });
		// },
		
		// _navBack: function() {
		// 	var oHistory = sap.ui.core.routing.History.getInstance(),
		// 		sPreviousHash = oHistory.getPreviousHash();

		// 	this.getView().unbindObject();
		// 	if (sPreviousHash !== undefined) {
		// 		// The history contains a previous entry
		// 		history.go(-1);
		// 	} else {
		// 		this.getRouter().getTargets().display("object");
		// 	}
		// }
	});
});