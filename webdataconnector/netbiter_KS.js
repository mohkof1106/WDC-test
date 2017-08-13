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
		
        var cols = [{
            id: "timestamp",
			alias: " Date Time",
            dataType: tableau.dataTypeEnum.datetime
        },
		
		
		
		
		{
            id: "MIC2_System_Power",
			alias: "MIC-2 - System Power (kW)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "MIC2_Total_Energy",
            alias: " MIC-2 - Total Energy(kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "T12K_Tank_Tank_level",
            alias: "T12K Tank - Tank level (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "T14K_Tank_Tank_level",
            alias: "T14K Tank - Tank level (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Solar1_System_Power",
            alias: "Solar 1 - System Power (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Solar1_Total_Energy",
            alias: "Solar 1 - Total Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },
		
		{
            id: "First_Fuel_Level",
            alias: "Daily First Fuel Level 12k Tank (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Last_Fuel_Level",
            alias: "Daily Last Fuel Level 12k Tank (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "First_minus_Last_Fuel",
            alias: "Daily Fuel Consumption 12k Tank (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Fuel_Delivery",
            alias: "Daily Fuel Delivery 12k Tank (l)",
            dataType: tableau.dataTypeEnum.float
        },
		
		{
            id: "First_Fuel_Level14",
            alias: "Daily First Fuel Level 14k Tank (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Last_Fuel_Level14",
            alias: "Daily Last Fuel Level 14k Tank (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "First_minus_Last_Fuel14",
            alias: "Daily Fuel Consumption 14k Tank(l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Fuel_Delivery14",
            alias: "Daily Fuel Delivery 14k Tank (l)",
            dataType: tableau.dataTypeEnum.float
        }];

        var tableSchema = {
            id: "KSDeviceUniqueID",
            alias: "KS_BUHASA Device Unique ID",
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
		
		id_=["55243.8045.140370","55243.8045.140366","55998.0.110797","56150.8188.144328","55925.0.110767","56150.8188.144330"];
		var sys_id={}
		var sys_id={"55243.8045.140370":"MIC2_System_Power","55243.8045.140366":"MIC2_Total_Energy","55998.0.110797":"T12K_Tank_Tank_level","55925.0.110767":"T14K_Tank_Tank_level","56150.8188.144328":"Solar1_System_Power","56150.8188.144330":"Solar1_Total_Energy"};
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

			
	console.log('qwer---- '+JSON.stringify(qwer))
	
	//filtering method below
	//***** today=td
	//***last-2-wks= l_wk
	
	     var lstartDate = new Date('2017-01-31');
        var lendDate = new Date(td);

      
        //console.log(resultProductData);
		
	
	//var filteredData = qwer.filter(function(a){return new Date(a.timestamp) > lstartDate && new Date(a.timestamp) < lendDate;});
	
	
	pu=[]
	var resl=[]
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
			var  filt = []      // }
			var jump=[]
			for (var tj = 0, tlentj = filteredData.length; tj < tlentj; tj++) {
				if (filteredData[tj].T12K_Tank_Tank_level >0){
				filt.push( filteredData[tj].T12K_Tank_Tank_level ); }
				
				if (  tj>0 && filteredData[tj].T12K_Tank_Tank_level >0 && filteredData[tj-1].T12K_Tank_Tank_level >0&& (filteredData[tj].T12K_Tank_Tank_level -filteredData[tj-1].T12K_Tank_Tank_level)>20 && (filteredData[tj].T12K_Tank_Tank_level -filteredData[tj-1].T12K_Tank_Tank_level)<50000){
				//jump.push( (filteredData[tj].T12K_Tank_Tank_level -filteredData[tj-1].T12K_Tank_Tank_level) ); }
				jump.push( filteredData[tj].T12K_Tank_Tank_level  ); }
				}

			var res={}
			var sum_jump = jump.reduce(function(a, b) {
			return a + b;
				}, 0);
			res['timestamp']=qtrt	
			res['First_Fuel_Level']=filt[0]
			res['Last_Fuel_Level']=filt[filt.length-1]
			res['First_minus_Last_Fuel']=filt[0]-filt[filt.length-1]
			//res['jump']=jump
			res['Fuel_Delivery']=jump[jump.length-1]-jump[0]
			
			
			var  filt14 = []      // }
			var jump14=[]
			for (var tj = 0, tlentj = filteredData.length; tj < tlentj; tj++) {
				if (filteredData[tj].T14K_Tank_Tank_level >0){
				filt14.push( filteredData[tj].T14K_Tank_Tank_level ); }
				
				if (  tj>0 && filteredData[tj].T14K_Tank_Tank_level >0 && filteredData[tj-1].T14K_Tank_Tank_level >0&& (filteredData[tj].T14K_Tank_Tank_level -filteredData[tj-1].T14K_Tank_Tank_level)>5 && (filteredData[tj].T14K_Tank_Tank_level -filteredData[tj-1].T14K_Tank_Tank_level)<50000){
				//jump14.push( (filteredData[tj].T14K_Tank_Tank_level -filteredData[tj-1].T14K_Tank_Tank_level) ); }
				jump14.push( filteredData[tj].T14K_Tank_Tank_level  ); }
				}

			//var res={}
			var sum_jump14 = jump14.reduce(function(a, b) {
			return a + b;
				}, 0);
			//res['timestamp']=qtrt	
			res['First_Fuel_Level14']=filt14[0]
			res['Last_Fuel_Level14']=filt14[filt14.length-1]
			res['First_minus_Last_Fuel14']=filt14[0]-filt14[filt14.length-1]
			//res['jump14']=jump14
			res['Fuel_Delivery14']=jump14[jump14.length-1]-jump14[0]
			
			
			
			resl.push(res)
			qwer.push(res)
			pu.push( filt );
            
			}
		
		
		//console.log('push--- '+JSON.stringify(pu))
		console.log('result--- '+JSON.stringify(resl))
		 
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
            tableau.connectionName = "KS_BUHASA Field Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
