(function() {
	
	
	// Create the connector object
    var myConnector = tableau.makeConnector();
	
    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
		
	
        var cols = [{
            id: 'ZN_SP_name',
			alias: 'ZN_SP_name',
            dataType: tableau.dataTypeEnum.string
        },{
            id: 'ZN_SP_capacity',
			alias: 'ZN_SP_capacity',
            dataType: tableau.dataTypeEnum.string
        },{
            id: 'ZN_SP_cost_per_month',
			alias: 'ZN_SP cost per month (AED)',
            dataType: tableau.dataTypeEnum.string

        },{
            id: 'ZN_SP_asset_unit',
			alias: 'ZN_SP_asset_unit',
            dataType: tableau.dataTypeEnum.string
        },{
            id: 'ZN_SP_fleet_number',
			alias: 'ZN_SP fleet number',
            dataType: tableau.dataTypeEnum.string
        },{
            id: 'ZN_SP_quantity',
			alias: 'ZN_SP_quantity',
            dataType: tableau.dataTypeEnum.string

        },{
            id: 'ZN_SP_length',
			alias: 'ZN_SP_length',
            dataType: tableau.dataTypeEnum.string

        },{
            id: 'ZN_CP_name',
			alias: 'ZN_CP_name',
            dataType: tableau.dataTypeEnum.string
        },{
            id: 'ZN_CP_capacity',
			alias: 'ZN_CP_capacity',
            dataType: tableau.dataTypeEnum.string

        },{
            id: 'ZN_CP_cost_per_month',
			alias: 'ZN_CP cost per month (AED)',
            dataType: tableau.dataTypeEnum.string

        },{
            id: 'ZN_CP_asset_unit',
			alias: 'ZN_CP_asset_unit',
            dataType: tableau.dataTypeEnum.string
        },{
            id: 'ZN_CP_fleet_number',
			alias: 'ZN_CP fleet number',
            dataType: tableau.dataTypeEnum.string
        },{
            id: 'ZN_CP_quantity',
			alias: 'ZN_CP_quantity',
            dataType: tableau.dataTypeEnum.string

        },{
            id: 'ZN_CP_length',
			alias: 'ZN_CP_length',
            dataType: tableau.dataTypeEnum.string

        },{
            id: 'ZN_NP_name',
			alias: 'ZN_NP_name',
            dataType: tableau.dataTypeEnum.string
        },{
            id: 'ZN_NP_capacity',
			alias: 'ZN_NP_capacity',
            dataType: tableau.dataTypeEnum.string

        },{
            id: 'ZN_NP_cost_per_month',
			alias: 'ZN_NP cost per month (AED)',
            dataType: tableau.dataTypeEnum.string

        },{
            id: 'ZN_NP_asset_unit',
			alias: 'ZN_NP_asset_unit',
            dataType: tableau.dataTypeEnum.string
        },{
            id: 'ZN_NP_fleet_number',
			alias: 'ZN_NP fleet number',
            dataType: tableau.dataTypeEnum.string
        },{
            id: 'ZN_NP_quantity',
			alias: 'ZN_NP_quantity',
            dataType: tableau.dataTypeEnum.string

        },{
            id: 'ZN_NP_length',
			alias: 'ZN_NP_length',
            dataType: tableau.dataTypeEnum.string

        }];

        var tableSchema = {
            id: "NuraiAssetsUniqueID",
            alias: "Nurai Assets Unique ID",
            columns: cols
        };

		//console.log('timestamp  ');
		
        schemaCallback([tableSchema]);
    };
   
    myConnector.getData = function(table, doneCallback) {
		
		plant_data=JSON.parse( $.ajax({
			url:"https://api.enerwhere-data.com/mongo/databyplant/nurai_assets/?accesskey=4E9135480112470734D98AF67FBA6B7E",
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
            tableau.connectionName = "Nurai assets Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
