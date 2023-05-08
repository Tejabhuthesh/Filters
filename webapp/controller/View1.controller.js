sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", 'sap/m/Token', "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Token, FilterOperator) {
        "use strict";

        return Controller.extend("idfilters.zfilters.controller.View1", {
            onInit: function () {
                var that = this;


                that.byId("idname").setVisible(false);
                that.byId("idrole").setVisible(false);
                that.byId("idgender").setVisible(false);
                that.byId("idcity").setVisible(false);
                that.byId("idnumber").setVisible(false);



                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZEMPLOYEE_EEE_SRV/");

                oModel.read("/userSet", {
                    success: function (odata) {
                        var oModel1 = new sap.ui.model.json.JSONModel();

                        oModel1.setData(odata);
                        that.getView().setModel(oModel1, "Data1");
                        // alert("Success");

                    },
                    error: function (oError) {
                        alert("error");
                    }
                });

                var oTable = that.getView().byId("idProductsTable");
                var oBinding = oTable.getBinding("items");
                that.getView().setModel(oBinding);

                var oMultiInput1 = that.getView().byId("idname");
                oMultiInput1.setTokens([
                    new Token({ text: "Amit", key: "0001" }),
                    new Token({ text: "Anita", key: "0002" })
                  
                ]);
                // add validator
                var fnValidator = function (args) {
                    var text = args.text;

                    return new Token({ key: text, text: text });
                };

                oMultiInput1.addValidator(fnValidator);
                this.oModel = new JSONModel({              //Chombo box
                    child1: false,
                    child2: false,
                    child3: false,
                    child4: false,
                    child5: false
                });
                this.getView().setModel(this.oModel);

                var oMultiInput2 = that.getView().byId("idgender");
                oMultiInput2.setTokens([
                    // new Token({ text: "Male", key: "0001" }),
                    // new Token({ text: "Female", key: "0002" })
                 
                ]);
                // add validator
                var fnValidator = function (args) {
                    var text = args.text;

                    return new Token({ key: text, text: text });
                };

                oMultiInput2.addValidator(fnValidator);
                this.oModel = new JSONModel({              //Chombo box
                    child1: false,
                    child2: false,
                    child3: false,
                    child4: false,
                    child5: false
                });
                this.getView().setModel(this.oModel);


                var oMultiInput3 = that.getView().byId("idrole");
                oMultiInput3.setTokens([
                    // new Token({ text: "Abap", key: "0001" }),
                    // new Token({ text: "Driver", key: "0002" })
                   
                ]);
                // add validator
                var fnValidator = function (args) {
                    var text = args.text;

                    return new Token({ key: text, text: text });
                };

                oMultiInput3.addValidator(fnValidator);
                this.oModel = new JSONModel({              //Chombo box
                    child1: false,
                    child2: false,
                    child3: false,
                    child4: false,
                    child5: false
                });
                this.getView().setModel(this.oModel);

                var oMultiInput4 = that.getView().byId("idcity");
                oMultiInput4.setTokens([
                    // new Token({ text: "Andra pradesh", key: "0001" }),
                    // new Token({ text: "Pune", key: "0002" })
                   
                ]);
                // add validator
                var fnValidator = function (args) {
                    var text = args.text;

                    return new Token({ key: text, text: text });
                };

                oMultiInput4.addValidator(fnValidator);
                this.oModel = new JSONModel({              //Chombo box
                    child1: false,
                    child2: false,
                    child3: false,
                    child4: false,
                    child5: false
                });
                this.getView().setModel(this.oModel);

                var oMultiInput5 = that.getView().byId("idnumber");
                oMultiInput5.setTokens([
                    // new Token({ text: "", key: "0001" }),
                    // new Token({ text: "", key: "0002" })
                   
                ]);
                // add validator
                var fnValidator = function (args) {
                    var text = args.text;

                    return new Token({ key: text, text: text });
                };

                oMultiInput5.addValidator(fnValidator);
                this.oModel = new JSONModel({              //Chombo box
                    child1: false,
                    child2: false,
                    child3: false,
                    child4: false,
                    child5: false
                });
                this.getView().setModel(this.oModel);

            },
            onAfterRendering: function () {
                // this.byId("idvalue1").setVisible(false);

            },


            onParentClicked: function (oEvent) {
                var bSelected = oEvent.getParameter("selected");
                this.oModel.setData({ child1: bSelected, child2: bSelected, child3: bSelected, child4: bSelected, child5: bSelected });
            },
            rightarrow: function (oEvent) {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");
            },
            onSearch: function (evt) {
                var that = this;
                var oTable = that.getView().byId("idProductsTable");
                var oBinding = oTable.getBinding("items");

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
            handleSelectionChangeCombobox: function (evt) {
                var that = this;
                var FilterOperators = evt.mParameters.selectedItem.mProperties.text;

                var value2 = that.byId("idbetween").getText();
                if (FilterOperators === value2) {
                    that.byId("idvalue1").setVisible(true);  
                }
                else {
                    that.byId("idvalue1").setVisible(false);
                 
                }
            },


            ongo: function (evt) {

                // var sQuery = that.getView().byId("idname").mProperties._semanticFormValue;
                var that = this;
                var oTable = that.getView().byId("idProductsTable");
                var oBinding = oTable.getBinding("items"),
                    //     oFinalFilter = [],
                    //     aName = [],

                    //     Name = that.byId("idname").getTokens();
                    // debugger;


                    // if (!Name.length > 0

                    // ) {
                    //     !oBinding.filter([]);
                    // } else {
                    //     for (var i = 0; i < Name.length; i++) {
                    //         aName.push(new sap.ui.model.Filter({
                    //             path: "Name",
                    //             operator: FilterOperators,
                    //             value1: Name[i].getText(),
                    //             value2: value2
                    //         }));
                    //     }

                    //     oFinalFilter.push(new sap.ui.model.Filter({
                    //         and: false,
                    //         filters: [
                    //             new sap.ui.model.Filter({
                    //                 and: false,
                    //                 filters: aName
                    //             })
                    //         ]
                    //     }));
                    //     oBinding.filter(oFinalFilter);
                    // }
                    oFinalFilter = [],
                    aName = [],
                    aRole = [],
                    aGender = [],
                    aCity = [],
                    aNumber = [];

                var Name = that.byId("idname").getTokens();
                var Role = that.byId("idrole").getTokens();
                var Gender = that.byId("idgender").getTokens();
                var City = that.byId("idcity").getTokens();
                var Number = that.byId("idnumber").getTokens();

                var FilterOperators = that.byId("idcomboBox").mProperties.value;
                var value2 = that.byId("idvalue1").getValue();

                

                    for (var i = 0; i < Name.length; i++) {
                        aName.push(new sap.ui.model.Filter({
                            path: "Name",
                            operator: FilterOperators,
                            value1: Name[i].getText(),
                            value2: value2
                        }));
                    }
                    for (var i = 0; i < Role.length; i++) {
                        aRole.push(new sap.ui.model.Filter({
                            path: "Zemprole",
                            operator: FilterOperators,
                            value1: Role[i].getText(),
                            value2: value2
                        }));
                    }
                    for (var i = 0; i < Gender.length; i++) {
                        aGender.push(new sap.ui.model.Filter({
                            path: "Zgender",
                            operator: FilterOperators,
                            value1: Gender[i].getText(),
                            value2: value2
                        }));
                    }
                    for (var i = 0; i < City.length; i++) {
                        aCity.push(new sap.ui.model.Filter({
                            path: "Zcity",
                            operator: FilterOperators,
                            value1: City[i].getText(),
                            value2: value2
                        }));
                    }
                    for (var i = 0; i < Number.length; i++) {
                        aNumber.push(new sap.ui.model.Filter({
                            path: "Znumber",
                            operator: FilterOperators,
                            value1: Number[i].getText(),
                            value2: value2
                        }));
                    }

                    if (aName.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aName,
                        }));
                    }
                    if (aRole.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aRole,
                        }));
                    }
                    if (aGender.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aGender,
                        }));
                    }
                    if (aCity.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aCity,
                        }));
                    }
                    if (aNumber.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aNumber,
                        }));
                    }


                    oBinding.filter(oFinalFilter);

                this.byId("idDialog1").close();
            },

            ongo1: function (evt) {
                var that = this;
                var oTable = that.getView().byId("idProductsTable");
                var oBinding = oTable.getBinding("items"),
                
                  oFinalFilter = [],
                   aName = [],
                   aRole = [],
                   aGender = [],
                   aCity = [],
                   aNumber = [];

               var Name = that.byId("idname").getTokens();
               var Role = that.byId("idrole").getTokens();
               var Gender = that.byId("idgender").getTokens();
               var City = that.byId("idcity").getTokens();
               var Number = that.byId("idnumber").getTokens();

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
                  
                
                   oBinding.filter(oFinalFilter);
                  
               }
                //     oFinalFilter = [],
                //     aGender = [],
                //     aName = [],

                //     Name = this.byId("idname").getTokens(),
                //     Gender = this.byId("idgender").getTokens();
                // if (!Gender.length > 0) {
                //     !oBinding.filter([]);
                // } else {

                //     for (var i = 0; i < Gender.length; i++) {
                //         aGender.push(new sap.ui.model.Filter({
                //             path: "Zgender",
                //             operator: FilterOperator.EQ,
                //             value1: Gender[i].getText()
                //         }));
                //     }
                //     for (var i = 0; i < Name.length; i++) {
                //         aName.push(new sap.ui.model.Filter({
                //             path: "Name",
                //             operator: FilterOperator.EQ,
                //             value1: Name[i].getText()
                //         }));
                //     }
                //     oFinalFilter.push(


                //         new sap.ui.model.Filter({
                //             and: false,
                //             filters: aGender
                //         }),
                //         new sap.ui.model.Filter({
                //             and: false,
                //             filters: aName
                //         })
                //     );
                //     oBinding.filter(oFinalFilter);
                // }

               
            },

            onfilter: function () {


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
            CancelPress: function () {
                this.byId("idDialog").close();

            },
            SavePress: function () {
                debugger;

                if (this.byId("nam").getSelected(true)) { //Check Box
                    this.byId("idname").setVisible(true);  //Input box

                    this.byId("idDialog").close();

                } else {

                    this.byId("nam").getSelected(false);
                    this.byId("idname").setVisible(false);
                    this.byId("idDialog").close();


                }

                if (this.byId("role").getSelected(true)) {
                    this.byId("idrole").setVisible(true);
                    this.byId("idDialog").close();
                } else {

                    this.byId("role").getSelected(false);
                    this.byId("idrole").setVisible(false);
                    this.byId("idDialog").close();


                }
                if (this.byId("gender").getSelected(true)) {
                    this.byId("idgender").setVisible(true);
                    this.byId("idDialog").close();
                } else {

                    this.byId("gender").getSelected(false);
                    this.byId("idgender").setVisible(false);
                    this.byId("idDialog").close();


                }
                if (this.byId("city").getSelected(true)) {
                    this.byId("idcity").setVisible(true);
                    this.byId("idDialog").close();
                } else {

                    this.byId("city").getSelected(false);
                    this.byId("idcity").setVisible(false);
                    this.byId("idDialog").close();


                }
                if (this.byId("number").getSelected(true)) {
                    this.byId("idnumber").setVisible(true);
                    this.byId("idDialog").close();
                } else {

                    this.byId("number").getSelected(false);
                    this.byId("idnumber").setVisible(false);
                    this.byId("idDialog").close();


                }
            },

            onnamepress: function (evt) {
                var that = this;
                var myView = that.getView();
                // var oDialog = myView.byId("idDialog1");
                this._oDialog = myView.byId("idDialog1");


                if (!this._oDialog) {

                    this._oDialog = sap.ui.xmlfragment(myView.getId(), "idfilters.zfilters.view.Dialog1", this);
                    myView.addDependent(this._oDialog);
                    this._oDialog.open();
                }
                else {

                    that.byId("idDialog1").open();
                }
                // var sQuery = evt.oSource.mProperties._semanticFormValue;
            }
            ,

            CancelPress1: function () {

                if (this.byId("idcomboBox").getValue()) {
                    this.byId("idDialog1").close();
                }
            },

            dialogAftercloseadd: function (oEvent) {

                this._oDialog.destroy();
            },
            dialogAfterclosedit: function (oEvent) {

                this._oDialog.destroy();

            }
        });
    });
