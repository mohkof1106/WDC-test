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
            id: "BM_ZB_tank_level",
			alias: "Zabeel Tank Level",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_total_energy_counter",
			alias: "Zabeel Total Electricity Counter",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "ks_buhasa_tank_level_diff",
            alias: "Khansaheb Tank Level difference",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_total_enerwhere_cost",
			alias: "Zabeel Total Enerwhere Cost",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_historical_cost_aed_per_kwh",
			alias: "Zabeel Historical Cost AED/kWh",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_Current_Electricity_Consumption_kWh",
			alias: "Khansaheb Electricity Consumption",
            dataType: tableau.dataTypeEnum.float		
			
        },{
            id: "ks_current_occupancy",
			alias: "Khansaheb Occupancy",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "BM_ZB_base_kwh",
            alias: "Zabeel Baseline Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_dgs_available_power",
            alias: "Zabeel Available Power",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_total_enerwhere_cost",
            alias: "Amana Total Enerwhere Cost",
            dataType: tableau.dataTypeEnum.float
        },
		{
            id: "ks_buhasa_Solar_Consumption_kWh",
            alias: "Khansaheb Solar Electricity Production",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_Current_Electricity_Consumption_kWh",
            alias: "Zabeel Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_n_minus_1_dg_available_power",
            alias: "Khansaheb N-1@80%",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_tank_level",
            alias: "Khansaheb Tank Level",
            dataType: tableau.dataTypeEnum.float
        },
		        	
		{
            id: "Amana_base_fuel_efficiency_l_per_kwh",
            alias: "Amana Baseline Fuel Efficiency",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_total_enerwhere_cost",
            alias: "Khansaheb Total Enerwhere Cost",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_tank_level",
            alias: "Amana Tank Level",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_fuel_delivered",
            alias: "Zabeel Fuel Delivery",
		    dataType: tableau.dataTypeEnum.float 
		},	
		
		{   id: "BM_ZB_tank_level_diff",
            alias: "Zabeel Tank Level Difference",
            dataType: tableau.dataTypeEnum.float
        },	
			
		{   id: "Amana_Current_Fuel_Consumption_L",
            alias: "Amana Fuel Consumption",
            dataType: tableau.dataTypeEnum.float
        },	{
            id: "Amana_Solar_Consumption_kWh",
            alias: "Amana Solar Electricity Production",
            dataType: tableau.dataTypeEnum.float
        },{
			       
            id: "BM_ZB_n_minus_1_dg_available_power",
            alias: "Zabeel N-1@80%",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_base_kwh",
            alias: "Khansaheb Baseline Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_total_energy_counter",
            alias: "Amana Total Electricity Counter",
            dataType: tableau.dataTypeEnum.float
        },{
        
		   id: "ks_buhasa_base_fuel_efficiency_l_per_kwh",
            alias: "Khansaheb Baseline Fuel Efficiency",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_historical_occupancy",
            alias: "Khansaheb Historical Occupancy",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_base_fuel_efficiency_l_per_kwh",
            alias: "Zabeel Baseline Fuel Efficiency",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_diesel_price",
            alias: "Khansaheb Diesel Price",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_diesel_price",
            alias: "Amana Diesel Price",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_fuel_delivered",
            alias: "Khansaheb Fuel Delivery",
            dataType: tableau.dataTypeEnum.float
        },{					
        
            id: "ks_buhasa_solar_energy_counter",
            alias: "Khansaheb Solar Electricity Counter",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_historical_cost_aed_per_kwh",
            alias: "Amana Historical Cost AED/kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_solar_energy_counter",
            alias: "Zabeel Solar Electricity Counter",
            dataType: tableau.dataTypeEnum.float
        },	{
            id: "Amana_base_kwh",
            alias: "Amana Baseline Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_historical_cost_aed_per_kwh",
            alias: "Khansaheb Historical Cost AED/kWh",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_n_minus_1_dg_available_power",
            alias: "Amana N-1@80%",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_Current_Electricity_Consumption_kWh",
            alias: "Amana Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },{		
     		id: "Amana_dgs_available_power",
            alias: "Amana Available Power",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_diesel_price",
            alias: "Zabeel Diesel Price",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_fuel_delivered",
            alias: "Amana Fuel Delivery",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_dgs_available_power",
            alias: "Khansaheb Available Power",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_historical_kwh",
            alias: "Khansaheb Historical Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "BM_ZB_Solar_Consumption_kWh",
            alias: "Zabeel Solar Electricity Production",
            dataType: tableau.dataTypeEnum.float
        },	
		
		{   id: "Amana_tank_level_diff",
            alias: "Amana Tank Level Difference",
            dataType: tableau.dataTypeEnum.float
        },	
			
		{   id: "ks_buhasa_Current_Fuel_Consumption_L",
            alias: "Khansaheb Fuel Consumption",
            dataType: tableau.dataTypeEnum.float
        },	{
            id: "BM_ZB_historical_kwh",
            alias: "Zabeel Historical Electricity Consumption",
            dataType: tableau.dataTypeEnum.float
        },
       {
            id: "BM_ZB_Current_Fuel_Consumption_L",
            alias: "Zabeel Fuel Consumption",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_solar_energy_counter",
            alias: "Amana Solar Electricity Counter",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_total_energy_counter",
            alias: "Khansaheb Electricity Counter",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_enerwhere_invoice",
            alias: "KS Enerwhere Invoice",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_equipment_cost",
            alias: "KS Equipment Cost",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_equipment_cost",
            alias: "ZB Equipment Cost",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_enerwhere_invoice",
            alias: "ZB Enerwhere invice",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_number_of_days",
            alias: "KS Number of days",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_number_of_day",
            alias: "AL Number of days",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_number_of_days",
            alias: "ZB Number of days",
            dataType: tableau.dataTypeEnum.float
        }];

        var tableSchema = {
            id: "Amana_Khansaheb_ZabeelDeviceUniqueID",
            alias: "Amana Khansaheb Zabeel Device Unique ID",
            columns: cols
        };

		//console.log('timestamp  ');
		
        schemaCallback([tableSchema]);
    };
   
    myConnector.getData = function(table, doneCallback) {
		
		plant_data=JSON.parse( $.ajax({
			url:"https://api.enerwhere-data.com/mongo/databyplant/am_ks_mx_energy_report/?accesskey=4E9135480112470734D98AF67FBA6B7E",
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
            tableau.connectionName = "Amana Khansaheb Zabeel Report Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
