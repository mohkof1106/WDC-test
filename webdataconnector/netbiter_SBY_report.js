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
            id: "SSV_Mdb3_Consumption_kWh",
			alias: "SSV MDB3",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_solar_energy_counter",
			alias: "SSV Solar Counter",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "SSV_tank_level",
            alias: "SSV Tank Level",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_tank_level",
			alias: "ERS Tank Level",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_kitchen_and_laundry_Consumption_kWh",
			alias: "SSV Kitchen & Laundry",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_kitchen_and_laundry_energy_counter",
			alias: "SSV Kitchen & Laundry Counter",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_dgs_available_power",
			alias: "SSV DG Availble Power",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_diesel_price",
			alias: "SSV Diesel Price",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_mdb3_energy_counter",
			alias: "SSV MDB3 Counter",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_fuel_delivered",
			alias: "SSV Fuel Delivery",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_solar_energy_counter",
			alias: "ERS Solar Counter",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_base_fuel_efficiency_l_per_kwh",
			alias: "SSV Baseline Fuel Efficiency",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_total_energy_counter",
			alias: "ERS Counter",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_historical_cost_aed_per_kwh",
			alias: "SSV Historical Unit Price",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_Solar_Consumption_kWh",
			alias: "ERS Solar",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_tank_level_diff",
			alias: "ERS Tank Level Difference",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_base_fuel_efficiency_l_per_kwh",
			alias: "ERS Baseline Fuel Efficiency",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Current_Electricity_Consumption_kWh",
			alias: "SSV Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_tank_level_diff",
			alias: "SSV Tank Level Difference",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_base_kwh",
			alias: "ERS Baseline Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_Current_Electricity_Consumption_kWh",
			alias: "ERS Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Mdb2_Consumption_kWh",
			alias: "SSV MDB2",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Solar_Consumption_kWh",
			alias: "SSV Solar",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Current_Fuel_Consumption_L",
			alias: "SSV Fuel Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_fuel_delivered",
			alias: "ERS Fuel Delivery",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_historical_cost_aed_per_kwh",
			alias: "ERS Historical Unit Price",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_base_kwh",
			alias: "SSV Baseline Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_mdb2_energy_counter",
			alias: "SSV MDB2 Counter",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_n_minus_1_dg_available_power",
			alias: "SSV N-1@80%",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_n_minus_1_dg_available_power",
			alias: "ERS N-1@80%",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_Current_Fuel_Consumption_L",
			alias: "ERS Fuel Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_diesel_price",
			alias: "ERS Diesel Price",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_dgs_available_power",
			alias: "ERS DG Availble Power",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_total_energy_counter",
			alias: "SSV Total Counter",
            dataType: tableau.dataTypeEnum.float
        }];

        var tableSchema = {
            id: "SSV_ERS_reportDeviceUniqueID",
            alias: "SSV_ERS report Device Unique ID",
            columns: cols
        };

		//console.log('timestamp  ');
		
        schemaCallback([tableSchema]);
    };
   
    myConnector.getData = function(table, doneCallback) {
		
		plant_data=JSON.parse( $.ajax({
			url:"https://api.enerwhere-data.com/mongo/databyplant/SBY_energy_report/?accesskey=4E9135480112470734D98AF67FBA6B7E",
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
            tableau.connectionName = "SSV_ERS report Field Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
