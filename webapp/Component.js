sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.nav.Component", {

		metadata: {
			manifest: "json"
		},
		onInit: function(){
			
			   // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
				//GET THE OBJECT OF ROUTER FROM PARENT
			var oRouter =this.getRouter();
			//initialize the router
			oRouter.initialize();
		}

	});

});