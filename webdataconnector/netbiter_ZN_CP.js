(function() {
	
	
	// Create the connector object
    var myConnector = tableau.makeConnector();
	
    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
		
		
		consta=90;
		
		
		//console.log('sorted '+JSON.stringify(sorted))
		getLastWeek=function (cons){
			var today = new Date();
			var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - cons);
			var lastWeekMonth = lastWeek.getMonth() + 1;
			var lastWeekDay = lastWeek.getDate();
			var lastWeekYear = lastWeek.getFullYear();

			var lastWeekDisplay = lastWeekMonth + "/" + lastWeekDay + "/" + lastWeekYear;
			var lastWeekDisplayPadded = ("0000" + lastWeekYear .toString()).slice(-4)+"-"+("00" + lastWeekMonth.toString()).slice(-2)+ "-" + ("00" + lastWeekDay .toString()).slice(-2);
			return lastWeekDisplayPadded ;
			};
			
			l_wk=getLastWeek(consta)
					
		today_date=function(){
			
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			if(dd<10) {
				dd='0'+dd
			} 

			if(mm<10) {
				mm='0'+mm
			} 

			today = yyyy+'-'+mm+'-'+dd;
			return today;
			}
			// 
		td=today_date()
		//td=getLastWeek(8)
		
        var cols = [{
            id: "timestamp",
			alias: " Date Time",
            dataType: tableau.dataTypeEnum.datetime
        },{
            id: "Rev1Totalactivepower",
			alias: "Rev. 1 - Total Active Power (kW)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "Rev1Totalactiveenergy",
            alias: " Rev. 1 - Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev2Totalactivepower",
			alias: "Rev. 2 - Total Active Power (kW)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "Rev2Totalactiveenergy",
            alias: " Rev. 2 - Consumed Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ZN_CP_Tank_level",
            alias: "ZN_CP Tank Level (l)",
            dataType: tableau.dataTypeEnum.float
        },
		
		{
            id: "Inv1Totalactivepower",
			alias: "Inv.1 - Total active power(kW)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "Inv1Totalpoweryields",
            alias: " Inv.1 - Total power yields(kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Inv2Totalactivepower",
			alias: "Inv.2 - Total active power (kW)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "Inv2Totalpoweryields",
            alias: " Inv.2 - Total power yields (kWh)",
            dataType: tableau.dataTypeEnum.float
        },
		{
            id: "Rev1Totalactiveenergyconsumption",
            alias: " inv. 1 - Daily Total active energy consumption(kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Rev2Totalactiveenergyconsumption",
            alias: " inv. 2 - Daily Total active energy consumption (kWh)",
            dataType: tableau.dataTypeEnum.float
        },
		
		
				
		
		{
            id: "First_Fuel_Level",
            alias: "Daily First Fuel Level (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Last_Fuel_Level",
            alias: "Daily Last Fuel Level (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "First_minus_Last_Fuel",
            alias: "Daily Fuel Consumption (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Fuel_Delivery",
            alias: "Daily Fuel Delivery (l)",
            dataType: tableau.dataTypeEnum.float
        },
		
		
		
		
		{
            id: "Fuel_Delivery_begins",
            alias: "Fuel Delivery begins Date Time",
            dataType: tableau.dataTypeEnum.datetime
        },{
            id: "Fuel_Delivery_ends",
            alias: "Fuel Delivery ends Date Time",
            dataType: tableau.dataTypeEnum.datetime
        },{
            id: "Fuel_Delivery_duration",
            alias: "Fuel Delivery duration (mins)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Fuel_consumption_rate",
            alias: "Fuel consumption rate (l/min)",
            dataType: tableau.dataTypeEnum.float
        }];

        var tableSchema = {
            id: "ZN_CPDeviceUniqueID",
            alias: "ZN_CENTRAL Device Unique ID",
            columns: cols
        };

		//console.log('timestamp  ');
		
        schemaCallback([tableSchema]);
    };
   
    myConnector.getData = function(table, doneCallback) {
		
		
		var  time_stamp=function(xrr){
			
			data_col = $.parseJSON($.ajax({
			url:"https://api.enerwhere-data.com/mongo/measures/"+xrr+"/"+l_wk+"/"+td+"/?format=json",
			//url:  "https://api.netbiter.net/operation/v1/rest/json/system/003011FBA240/log/"+xr+"?accesskey=4E9135480112470734D98AF67FBA6B7E&startdate=2017-01-02T18:18:00Z&sortorder=asc&limitrows=3&callback=JSONPCallback",
			dataType: "json", 
			async: false
			}).responseText);	
			//console.log('data_col '+JSON.stringify(data_col))	
			var hkd=data_col;
				tableDar = [];
				
            // Iterate over the JSON object
            for (var kf = 0, lenk = hkd.length; kf < lenk; kf++) {
				var gf="timestamp"
				var objkr = {};
				
				
				var qg=Date.parse(hkd[kf].timestamp)
				var qh=qg+3600000*4
				var qm = new Date(qh);

				var qw=JSON.stringify(qm)
				var tr=qw			
				
				//tr=('2017-01-09T14:01:00.000Z')
				tr=tr.replace(/\.000Z/,'x')
				tr=tr.replace(/\:00x/,' ')
				tr=tr.replace(/\T/,' ')
				
				objkr[gf]=$.parseJSON(tr)
				tableDar.push( objkr
              ); 
            }	
		//console.log('data_col '+JSON.stringify(tableDa))	
			return tableDar		
			}
		
		var  colu=function(xr,yy){
			
			data_col = $.parseJSON($.ajax({
			url:"https://api.enerwhere-data.com/mongo/measures/"+xr+"/"+l_wk+"/"+td+"/?format=json",
			//url:  "https://api.netbiter.net/operation/v1/rest/json/system/003011FBA240/log/"+xr+"?accesskey=4E9135480112470734D98AF67FBA6B7E&startdate=2017-01-02T18:18:00Z&sortorder=asc&limitrows=3&callback=JSONPCallback",
			dataType: "json", 
			async: false
			}).responseText);	
			//console.log('data_col '+JSON.stringify(data_col))	
			var hk=data_col;
				tableDa = [];
				
            // Iterate over the JSON object
            for (var k = 0, lenk = hk.length; k < lenk; k++) {
				var g=yy
				var objk = {};
				//var ob2={}
				objk[yy] = hk[k].value ;
				tableDa.push( objk
              ); 
            }	
	//console.log('data_col '+JSON.stringify(tableDa))	
			return tableDa		
		}	
		
		
		var  colutp=function(xr,yy){
			
			data_colh = $.parseJSON($.ajax({
			url:"https://api.enerwhere-data.com/mongo/measures/"+xr+"/"+l_wk+"/"+td+"/?format=json",
			//url:  "https://api.netbiter.net/operation/v1/rest/json/system/003011FBA240/log/"+xr+"?accesskey=4E9135480112470734D98AF67FBA6B7E&startdate=2017-01-02T18:18:00Z&sortorder=asc&limitrows=3&callback=JSONPCallback",
			dataType: "json", 
			async: false
			}).responseText);	
			//console.log('data_col '+JSON.stringify(data_col))	
			var hk=data_colh;
				//var tableDap = [];
			var ob2={}	
            // Iterate over the JSON object
            for (var k = 0, lenk = hk.length; k < lenk; k++) {
				var g=yy
				var objk = {};
				
				objk[yy] = hk[k].value ;
				
				var qgt=Date.parse(hk[k].timestamp)
				var qht=qgt+3600000*4
				var qmt = new Date(qht);

				var qwt=JSON.stringify(qmt)
				
				
				//tr=('2017-01-09T14:01:00.000Z')
				var trt=qwt
				//tr=tr.replace(/\.000Z/,'')
				//tr=tr.replace(/T|\:00/g,' ')
				//console.log('time_col '+JSON.stringify(trt))	
				
				//tr=('2017-01-09T14:01:00.000Z')
				var trt=trt.replace(/\.000Z/,'')
				//var trt=trt.replace(/\:00x/,' ')
				var trt=trt.replace(/\T/,' ')
				var trt=trt.replace(/\-/g,'/')
				var trt=$.parseJSON(trt)
				//objkq['timestamp']=trt
				
				ob2[trt]=objk
				//objk["timestamp"]=hy[ih].timestamp
                
            }	
			return ob2	
		}
		
		id_=["59635.0.119501","59635.0.120728","61187.0.119487","61187.0.119500","61928.0.121982","67218.9323.173724","67218.9323.173723","73254.9325.173756","73254.9325.173755"];
		var sys_id={}
		var sys_id={"59635.0.119501":"Rev1Totalactivepower","59635.0.120728":"Rev1Totalactiveenergy","61187.0.119487":"Rev2Totalactivepower","61187.0.119500":"Rev2Totalactiveenergy","61928.0.121982":	"ZN_CP_Tank_level","67218.9323.173724":"Inv1Totalactivepower", "67218.9323.173723":"Inv1Totalpoweryields", "73254.9325.173756":"Inv2Totalactivepower","73254.9325.173755":"Inv2Totalpoweryields"};
		tmstp=time_stamp(id_[0])
		
	  var cmb=colutp(id_[0],sys_id[id_[0]])
	//	console.log('cmb '+JSON.stringify(cmb))
		for (var j = 1, lentj = id_.length; j < lentj; j++) {
			
			 gxx = id_[j]
			 yd = sys_id[id_[j]]
			 var	red=colutp(gxx,yd)
			 
			 var cmb = _.merge(cmb,red);
			//tableDath.push(red)
		}
		//console.log('cmb '+JSON.stringify(cmb))	
		tableDath = []
		
		
		 for (itm in cmb) {
				//var g=yy
				var objkq = {};
			
				objkq['timestamp'] = itm ;
				fnd=$.extend(objkq,cmb[itm])
				tableDath.push( fnd  ); 
            }
	// sorting method below		
		
	var qwer=tableDath.sort(function(a,b) { 
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime() 
	});

			
	//console.log('qwer---- '+JSON.stringify(qwer))
	
	//filtering method below
	//***** today=td
	//***last-2-wks= l_wk
	
	     var lstartDate = new Date('2017-01-31');
        var lendDate = new Date(td);

      
        //console.log(resultProductData);
		
	
	//var filteredData = qwer.filter(function(a){return new Date(a.timestamp) > lstartDate && new Date(a.timestamp) < lendDate;});
	
	
	pu=[]
	var resl=[]
	var filt_time_list=[]
	//var jump_jump=[]
	for (var zj = 0, zlentj = consta; zj < zlentj; zj=zj+1) {
			
			var ldk=getLastWeek(zj)
			var ldkd=getLastWeek(zj+1)
			
			var qgp=Date.parse(ldk)
				var qhp=qgp-3600000*4
				var qmp = new Date(qhp);
				
				
				var qwtt=JSON.stringify(qmp)
				var qtrt=qwtt
				var qtrt=qtrt.replace(/\.000Z/,'')
				
				var qtrt=qtrt.replace(/\T20/,' 00')
				var qtrt=qtrt.replace(/\-/g,'/')
				var qtrt=$.parseJSON(qtrt)
				var qgq=Date.parse(ldkd)
				var qhq=qgq-3600000*4
				var qmq = new Date(qhq);
			
			//console.log('ldkd--- '+JSON.stringify(ldkd))
			//console.log('ldk--- '+JSON.stringify(ldk))
			
			var lstartDate = new Date(qmq);
			var lendDate = new Date(qmp);
			var filteredData = qwer.filter(function(a){return new Date(a.timestamp) > lstartDate && new Date(a.timestamp) < lendDate;});
			//console.log('filteredData--- '+JSON.stringify(filteredData))
			
			
			
			
			
			
			
			var  filt = [] 
             var filt_time={}
			 var  filt_kwh1 = [] 
             var filt_kwh1_time={}
			 var  filt_kwh2 = [] 
             var filt_kwh2_time={}
			// }
			var jump_up=[]
			var jump_down=[]
			for (var tj = 0, tlentj = filteredData.length; tj < tlentj; tj++) {
				if (filteredData[tj].ZN_CP_Tank_level >0){
				filt.push( filteredData[tj].ZN_CP_Tank_level );
				filt_time[filteredData[tj].ZN_CP_Tank_level]=filteredData[tj].timestamp			

				}
				
				
				
				if (filteredData[tj].Inv1Totalpoweryields >0){
				filt_kwh1.push( filteredData[tj].Inv1Totalpoweryields );
				filt_kwh1_time[filteredData[tj].Inv1Totalpoweryields]=filteredData[tj].timestamp
				
				

				}
				
				if (filteredData[tj].Inv2Totalpoweryields >0){
				filt_kwh2.push( filteredData[tj].Inv2Totalpoweryields );
				filt_kwh2_time[filteredData[tj].Inv2Totalpoweryields]=filteredData[tj].timestamp
				
				

				}
			}				
				
				
			for (var tjx = 0, tlentjx = filt.length; tjx < tlentjx; tjx++) {
				
				//console.log('inside')
							
				if ( filt[tjx] >0 && filt[tjx-1]>0&& (filt[tjx]-filt[tjx-1])>20){
				 jump_up.push( filt[tjx] );
				 jump_down.push( filt[tjx-1] );
				 }
				}	

			var res={}
			
			res['timestamp']=qtrt	
			res['First_Fuel_Level']=filt[0]
			res['Last_Fuel_Level']=filt[filt.length-1]
			res['First_minus_Last_Fuel']=filt[0]-filt[filt.length-1]
			
			res['Rev1Totalactiveenergyconsumption']=filt_kwh1[filt_kwh1.length-1]-filt_kwh1[0]
			res['Rev2Totalactiveenergyconsumption']=filt_kwh2[filt_kwh2.length-1]-filt_kwh2[0]
			//res['jump']=jump
			res['Fuel_Delivery']=jump_up[jump_up.length-1]-jump_down[0]
			
			res['Fuel_Delivery_begins']=filt_time[jump_down[0]]
			res['Fuel_Delivery_ends']=filt_time[jump_up[jump_up.length-1]]
			res['Fuel_Delivery_duration']=(Date.parse(filt_time[jump_up[jump_up.length-1]])-Date.parse(filt_time[jump_down[0]]))/60000
			
			var index = filt.indexOf(jump_down[0]);
			var index_10=index-10
			if (index_10<0){  index_10=0 }
			res['Fuel_consumption_rate']=(filt[index]-filt[index_10])/((Date.parse(filt_time[filt[index_10]])-Date.parse(filt_time[filt[index]]))/60000)
			//(filt[index]-filt[index_10])/
		  //res['Fuel_consumption_diff']=(filt[index]-filt[index_10])
					
			resl.push(res)
			qwer.push(res)
			pu.push( filt );
			filt_time_list.push( filt_time );      
					
			}
		console.log('jump_up-- '+JSON.stringify(jump_up))
		console.log('jump_down-- '+JSON.stringify(jump_down))
		console.log('resl-- '+JSON.stringify(resl))
		//console.log('filt_time_list--- '+JSON.stringify(filt_time_list))
		
		
		
		 
	var qwer=tableDath.sort(function(a,b) { 
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime() 
	});
            table.appendRows(qwer);
            doneCallback();
		
		
       
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "ZN_CENTRAL Field Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
