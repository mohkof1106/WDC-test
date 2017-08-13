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
        },{
            id: "ZN_CP_n_minus_1_dg_available_power",
			alias: "ZN CP n minus 1 dg available power",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "Rev1_ZN_SP_kWh",
            alias: " Rev1 ZN SP Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_ZN_CP_kW_Daily_Peak",
			alias: "DG load ZN_CP Daily Peak (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "inv2_ZN_SP_kWh",
			alias: "inv2 ZN SP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "inv1_ZN_SP_kWh",
			alias: "inv1 ZN SP kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_expected_Daily_kWh_per_m2_from_irradiation",
			alias: "ZN CP expected Daily kWh per m2 from irradiation",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "total_Daily_Minimum_load_Nurai_kW",
            alias: " total Daily Minimum load Nurai (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_Nurai_kW_Daily_Minimum",
            alias: " DG Daily Minimum load Nurai (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Daily_Peak_load_ZN_CP_kW",
            alias: "total Daily Peak load ZN_CP (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_Nurai_kW_Daily_Peak",
            alias: "DG load Nurai Daily Peak (kW)",
            dataType: tableau.dataTypeEnum.float
        },
		{
            id: "ZN_CP_daily_fuel_delivered_actual",
            alias: "ZN_CP daily fuel delivered actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_ZN_CP_kW_Daily_Minimum",
            alias: "DG_load_ZN_CP_Daily_Minimum (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SUB_M1_ZN_NP_kWh",
            alias: "SUB_M1_ZN_NP (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_dgs_available_power",
            alias: "ZN_NP_dgs_available_power (kW)",
            dataType: tableau.dataTypeEnum.float
        },
		
		{
            id: "ZN_SP_daily_fuel_consumed_actual",
            alias: "ZN_SP_daily_fuel_consumed_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev2_ZN_NP_kWh",
            alias: "Rev2_ZN_NP Consumed Active Energy(kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_n_minus_1_dg_available_power",
            alias: "ZN_NP_n_minus_1_dg_available_power (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_ZN_SP_kW_Daily_Minimum",
            alias: "DG_load_ZN_SP_Daily_Minimum (kW)",
		dataType: tableau.dataTypeEnum.float 
		},
			
		{
            id: "inv1_ZN_CP_kWh",
            alias: "inv1_ZN_CP Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },	
			
		{
            id: "DG_load_ZN_NP_kW_Daily_Minimum",
            alias: "DG_load_ZN_NP Daily_Minimum (kW)",
            dataType: tableau.dataTypeEnum.float
        },	{
            id: "ZN_SP_ideal_fuel_efficiency",
            alias: "ZN_SP_ideal_fuel_efficiency (l/kWh)",
            dataType: tableau.dataTypeEnum.float
        },
			{
            id: "SUB_M2_Pump_ZN_CP_kWh",
            alias: "SUB_M2_Pump_ZN_CP Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Daily_Peak_load_Nurai_kW",
            alias: "total_Daily_Peak_load_Nurai (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SUB_M1_ZN_NP_kW_Peak_Daily",
            alias: "SUB_M1_ZN_NP Daily Peak (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SUB_M3_STP_ZN_CP_kW_Peak_Daily",
            alias: "SUB_M3_STP_ZN_CP Daily Peak (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SUB_M2_Pump_ZN_CP_kW_Peak_Daily",
            alias: "SUB_M2_Pump_ZN_CP Daily Peak (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_ideal_fuel_efficiency",
            alias: "ZN_CP_ideal_fuel_efficiency (l/kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_ideal_fuel_efficiency",
            alias: "ZN_NP_ideal_fuel_efficiency (l/kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_daily_fuel_delivered_actual",
            alias: "ZN_SP_daily_fuel_delivered_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SUB_M3_STP_ZN_CP_kWh",
            alias: "SUB_M3_STP_ZN_CP Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_daily_fuel_consumed_actual",
            alias: "ZN_CP_daily_fuel_consumed_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_diesel_price",
            alias: "ZN_NP_diesel_price (AED/l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SUB_M1_STP_ZN_CP_kWh",
            alias: "SUB_M1_STP_ZN_CP Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_diesel_price",
            alias: "ZN_CP_diesel_price (AED/l)",
            dataType: tableau.dataTypeEnum.float
        },	{
            id: "ZN_NP_daily_fuel_delivered_actual",
            alias: "ZN_NP_daily_fuel_delivered_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_ZN_SP_kW_Daily_Peak",
            alias: "DG_load_ZN_SP Daily Peak (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_NP_daily_fuel_consumed_actual",
            alias: "ZN_NP_daily_fuel_consumed_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Solar1_ZN_SP_kWh",
            alias: "Solar1_ZN_SP Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_dgs_available_power",
            alias: "ZN_CP_dgs_available_power (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "inv2_ZN_CP_kWh",
            alias: "inv2_ZN_CP Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Daily_Peak_load_ZN_NP_kW",
            alias: "total_Daily_Peak_load_ZN_NP (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_diesel_price",
            alias: "ZN_SP_diesel_price (AED/l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev2_ZN_SP_kWh",
            alias: "Rev2_ZN_SP Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SUB_M1_STP_ZN_CP_kW_Peak_Daily",
            alias: "SUB_M1_STP_ZN_CP_kW_Daily Peak (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_minimum_agree_tank_range_days",
            alias: "ZN_SP minimum agree tank range (days)",
            dataType: tableau.dataTypeEnum.float
        },
		{
            id: "ZN_SP_existing_fuel_range_days",
            alias: "ZN_SP existing fuel range (days)",
            dataType: tableau.dataTypeEnum.float
        },	{
            id: "ZN_NP_minimum_agree_tank_range_days",
            alias: "ZN_NP minimum agree tank range (days)",
            dataType: tableau.dataTypeEnum.float
        },
		{
            id: "ZN_NP_existing_fuel_range_days",
            alias: "ZN_NP existing fuel range (days)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_minimum_agree_tank_range_days",
            alias: "ZN_CP minimum agree tank range (days)",
            dataType: tableau.dataTypeEnum.float
        },
		{
            id: "ZN_CP_existing_fuel_range_days",
            alias: "ZN_CP existing fuel range (days)",
            dataType: tableau.dataTypeEnum.float
        },
		{
            id: "ZN_SP_dgs_available_power",
            alias: "ZN_SP_dgs_available_power (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_SP_n_minus_1_dg_available_power",
            alias: "ZN_SP_n_minus_1_dg_available_power (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "inv3_ZN_CP_kWh",
            alias: "inv3_ZN_CP Consumed Active Energy (kWh)",
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
            id: "total_Daily_Peak_load_ZN_SP_kW",
            alias: "total_Daily_Peak_load_ZN_SP (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_ZN_NP_kW_Daily_Peak",
            alias: "DG_load_ZN_NP Daily Peak (kW)",
            dataType: tableau.dataTypeEnum.float
        		
        },{
            id: "ZN_NP_daily_fuel_level_mid_night",
            alias: "NP Fuel",
            dataType: tableau.dataTypeEnum.float
        		
        },{
            id: "ZN_CP_daily_fuel_level_mid_night",
            alias: "CP Fuel",
            dataType: tableau.dataTypeEnum.float
        		
        },{
            id: "ZN_SP_daily_fuel_level_mid_night",
            alias: "SP Fuel",
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
			url:"https://api.enerwhere-data.com/mongo/databyplant/nurai/?accesskey=4E9135480112470734D98AF67FBA6B7E",
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
            tableau.connectionName = "Nurai Field Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
