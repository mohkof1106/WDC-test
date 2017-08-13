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
            id: "CVM1_Kitchen_SSV_kW_Peak_Daily",
			alias: "SSV_Kitchen_Daily_Peak(kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "MDB2_SSV_kW_Peak_Daily",
			alias: "SSV_MDB2_Daily_Peak(kW)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "MDB2_SSV_kWh",
            alias: " SSV MDB2 Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Daily_Peak_load_ERS_kW",
			alias: "ERS Total Daily Peak load (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_irradiation",
			alias: "SSV_expected_Daily_kWh_per_m2_from_irradiation",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev1_ERS_kWh",
			alias: "ERS Rev1 Consumed Active Energy  (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_diesel_price",
			alias: "SSV_diesel_price (AED/l)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "ERS_dgs_available_power",
            alias: "ERS_dgs_available_power (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Mic2_SSV_kWh",
            alias: " SSV Mic2 Consumed Active Energy  (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_daily_fuel_delivered_actual",
            alias: "SSV_daily_fuel_delivered_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_n_minus_1_dg_available_power",
            alias: "SSV_n_minus_1_dg_available_power (kW)",
            dataType: tableau.dataTypeEnum.float
        },
		{
            id: "DG_load_ERS_kW_Daily_Peak",
            alias: "ERS DG Daily Peak load (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_SSV_kW_Daily_Peak",
            alias: "SSV DG Daily Peak load (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_SSV_kW_Daily_Minimum",
            alias: "SSV DG Daily Minimum load (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "solar1_ERS_kWh",
            alias: "ERS Solar Produced Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "MDB3_SSV_kW_Peak_Daily",
			alias: "SSV_MDB3_Daily_Peak(kW)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "MDB3_SSV_kWh",
            alias: " SSV MDB3 Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "CVM1_Kitchen_SSV_kWh",
            alias: " SSV Kitchen Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },		
		{
            id: "SSV_ideal_fuel_efficiency",
            alias: "SSV_ideal_fuel_efficiency (l/kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_ideal_fuel_efficiency",
            alias: "ERS_ideal_fuel_efficiency (l/kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_dgs_available_power",
            alias: "SSV_dgs_available_power(kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_daily_fuel_delivered_actual",
            alias: "ERS_daily_fuel_delivered_actual(l)",
		dataType: tableau.dataTypeEnum.float 
		},			
		{
            id: "DG_load_ERS_kW_Daily_Minimum",
            alias: "ERS DG Daily Minimum load (kW)",
            dataType: tableau.dataTypeEnum.float
        },	{
            id: "Solar_SSV_kWh",
            alias: "SSV Solar Produced Active Energy  (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Daily_Peak_load_SSV_kW",
            alias: "SSV Total Daily Peak load (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_n_minus_1_dg_available_power",
            alias: "ERS_n_minus_1_dg_available_power (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_daily_fuel_consumed_actual",
            alias: "ERS_daily_fuel_consumed_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_daily_fuel_consumed_actual",
            alias: "SSV_daily_fuel_consumed_actual(l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_diesel_price",
            alias: "ERS_diesel_price (AED/l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Daily_Peak_solar_SSV_kW",
            alias: "SSV Solar Peak",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Daily_Peak_solar_ERS_kW",
            alias: "ERS Solar Peak",
            dataType: tableau.dataTypeEnum.float
        }];

        var tableSchema = {
            id: "SSV_ERSDeviceUniqueID",
            alias: "SSV_ERS Device Unique ID",
            columns: cols
        };

		//console.log('timestamp  ');
		
        schemaCallback([tableSchema]);
    };
   
    myConnector.getData = function(table, doneCallback) {
		
		plant_data=JSON.parse( $.ajax({
			url:"http://192.168.2.31:8000/mongo/databyplant/SBY/",
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
            tableau.connectionName = "SSV_ERS Field Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
