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
            id: "ZN_CP_n_minus_1_dg_available_power",
			alias: "Central N-1@80%",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_Current_Fuel_Consumption_L",
			alias: "South Fuel Consumption",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "ZN_NP_historical_kwh",
            alias: "South Historical kWh",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_tank_level_diff",
			alias: "Central Tank Level difference",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_dgs_available_power",
			alias: "South Available Power",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_tank_level",
			alias: "North Tank Level",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_base_kwh",
			alias: "North Baseline Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "ZN_NP_dgs_available_power",
            alias: "North Available Power",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_historical_kwh",
            alias: "South Historical Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_solar_energy_counter",
            alias: "North Solar Energy Counter",
            dataType: tableau.dataTypeEnum.float
        },
		{
            id: "ZN_NP_Solar_Consumption_kWh",
            alias: "North Solar Electricity Production",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_historical_kwh",
            alias: "Central Historical Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_n_minus_1_dg_available_power",
            alias: "North N-1@80%",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_base_fuel_efficiency_l_per_kwh",
            alias: "South Baseline Fuel Efficiency",
            dataType: tableau.dataTypeEnum.float
        },
		
		{
            id: "ZN_CP_Solar_Consumption_kWh",
            alias: "Central Solar Electricity Production",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_total_enerwhere_cost",
            alias: "Central Total Enerwhere Cost",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_fuel_delivered",
            alias: "North Fuel Delivery",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_ZN_SP_kW_Daily_Minimum",
            alias: "DG_load_ZN_SP_Daily_Minimum (kW)",
		dataType: tableau.dataTypeEnum.float 
		},
			
		{
            id: "ZN_SP_tank_level_diff",
            alias: "South Tank Level Difference",
            dataType: tableau.dataTypeEnum.float
        },	
			
		{
            id: "ZN_NP_Current_Fuel_Consumption_L",
            alias: "North Fuel Consumption",
            dataType: tableau.dataTypeEnum.float
        },	{
            id: "ZN_SP_Solar_Consumption_kWh",
            alias: "South Solar Electricity Production",
            dataType: tableau.dataTypeEnum.float
        },
			{
            id: "ZN_NP_total_enerwhere_cost",
            alias: "North Total Enerwhere Cost",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_diesel_price",
            alias: "North Diesel Price",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_historical_cost_aed_per_kwh",
            alias: "North Historical Cost AED/kWh",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_Current_Fuel_Consumption_L",
            alias: "Central Fuel Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_diesel_price",
            alias: "Central Diesel Price",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_base_fuel_efficiency_l_per_kwh",
            alias: "North Baseline Fuel Efficiency",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_dgs_available_power",
            alias: "Central Available Power",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_base_fuel_efficiency_l_per_kwh",
            alias: "Central Baseline Fuel Efficiency",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_diesel_price",
            alias: "South Diesel Price",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_fuel_delivered",
            alias: "Central Fuel Delivery",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_total_enerwhere_cost",
            alias: "South Total Enerwhere Cost",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_historical_cost_aed_per_kwh",
            alias: "Central Historical Cost AED/kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_tank_level",
            alias: "South Tank Level",
            dataType: tableau.dataTypeEnum.float
        },	{
            id: "ZN_SP_base_kwh",
            alias: "South Baseline Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_historical_cost_aed_per_kwh",
            alias: "South Historical Cost AED/kWh",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_n_minus_1_dg_available_power",
            alias: "South N-1@80%",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_Current_Electricity_Consumption_kWh",
            alias: "Central Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_fuel_delivered",
            alias: "South Fuel Delivery",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_total_energy_counter",
            alias: "North Total Electricity Counter",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_Current_Electricity_Consumption_kWh",
            alias: "North Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_Current_Electricity_Consumption_kWh",
            alias: "South Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_tank_level",
            alias: "Central Tank Level",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_base_kwh",
            alias: "Central Baseline Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },
		
		
		{
            id: "ZN_NP_tank_level_diff",
            alias: "North Tank Level Difference",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_total_energy_counter",
            alias: "South Electricity Counter",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_solar_energy_counter",
            alias: "South Solar Electricity Counter",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_total_energy_counter",
            alias: "Central Electricity Counter",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_solar_energy_counter",
            alias: "Central Solar Electricity Counter",
            dataType: tableau.dataTypeEnum.float
        		
        }];

        var tableSchema = {
            id: "NuraiDeviceUniqueID",
            alias: "Nurai Device Unique ID",
            columns: cols
        };

		//console.log('timestamp  ');
		
        schemaCallback([tableSchema]);
    };
   
    myConnector.getData = function(table, doneCallback) {
		
		plant_data=JSON.parse( $.ajax({
			url:"https://api.enerwhere-data.com/mongo/databyplant/nurai_energy_report/",
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
            tableau.connectionName = "Nurai Report Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
