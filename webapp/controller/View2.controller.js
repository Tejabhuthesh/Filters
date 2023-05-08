sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/ui/model/FilterOperator"
],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, FilterOperator) {
        "use strict";

        return Controller.extend("idfilters.zfilters.controller.View2", {
            onInit: function () {
                var that = this;
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZEMPLOYEE_EEE_SRV/");

                oModel.read("/userSet", {
                    success: function (odata) {
                        var oModel1 = new sap.ui.model.json.JSONModel();
                        debugger;
                        oModel1.setData(odata);
                        that.getView().setModel(oModel1, "Data1");
                        // alert("Success");

                    },
                    error: function (oError) {
                        alert("error");
                    }
                });



            }, onNavBack: function () {
                history.go(-1);
        
              },
            onSearch: function (evt) {

                var that = this;
                var oTable = that.getView().byId("idProductsTable");
                var oBinding = oTable.getBinding("rows");

                if (evt.getId() == "liveChange") {
                    var sQuery = evt.mParameters.newValue;
                }

                var that = this;
                if (sQuery) {
                    var oFilter = new sap.ui.model.Filter('Name', 'Contains', sQuery);                   //EQ =
                    var oFilter1 = new sap.ui.model.Filter('Zemprole', 'Contains', sQuery);                // CONTAINS Notequal
                    var oFilter2 = new sap.ui.model.Filter('Zgender', 'Contains', sQuery);
                    var oFilter3 = new sap.ui.model.Filter('Zcity', 'Contains', sQuery);
                    var oFilter4 = new sap.ui.model.Filter('Znumber', 'Contains', sQuery);

                    var ofilters = new sap.ui.model.Filter([oFilter, oFilter1, oFilter2, oFilter3, oFilter4]);
                }
                oBinding.filter(ofilters);


            },
            // handleSelectionChangeName: function (evt) {
            //     var that = this;
            //     var oTable = that.getView().byId("idProductsTable");
            //     var oBinding = oTable.getBinding("rows"),
            //         oFinalFilter = [],
            //         aName = [];

            //     // Name = this.byId("idname").getTokens();

            //     var Name = that.byId("idname").getSelectedItems();
            //     if (!Name.length > 0) {
            //         !oBinding.filter([]);
            //     } else {
            //         for (var i = 0; i < Name.length; i++) {
            //             aName.push(new sap.ui.model.Filter({
            //                 path: "Name",
            //                 operator: 'EQ',
            //                 value1: Name[i].getText()
            //             }));
            //         }

            //         oFinalFilter.push(new sap.ui.model.Filter({
            //             and: false,
            //             filters: [
            //                 new sap.ui.model.Filter({
            //                     and: false,
            //                     filters: aName
            //                 })
            //             ]
            //         }));
            //         oBinding.filter(oFinalFilter);
            //     }
            // },
            // handleSelectionChangeRole: function (evt) {
            //     var that = this;
            //     var oTable = that.getView().byId("idProductsTable");
            //     var oBinding = oTable.getBinding("rows"),
            //         oFinalFilter = [],
            //         aRole = [],
            //         aName = []
            //     // Role = this.byId("idRole").getTokens();

            //     var Role = that.byId("idemprole").getSelectedItems();
            //     var Name = that.byId("idname").getSelectedItems();
            //     if (!Role.length > 0) {
            //         !oBinding.filter([]);
            //     } else {
            //         for (var i = 0; i < Role.length; i++) {
            //             aRole.push(new sap.ui.model.Filter({
            //                 path: "Zemprole",
            //                 operator: 'EQ',
            //                 value1: Role[i].getText()
            //             }));
            //         }
            //         for (var i = 0; i < Name.length; i++) {
            //             aName.push(new sap.ui.model.Filter({
            //                 path: "Name",
            //                 operator: 'EQ',
            //                 value1: Name[i].getText()
            //             }));
            //         }


            //         oFinalFilter.push(


            //             new sap.ui.model.Filter({
            //                 and: false,
            //                 filters: aRole
            //             }),
            //             new sap.ui.model.Filter({
            //                 and: false,
            //                 filters: aName
            //             })

            //         );
            //         oBinding.filter(oFinalFilter);
            //     }
            // },

            // handleSelectionChangeGender: function (evt) {
            //     var that = this;
            //     var oTable = that.getView().byId("idProductsTable");
            //     var oBinding = oTable.getBinding("rows"),
            //         oFinalFilter = [],
            //         aGender = [];

            //     // Gender = this.byId("idGender").getTokens();

            //     var Gender = that.byId("idgender").getSelectedItems();
            //     if (!Gender.length > 0) {
            //         !oBinding.filter([]);
            //     } else {
            //         for (var i = 0; i < Gender.length; i++) {
            //             aGender.push(new sap.ui.model.Filter({
            //                 path: "Zgender",
            //                 operator: 'EQ',
            //                 value1: Gender[i].getText()
            //             }));
            //         }

            //         oFinalFilter.push(new sap.ui.model.Filter({
            //             and: false,
            //             filters: [
            //                 new sap.ui.model.Filter({
            //                     and: false,
            //                     filters: aGender
            //                 })
            //             ]
            //         }));
            //         oBinding.filter(oFinalFilter);
            //     }
            // },
            // handleSelectionChangeCity: function (evt) {
            //     var that = this;
            //     var oTable = that.getView().byId("idProductsTable");
            //     var oBinding = oTable.getBinding("rows"),
            //         oFinalFilter = [],
            //         aCity = [];

            //     // City = this.byId("idCity").getTokens();

            //     var City = that.byId("idcity").getSelectedItems();
            //     if (!City.length > 0) {
            //         !oBinding.filter([]);
            //     } else {
            //         for (var i = 0; i < City.length; i++) {
            //             aCity.push(new sap.ui.model.Filter({
            //                 path: "Zcity",
            //                 operator: 'EQ',
            //                 value1: City[i].getText()
            //             }));
            //         }

            //         oFinalFilter.push(new sap.ui.model.Filter({
            //             and: false,
            //             filters: [
            //                 new sap.ui.model.Filter({
            //                     and: false,
            //                     filters: aCity
            //                 })
            //             ]
            //         }));
            //         oBinding.filter(oFinalFilter);
            //     }
            // },
            // handleSelectionChangeNumber: function (evt) {
            //     var that = this;
            //     var oTable = that.getView().byId("idProductsTable");
            //     var oBinding = oTable.getBinding("rows");



            //     var oFinalFilter = [];
            //     var aNumber = [];

            //     // Number = this.byId("idNumber").getTokens();

            //     var Number = that.byId("idnumber").getSelectedItems();
            //     if (!Number.length > 0) {
            //         !oBinding.filter([]);
            //     } else {
            //         for (var i = 0; i < Number.length; i++) {
            //             aNumber.push(new sap.ui.model.Filter({
            //                 path: "Znumber",
            //                 operator: 'EQ',
            //                 value1: Number[i].getText()
            //             }));
            //         }

            //         oFinalFilter.push(new sap.ui.model.Filter({
            //             and: false,
            //             filters: [
            //                 new sap.ui.model.Filter({
            //                     and: false,
            //                     filters: aNumber
            //                 })
            //             ]
            //         }));
            //         oBinding.filter(oFinalFilter);
            //     }
            // },
            onPressGo: function (evt) {
                var that = this;
                var oBinding = that.getView().byId("idProductsTable").getBinding("rows");
            //    var  oSorter = new sap.ui.model.Sorter('Name', false);
            //     oBinding.sorters([oSorter]);
                 var  oFinalFilter = [],
                    aName = [],
                    aRole = [],
                    aGender = [],
                    aCity = [],
                    aNumber = [];

                var Name = that.byId("idname").getSelectedItems();
                var Role = that.byId("idemprole").getSelectedItems();
                var Gender = that.byId("idgender").getSelectedItems();
                var City = that.byId("idcity").getSelectedItems();
                var Number = that.byId("idnumber").getSelectedItems();

                if (!Name.length > 0 &&
                    !Role.length > 0 &&
                    !Gender.length > 0 &&
                    !City.length > 0 &&
                    !Number.length > 0) {
                    !oBinding.filter([]);
                } else {

                    for (var i = 0; i < Name.length; i++) {
                        aName.push(new sap.ui.model.Filter({
                            path: "Name",
                            operator: 'EQ',
                            value1: Name[i].getText()
                        }));
                    }
                    for (var i = 0; i < Role.length; i++) {
                        aRole.push(new sap.ui.model.Filter({
                            path: "Zemprole",
                            operator: 'EQ',
                            value1: Role[i].getText()
                        }));
                    }
                    for (var i = 0; i < Gender.length; i++) {
                        aGender.push(new sap.ui.model.Filter({
                            path: "Zgender",
                            operator: 'EQ',
                            value1: Gender[i].getText()
                        }));
                    }
                    for (var i = 0; i < City.length; i++) {
                        aCity.push(new sap.ui.model.Filter({
                            path: "Zcity",
                            operator: 'EQ',
                            value1: City[i].getText()
                        }));
                    }
                    for (var i = 0; i < Number.length; i++) {
                        aNumber.push(new sap.ui.model.Filter({
                            path: "Znumber",
                            operator: 'EQ',
                            value1: Number[i].getText()
                        }));
                    }
                  
                    if(aName.length > 0){
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aName,
                          }));
                    }
                    if(aRole.length > 0){
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aRole,
                          }));
                    }
                    if(aGender.length > 0){
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aGender,
                          }));
                    }
                    if(aCity.length > 0){
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aCity,
                          }));
                    }
                    if(aNumber.length > 0){
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aNumber,
                          }));
                    }
                   
                    // oFinalFilter.push(
                    //     new sap.ui.model.Filter({
                    //         and: false,
                    //         filters: aName
                    //     }),
                    //     new sap.ui.model.Filter({
                    //         and: false,
                    //         filters: aRole
                    //     }),
                    //     new sap.ui.model.Filter({
                    //         and: false,
                    //         filters: aGender
                    //     }),
                    //     new sap.ui.model.Filter({
                    //         and: false,
                    //         filters: aCity
                    //     }),
                    //     new sap.ui.model.Filter({
                    //         and: false,
                    //         filters: aNumber
                    //     })
                    // );
                    oBinding.filter(oFinalFilter);
                   
                }
            },
            onnamepress: function (evt) {

                var that = this;
                var myView = that.getView();
                // var oDialog = myView.byId("idDialog1");
                this._oDialog = myView.byId("idDialog");


                if (!this._oDialog) {

                    this._oDialog = sap.ui.xmlfragment(myView.getId(), "idfilters.zfilters.view.Dialog", this);
                    myView.addDependent(this._oDialog);
                    this._oDialog.open();
                }
                else {

                    that.byId("idDialog").open();
                }
            },
            SavePress: function (evt) {
                debugger;


            }
        });
    });