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
            id: "DG_load_BM_ZB_kW_Daily_Minimum",
			alias: "DG_load_BM_ZB_Daily_Minimum (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev1_Amana_kWh",
			alias: "Rev1_Amana Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "DG_load_BM_ZB_kW_Daily_Peak",
            alias: " DG_load_BM_ZB_Daily_Peak (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_ideal_fuel_efficiency",
			alias: "ks_buhasa_ideal_fuel_efficiency (l/kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "mic2_ks_buhasa_kWh",
			alias: "mic2_ks_buhasa Consumed Active Energy(kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_tk12_buhasa_daily_fuel_consumed_actual",
			alias: "ks_tk12_buhasa_daily_fuel_consumed_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_daily_fuel_consumed_actual",
			alias: "BM_ZB_daily_fuel_consumed_actual (l)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "ks_buhasa_dgs_available_power",
            alias: " ks_buhasa_dgs_available_power (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Daily_Peak_load_BM_ZB_kW",
            alias: " total_Daily_Peak_load_BM_ZB (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_dgs_available_power",
            alias: "BM_ZB_DGs_available_power(kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_tk12_buhasa_daily_fuel_delivered_actual",
            alias: "ks_tk12_buhasa_daily_fuel_delivered_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },
		{
            id: "Amana_daily_fuel_consumed_actual",
            alias: "Amana_daily_fuel_consumed_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_ks_buhasa_kW_Daily_Minimum",
            alias: "DG_load_ks_buhasa_Daily_Minimum (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "solar1_ks_buhasa_kWh",
            alias: "solar1_ks_buhasa Consumed Active Energy(kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Daily_Peak_load_Amana_kW",
            alias: "total_Daily_Peak_load_Amana (kW)",
            dataType: tableau.dataTypeEnum.float
        },
		
		{
            id: "BM_ZB_n_minus_1_dg_available_power",
            alias: "BM_ZB_n_minus_1_dg_available_power (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_Amana_kW_Daily_Minimum",
            alias: "DG_load_Amana_kW_Daily_Minimum(kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_daily_fuel_delivered_actual",
            alias: "BM_ZB_daily_fuel_delivered_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev2_Amana_kWh",
            alias: "Rev2_Amana Consumed Active Energy (kWh)",
		dataType: tableau.dataTypeEnum.float 
		},			
		{
            id: "solar1_BM_ZB_kWh",
            alias: "solar1_BM_ZB Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },	
			
		{
            id: "ks_buhasa_n_minus_1_dg_available_power",
            alias: "ks_buhasa_n_minus_1_dg_available_power (kW)",
            dataType: tableau.dataTypeEnum.float
        },	{
            id: "ks_buhasa_diesel_price",
            alias: "ks_buhasa_diesel_price (AED/l)",
            dataType: tableau.dataTypeEnum.float
        },
			{
            id: "SUB_M1_STP_ks_buhasa_kW_Peak_Daily",
            alias: "SUB_M1_STP_ks_buhasa_Peak_Daily (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev1_BM_ZB_kWh",
            alias: "Rev1_BM_ZB Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_ks_buhasa_kW_Daily_Peak",
            alias: "DG_load_ks_buhasa_Daily_Peak (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_n_minus_1_dg_available_power",
            alias: "Amana_n_minus_1_dg_available_power (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_tk14_buhasa_daily_fuel_delivered_actual",
            alias: "ks_tk14_buhasa_daily_fuel_delivered_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Daily_Peak_load_ks_buhasa_kW",
            alias: "total_Daily_Peak_load_ks_buhasa (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "DG_load_Amana_kW_Daily_Peak",
            alias: "DG_load_Amana_Daily_Peak(kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_dgs_available_power",
            alias: "Amana_dgs_available_power (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_diesel_price",
            alias: "Amana_diesel_price (AED/l)",
            dataType: tableau.dataTypeEnum.float
        },	{
            id: "Amana_daily_fuel_delivered_actual",
            alias: "Amana_daily_fuel_delivered_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_diesel_price",
            alias: "BM_ZB_diesel_price (AED/l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_tk14_buhasa_daily_fuel_consumed_actual",
            alias: "ks_tk14_buhasa_daily_fuel_consumed_actual (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev3_Amana_kWh",
            alias: "Rev3_Amana Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Amana_ideal_fuel_efficiency",
            alias: "Amana_ideal_fuel_efficiency (l/kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "BM_ZB_ideal_fuel_efficiency",
            alias: "BM_ZB_ideal_fuel_efficiency (l/kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "solar1_Amana_kWh",
            alias: "solar1_Amana (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ks_buhasa_expected_Daily_kWh_per_m2_from_irradiation",
            alias: "ks_buhasa_expected_Daily_kWh_per_m2_from_irradiation",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Daily_solar_peak_BM_ZB_kW",
            alias: "ZB Solar Peak",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Daily_solar_peak_ks_buhasa_kW",
            alias: "KS Solar Peak",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Daily_solar_peak_Amana_kW",
            alias: "AL Solar Peak",
            dataType: tableau.dataTypeEnum.float
        }];

        var tableSchema = {
            id: "am_ks_mxDeviceUniqueID",
            alias: "Amana Khansaheb Zabeel Device Unique ID",
            columns: cols
        };

		//console.log('timestamp  ');
		
        schemaCallback([tableSchema]);
    };
   
    myConnector.getData = function(table, doneCallback) {
		
		plant_data=JSON.parse( $.ajax({
			url:"http://192.168.2.31:8000/mongo/databyplant/am_ks_mx/",
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
            tableau.connectionName = "Amana Khansaheb Zabeel Field Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
