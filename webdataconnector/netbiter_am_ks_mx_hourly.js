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
            id: "solar1_ks_buhasa_kWh",
			alias: "KS Solar",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev1_Amana_kWh",
			alias: "AL Rev1",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "mic2_ks_buhasa_kWh",
            alias: "KS DG",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev3_Amana_kWh",
			alias: "AL Rev3",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev2_Amana_kWh",
			alias: "AL Rev2",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "solar1_BM_ZB_kWh",
			alias: "ZB Solar",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev1_BM_ZB_kWh",
			alias: "ZB Rev1",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "solar1_Amana_kWh",
            alias: " AL Solar",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "Amana_Ambient_Temperature_degC",
            alias: "AL Ambient Temperature",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "ks_buhasa_Ambient_Temperature_degC",
            alias: " KS Ambient Temperature",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "BM_ZB_Ambient_Temperature_degC",
            alias: " ZB Ambient Temperature",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "total_Hourly_Peak_load_Amana_kW",
            alias: " AL Total Peak",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "total_Hourly_Peak_load_ks_buhasa_kW",
            alias: " KS Total Peak",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "total_Hourly_Peak_load_BM_ZB_kW",
            alias: " ZB Total Peak",
            dataType: tableau.dataTypeEnum.float
        }];

        var tableSchema = {
            id: "am_ks_mx_hourlyDeviceUniqueID",
            alias: "Amana Khansaheb Zabeel hourly Device Unique ID",
            columns: cols
        };

		//console.log('timestamp  ');
		
        schemaCallback([tableSchema]);
    };
   
    myConnector.getData = function(table, doneCallback) {
		
		plant_data=JSON.parse( $.ajax({
			url:"http://192.168.2.31:8000/mongo/databyplant/am_ks_mx_hourly/",
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
            tableau.connectionName = "Amana Khansaheb Zabeel hourly Field Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
