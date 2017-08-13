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
            id: "Rev1_ERS_kWh",
			alias: "ERS Total",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "solar1_ERS_kWh",
			alias: "ERS Solar",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "MDB3_SSV_kWh",
            alias: "SSV MDB3",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "CVM1_Kitchen_SSV_kWh",
			alias: "SSV Kitchen & Laundry",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Solar_SSV_kWh",
			alias: "SSV Solar",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "MDB2_SSV_kWh",
			alias: "SSV MDB2",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Mic2_SSV_kWh",
			alias: "SSV Total",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Hourly_Peak_load_ERS_kW",
			alias: "ERS Total Peak",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "total_Hourly_Peak_load_SSV_kW",
			alias: "SSV Total Peak",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_Ambient_Temperature_degC",
			alias: "ERS Ambient Temperature",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Ambient_Temperature_degC",
			alias: "SSV Ambient Temperature",
            dataType: tableau.dataTypeEnum.float
        }];

        var tableSchema = {
            id: "SSV_ERS_hourlyDeviceUniqueID",
            alias: "SSV_ERS hourly Device Unique ID",
            columns: cols
        };

		//console.log('timestamp  ');
		
        schemaCallback([tableSchema]);
    };
   
    myConnector.getData = function(table, doneCallback) {
		
		plant_data=JSON.parse( $.ajax({
			url:"http://192.168.2.31:8000/mongo/databyplant/SBY_hourly/",
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
            tableau.connectionName = "SSV_ERS hourly Field Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
