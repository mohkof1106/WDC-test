(function() {
	
	
	// Create the connector object
    var myConnector = tableau.makeConnector();
	
    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
		
	
        var cols = [{
            id: "date_time",
			alias: "Date Time",
            dataType: tableau.dataTypeEnum.datetime
        },{
            id: "Rev1_ZN_NP_kWh",
			alias: "Rev1 ZN NP Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "Rev1_ZN_SP_kWh",
            alias: " Rev1 ZN SP Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev2_ZN_NP_kWh",
            alias: "Rev2_ZN_NP Consumed Active Energy(kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev2_ZN_SP_kWh",
            alias: "Rev2_ZN_SP Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev1_ZN_CP_kWh",
            alias: "Rev1_ZN_CP Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev2_ZN_CP_kWh",
            alias: "Rev2_ZN_CP Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "inv1_ZN_CP_kWh",
            alias: "inv1 ZN CP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SUB_M3_STP_ZN_CP_kWh",
            alias: "SUB M3 STP ZN CP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SUB_M2_Pump_ZN_CP_kWh",
            alias: "SUB M2 Pump ZN CP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SUB_M1_STP_ZN_CP_kWh",
            alias: "SUB M1 STP ZN_CP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "inv2_ZN_SP_kWh",
            alias: "inv2 ZN SP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SUB_M1_ZN_NP_kWh",
            alias: "SUB M1 ZN NP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "inv3_ZN_CP_kWh",
            alias: "inv3 ZN CP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "inv1_ZN_SP_kWh",
            alias: "inv1 ZN SP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG2_ZN_CP_kWh",
            alias: "DG2 ZN_CP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG1_ZN_CP_kWh",
            alias: "DG1 ZN_CP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG3_ZN_CP_kWh",
            alias: "DG3 ZN_CP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG4_Client_ZN_SP_kWh",
            alias: "DG4 ZN_SP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG1_ZN_SP_kWh",
            alias: "DG1 ZN_SP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG2_ZN_SP_kWh",
            alias: "DG2 ZN_SP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG4_ZN_CP_kWh",
            alias: "DG4 ZN_CP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG4_ZN_NP_kWh",
            alias: "DG4 ZN_NP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG3_ZN_SP_kWh",
            alias: "DG3 ZN_SP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG1_ZN_NP_kWh",
            alias: "DG1 ZN_NP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG2_ZN_NP_kWh",
            alias: "DG2 ZN_NP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG3_ZN_NP_kWh",
            alias: "DG3 ZN_NP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_DG1_Coolant_Temperature_degC",
            alias: "ZN_CP DG1 Coolant Temperature (degC)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_DG2_Coolant_Temperature_degC",
            alias: "ZN_CP DG2 Coolant Temperature (degC)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_DG3_Coolant_Temperature_degC",
            alias: "ZN_CP DG3 Coolant Temperature (degC)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_DG1_Coolant_Temperature_degC",
            alias: "ZN_NP DG1 Coolant Temperature (degC)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_DG2_Coolant_Temperature_degC",
            alias: "ZN_NP DG2 Coolant Temperature (degC)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_DG3_Coolant_Temperature_degC",
            alias: "ZN_NP DG3 Coolant Temperature (degC)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_DG1_Coolant_Temperature_degC",
            alias: "ZN_SP DG1 Coolant Temperature (degC)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_DG2_Coolant_Temperature_degC",
            alias: "ZN_SP DG2 Coolant Temperature (degC)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_DG3_Coolant_Temperature_degC",
            alias: "ZN_SP DG3 Coolant Temperature (degC)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_Client_DG4_Coolant_Temperature_degC",
            alias: "ZN_SP DG4 Coolant Temperature (degC)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_Ambient_Temperature_degC",
            alias: "ZN_SP Ambient Temperature (degC)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_Ambient_Temperature_degC",
            alias: "ZN_CP Ambient Temperature (degC)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_Ambient_Temperature_degC",
            alias: "ZN_NP Ambient Temperature (degC)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Total_Hourly_Peak_load_ZN_SP_kW",
            alias: "ZN_SP Total_Hourly_Peak_load (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Total_Hourly_Peak_load_ZN_CP_kW",
            alias: "ZN_CP Total_Hourly_Peak_load (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Total_Hourly_Peak_load_ZN_NP_kW",
            alias: "ZN_NP Total_Hourly_Peak_load (kW)",
            dataType: tableau.dataTypeEnum.float
        },
		
		{
            id: "inv2_ZN_CP_kWh",
            alias: "inv2 ZN CP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        }];

        var tableSchema = {
            id: "NuraiHourlyDeviceUniqueID",
            alias: "Nurai Hourly Device Unique ID",
            columns: cols
        };

		//console.log('timestamp  ');
		
        schemaCallback([tableSchema]);
    };
   
    myConnector.getData = function(table, doneCallback) {
		
		plant_data=JSON.parse( $.ajax({
			url:"https://api.enerwhere-data.com/mongo/databyplant/nurai_hourly/?accesskey=4E9135480112470734D98AF67FBA6B7E",
			dataType: "json", 			
			async: false
			}).responseText);
			
		
	//console.log('base_calc '+JSON.stringify(base_calc))
	
	
		
            table.appendRows(plant_data);
            doneCallback();
		
		
       
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "Nurai Hourly Field Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
