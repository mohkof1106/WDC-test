(function() {
	
	
	// Create the connector object
    var myConnector = tableau.makeConnector();
	
    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
		
		      
		consta=90;
		//console.log('tod '+tod )
		
	
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
            alias: " MIC-2 - Total Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Main_Tank_Tank_level",
            alias: "SSV_Main_Tank_Tank_level (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "MDB3_Total_Active_Energy",
			alias: "MDB3 - Total Active Energy(kWh)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "MDB2_Total_Active_Energy",
            alias: " MDB2 - Total Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_Mic2_Counter",
			alias: "ERS Mic 2 Counter",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "SSV_Mic2_Counter",
            alias: " SSV Mic 2 Counter",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Occupancy",
            alias: "SSV Occupancy",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Monthly_Fuel_Delivery_IG",
			alias: "SSV Monthly Fuel Delivery (IG)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "ERS_Fuel_Delivery_IG",
            alias: " ERS Fuel Delivery (IG)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_Tank_Level_L",
            alias: "ERS Tank Level (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Current_Tank_Level_L",
            alias: "SSV Current Tank Level (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Current_Electricity_Consumption_kWh",
            alias: "SSV Current Electricity Consumption (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_Current_Electricity_Consumption_kWh",
            alias: "ERS Current Electricity Consumption (kWh)",
            dataType: tableau.dataTypeEnum.float
        },	{
            id: "SSV_Current_Fuel_Consumption_L",
            alias: "SSV Current Fuel Consumption (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_Current_Fuel_Consumption_L",
            alias: "ERS Current Fuel Consumption (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Total_Electricity_Consumption_kWh",
            alias: "Total Electricity Consumption (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Total_Fuel_Consumption_L",
            alias: "Total Fuel Consumption (l)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Total_Fuel_Delivery_IG",
            alias: "Total Fuel Delivery (IG)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "Enerwhere_Invoice_AED",
            alias: "Enerwhere Invoice (AED)",
            dataType: tableau.dataTypeEnum.float
        },{
		     id: "SSV_Baseline_kWh_calc",
            alias: " SSV Baseline kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Baseline_Fuel_Efficiency_L_Per_kWh_calc",
            alias: "SSV Baseline Fuel Efficiency (l/kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Historical_Cost_AED_Per_kWh_calc",
            alias: "SSV Historical Cost (AED/kWh)",
            dataType: tableau.dataTypeEnum.float
        }, 	 {
            id: "ERS_Baseline_kWh_calc",
            alias: " ERS Baseline kWh (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_Baseline_Fuel_Efficiency_L_Per_kWh_calc",
            alias: "ERS Baseline Fuel Efficiency (l/kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_Historical_Cost_AED_Per_kWh_calc",
            alias: "ERS Historical Cost (AED/kWh)",
            dataType: tableau.dataTypeEnum.float
        },	{
            id: "Total_Enerwhere_Cost_AED",
            alias: "Total Enerwhere Cost (AED)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "SSV_Solar_Consumption",
            alias: "SSV Solar Consumption (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "ERS_Solar_Consumption",
            alias: "ERS Solar Consumption (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
		     id: "SSV_MDB2_Consumption",
            alias: " SSV MDB2 Consumption (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_MDB3_Consumption",
            alias: "SSV MDB3 Consumption (kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Kitchen_and_Laundry_Consumption",
            alias: "SSV Kitchen and Laundry Consumption (kWh)",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "dgs_available_power",
            alias: "DGs Available Power (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "n_minus_1_dg_available_power",
            alias: "N-1 of DGs Available Power(kW)",
            dataType: tableau.dataTypeEnum.float
        }, 
		 {
            id: "ideal_fuel_efficiency",
            alias: "Ideal Fuel Efficiency(l/kWh)",
            dataType: tableau.dataTypeEnum.float
        },
		{
            id: "daily_diesel_price",
            alias: " Daily Diesel Price(AED/l)",
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
        },{
            id: "SSV_Solar_Total_Active_Power",
            alias: "SSV Solar - Total Active Power (kW)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "SSV_Solar_Total_Active_Energy",
            alias: "SSV Solar Total Active Energy(kWh)",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "CVM1_Total_Active_Energy",
            alias: "CVM1 - Total Active Energy (kWh)",
            dataType: tableau.dataTypeEnum.float
        } ,{
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
        }  ];

        var tableSchema = {
            id: "SSVUniqueID",
            alias: "SSV Unique ID",
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
		
		
	
		id_=["40908.6003.98181","40908.6003.98177","40844.6004.98189","41501.6082.99969","41500.6081.99968","41757.6080.99925","41757.6080.99929","40995.5672.89617"];
		var sys_id={}
		var sys_id={"40908.6003.98181":"MIC2_System_Power","40908.6003.98177":"MIC2_Total_Energy","40844.6004.98189":"SSV_Main_Tank_Tank_level","41501.6082.99969": "MDB3_Total_Active_Energy", "41500.6081.99968":"MDB2_Total_Active_Energy","41757.6080.99925":"SSV_Solar_Total_Active_Power","41757.6080.99929":"SSV_Solar_Total_Active_Energy","40995.5672.89617":"CVM1_Total_Active_Energy"};
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

			
	
	
	     var lstartDate = new Date('2017-01-31');
        var lendDate = new Date(td);

      
        //console.log(resultProductData);
		
	
	//var filteredData = qwer.filter(function(a){return new Date(a.timestamp) > lstartDate && new Date(a.timestamp) < lendDate;});
	Baseline= $.parseJSON($.ajax({
			url:"https://api.enerwhere-data.com/management/PlantsBaseline/",
			dataType: "json", 
			async: false
			}).responseText);
			
			
	EnergyReport= $.parseJSON($.ajax({
			url:"https://api.enerwhere-data.com/management/PlantsEnergyReport/",
			dataType: "json", 			
			async: false
			}).responseText);
			
			
	dgs_available_power_lup={};
    n_minus_1_dg_available_power_lup={};
	ideal_fuel_efficiency_lup={};	
	diesel_price_lup={};
		
		//{"plant":"SSV","base_month":1,"base_kwh":85140,"base_fuel_efficiency_l_per_kwh":0.439708421,"historical_cost_aed_per_kwh":1.847672766},
	for (var krfq = 0, lenkrq = EnergyReport.length; krfq< lenkrq; krfq++) {
		
		
			if (EnergyReport[krfq].plant=="SSV"  && EnergyReport[krfq].dgs_available_power>0){
				var todayx=EnergyReport[krfq].datetime
				var todayx = new Date(todayx);
				// console.log('todayx datetime--- '+JSON.stringify(todayx))
				var mmx = todayx.getMonth()+1; //January is 0!
				var yyyyx = todayx.getFullYear();
				
				if(mmx<10) {
					mmx='0'+mmx
				} 

				todayx = yyyyx+'-'+mmx;
				
				dgs_available_power_lup[todayx]=EnergyReport[krfq].dgs_available_power
				n_minus_1_dg_available_power_lup[todayx]=EnergyReport[krfq].n_minus_1_dg_available_power
			    ideal_fuel_efficiency_lup[todayx]=EnergyReport[krfq].ideal_fuel_efficiency	
				diesel_price_lup[todayx]=EnergyReport[krfq].diesel_price	}
	}		
			
	
	pu=[]
	var filt_time_list=[]
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
			
			
			var lstartDate = new Date(qmq);
			var lendDate = new Date(qmp);
			var filteredData = qwer.filter(function(a){return new Date(a.timestamp) > lstartDate && new Date(a.timestamp) < lendDate;});
			//console.log('filteredData--- '+JSON.stringify(filteredData))
			
			
			
			var  filt = [] 
             var filt_time={}
			// }
			var jump_up=[]
			var jump_down=[]
			for (var tj = 0, tlentj = filteredData.length; tj < tlentj; tj++) {
				if (filteredData[tj].SSV_Main_Tank_Tank_level >0){
				filt.push( filteredData[tj].SSV_Main_Tank_Tank_level );
				filt_time[filteredData[tj].SSV_Main_Tank_Tank_level]=filteredData[tj].timestamp			

				}}				
				
				
			for (var tjx = 0, tlentjx = filt.length; tjx < tlentjx; tjx++) {
				
				//console.log('inside')
							
				if ( filt[tjx] >0 && filt[tjx-1]>0&& (filt[tjx]-filt[tjx-1])>60 ){
				 jump_up.push( filt[tjx] );
				 jump_down.push( filt[tjx-1] );
				 }
				}	

			var res={}
			
			res['timestamp']=qtrt	
			
			var todayxq = new Date(qtrt)
			//console.log('qtrt datetime--- '+JSON.stringify(qtrt))
				var mmxq = todayxq.getMonth()+1; //January is 0!
				var yyyyxq = todayxq.getFullYear();
				
				if(mmxq<10) {
					mmxq='0'+mmxq
				} 
			todayxq = yyyyxq+'-'+mmxq;
			console.log('todayxq  datetime--- '+JSON.stringify(todayxq ))
			res['daily_diesel_price']=diesel_price_lup[todayxq]
			res['dgs_available_power']=dgs_available_power_lup[todayxq]
			res['n_minus_1_dg_available_power']=n_minus_1_dg_available_power_lup[todayxq]
			res['ideal_fuel_efficiency']=ideal_fuel_efficiency_lup[todayxq]
			res['First_Fuel_Level']=filt[0]
			res['Last_Fuel_Level']=filt[filt.length-1]
			res['First_minus_Last_Fuel']=filt[0]-filt[filt.length-1]
			//res['jump']=jump
			res['Fuel_Delivery']=jump_up[jump_up.length-1]-jump_down[0]
			
			res['Fuel_Delivery_begins']=filt_time[jump_down[0]]
			res['Fuel_Delivery_ends']=filt_time[jump_up[jump_up.length-1]]
			res['Fuel_Delivery_duration']=(Date.parse(filt_time[jump_up[jump_up.length-1]])-Date.parse(filt_time[jump_down[0]]))/60000
			
			var index = filt.indexOf(jump_up[jump_up.length-1]);
			var index_10=index+10
			if (index_10>(filt.length-1)){  index_10=(filt.length-1) }
			res['Fuel_consumption_rate']=(filt[index]-filt[index_10])/((Date.parse(filt_time[filt[index_10]])-Date.parse(filt_time[filt[index]]))/60000)
			
			resl.push(res)
			qwer.push(res)
			pu.push( filt );
			filt_time_list.push( filt_time );      
					
			}
	
	
   
	    
		
		//console.log('EnergyReport '+JSON.stringify(EnergyReport))	
			
		var SSV_Baseline_kWh_lup={};
		var SSV_Baseline_Fuel_Efficiency_L_Per_kWh_lup={};
		var SSV_Historical_Cost_AED_Per_kWh_lup={};
		var ERS_Baseline_kWh_lup={};
		var ERS_Baseline_Fuel_Efficiency_L_Per_kWh_lup={};
		var ERS_Historical_Cost_AED_Per_kWh_lup={};	
			
		
		//{"plant":"SSV","base_month":1,"base_kwh":85140,"base_fuel_efficiency_l_per_kwh":0.439708421,"historical_cost_aed_per_kwh":1.847672766},
		for (var krfq = 0, lenkrq = Baseline.length; krfq< lenkrq; krfq++) {
		
		if (Baseline[krfq].plant=="SSV"){
			SSV_Baseline_kWh_lup[Baseline[krfq].base_month]=Baseline[krfq].base_kwh
			SSV_Baseline_Fuel_Efficiency_L_Per_kWh_lup[Baseline[krfq].base_month]=Baseline[krfq].base_fuel_efficiency_l_per_kwh
			SSV_Historical_Cost_AED_Per_kWh_lup[Baseline[krfq].base_month]=Baseline[krfq].historical_cost_aed_per_kwh	
		}
	
	
	    if (Baseline[krfq].plant=="ERS"){						
			ERS_Baseline_kWh_lup[Baseline[krfq].base_month]=Baseline[krfq].base_kwh
			ERS_Baseline_Fuel_Efficiency_L_Per_kWh_lup[Baseline[krfq].base_month]=Baseline[krfq].base_fuel_efficiency_l_per_kwh
			ERS_Historical_Cost_AED_Per_kWh_lup[Baseline[krfq].base_month]=Baseline[krfq].historical_cost_aed_per_kwh
			}
	
	    }
		puf=[]
		puf_ers=[]
		for (var krfq = 0, lenkrq = EnergyReport.length; krfq< lenkrq; krfq++) {
		
		
			var dated=EnergyReport[krfq].datetime
					
					//console.log('dated '+JSON.stringify(dated))
					var tod = new Date(dated);
					 //var mm = tod.getMonth()+1;
					var  month_lup=tod.getMonth()+1;
					 var todd=JSON.stringify(tod)
					var todd=todd.replace(/\.000Z/,'')
					var todd=todd.replace(/\T/,' ')
					var todd=todd.replace(/\-/g,'/')
					var todd=$.parseJSON(todd)
					
					base_calc={}
					
					
				  
					
			
			
			
			
			if (EnergyReport[krfq].plant=="SSV" && todd!='' ){	
			base_calc['timestamp']=todd
			
			base_calc['SSV_Mic2_Counter']=EnergyReport[krfq].total_energy_counter
			base_calc['SSV_Occupancy']=EnergyReport[krfq].occupancy
			base_calc['SSV_Monthly_Fuel_Delivery_IG']=EnergyReport[krfq].fuel_delivered
			
			
			base_calc['SSV_Solar_Counter']=EnergyReport[krfq].solar_energy_counter
			base_calc['SSV_MDB2_Counter']=EnergyReport[krfq].mdb2_energy_counter
			base_calc['SSV_MDB3_Counter']=EnergyReport[krfq].mdb3_energy_counter
			base_calc['SSV_Kitchen_and_Laundry_Counter']=EnergyReport[krfq].kitchen_and_laundry_energy_counter
			base_calc['Total_Enerwhere_Cost_AED']=EnergyReport[krfq].total_enerwhere_cost
						
			base_calc['SSV_Current_Tank_Level_L']=EnergyReport[krfq].tank_level
			base_calc['SSV_Diesel_Price_AED']=EnergyReport[krfq].diesel_price
			base_calc['SSV_Baseline_kWh_calc']=SSV_Baseline_kWh_lup[month_lup]
			base_calc['SSV_Baseline_Fuel_Efficiency_L_Per_kWh_calc']=SSV_Baseline_Fuel_Efficiency_L_Per_kWh_lup[month_lup]
			base_calc['SSV_Historical_Cost_AED_Per_kWh_calc']=SSV_Historical_Cost_AED_Per_kWh_lup[month_lup]
			
			puf.push(base_calc)
			
			
			
			}
			base_calc_ers={}
			if (EnergyReport[krfq].plant=="ERS" && todd!=''){	
			base_calc_ers['timestamp']=todd
			base_calc_ers['ERS_Mic2_Counter']=EnergyReport[krfq].total_energy_counter
			base_calc_ers['ERS_Occupancy']=EnergyReport[krfq].occupancy
			base_calc_ers['ERS_Fuel_Delivery_IG']=EnergyReport[krfq].fuel_delivered
			base_calc_ers['ERS_Tank_Level_L']=EnergyReport[krfq].tank_level
			base_calc_ers['ERS_Solar_Counter']=EnergyReport[krfq].solar_energy_counter
			base_calc_ers['ERS_Diesel_Price_AED']=EnergyReport[krfq].diesel_price
			base_calc_ers['ERS_Baseline_kWh_calc']=ERS_Baseline_kWh_lup[month_lup]
		    base_calc_ers['ERS_Baseline_Fuel_Efficiency_L_Per_kWh_calc']=ERS_Baseline_Fuel_Efficiency_L_Per_kWh_lup[month_lup]
			base_calc_ers['ERS_Historical_Cost_AED_Per_kWh_calc']=ERS_Historical_Cost_AED_Per_kWh_lup[month_lup]
									
			puf_ers.push(base_calc_ers)
			
			}
			//var base_ca = _.merge(base_calc,base_calc_ers);
			
			//puf_ers.push(base_calc_ers)
		
		}
		
	var puf=puf.sort(function(a,b) { 
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime() 
	});
	
	var puf_ers=puf_ers.sort(function(a,b) { 
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime() 
	});
		tab_fin=[]
		for (var krfq = 0, lenkrq = puf.length; krfq< lenkrq; krfq++) {
			
			var base_car = _.merge(puf_ers[krfq],puf[krfq]);			
			//qwer.push(base_car)	
			tab_fin.push(base_car)	
			
		}
						
		for (var kfq = 0, lenkq = tab_fin.length; kfq< lenkq; kfq++) {
				
				var dated=tab_fin[kfq].timestamp	
				
				base_tab={}
				base_tab['timestamp']=dated
			   
				if (kfq==0){
					
					base_tab['SSV_Current_Electricity_Consumption_kWh']=288949
					base_tab['ERS_Current_Electricity_Consumption_kWh']=0	
					base_tab['ERS_Current_Fuel_Consumption_L']=0
					base_tab['SSV_Current_Fuel_Consumption_L']=81160
					base_tab['SSV_Solar_Consumption']=2437
					base_tab['ERS_Solar_Consumption']=0
					base_tab['SSV_MDB2_Consumption']=31781
					base_tab['SSV_MDB3_Consumption']=63562
					base_tab['SSV_Kitchen_and_Laundry_Consumption']=72230
					
							
				}
				if (kfq>0){
				    base_tab['SSV_Current_Electricity_Consumption_kWh']=tab_fin[kfq].SSV_Mic2_Counter-tab_fin[kfq-1].SSV_Mic2_Counter
					base_tab['ERS_Current_Electricity_Consumption_kWh']=tab_fin[kfq].ERS_Mic2_Counter-tab_fin[kfq-1].ERS_Mic2_Counter					
					base_tab['SSV_Current_Fuel_Consumption_L']=parseFloat(tab_fin[kfq-1].SSV_Current_Tank_Level_L)-parseFloat(tab_fin[kfq].SSV_Current_Tank_Level_L)+ parseFloat(tab_fin[kfq].SSV_Monthly_Fuel_Delivery_IG)*4.54609
					base_tab['ERS_Current_Fuel_Consumption_L']=parseFloat(tab_fin[kfq-1].ERS_Tank_Level_L)-parseFloat(tab_fin[kfq].ERS_Tank_Level_L)+ parseFloat(tab_fin[kfq].ERS_Fuel_Delivery_IG)*4.54609
					base_tab['SSV_Solar_Consumption']=parseFloat(tab_fin[kfq].SSV_Solar_Counter)-parseFloat(tab_fin[kfq-1].SSV_Solar_Counter)
					base_tab['ERS_Solar_Consumption']=parseFloat(tab_fin[kfq].ERS_Solar_Counter)-parseFloat(tab_fin[kfq-1].ERS_Solar_Counter)
					base_tab['SSV_MDB2_Consumption']=parseFloat(tab_fin[kfq].SSV_MDB2_Counter)-parseFloat(tab_fin[kfq-1].SSV_MDB2_Counter)
					base_tab['SSV_MDB3_Consumption']=parseFloat(tab_fin[kfq].SSV_MDB3_Counter)-parseFloat(tab_fin[kfq-1].SSV_MDB3_Counter)
					base_tab['SSV_Kitchen_and_Laundry_Consumption']=parseFloat(tab_fin[kfq].SSV_Kitchen_and_Laundry_Counter)-parseFloat(tab_fin[kfq-1].SSV_Kitchen_and_Laundry_Counter)
					
					
					
					
				}
				base_tab['Total_Fuel_Delivery_IG']=parseFloat(tab_fin[kfq].ERS_Fuel_Delivery_IG) +parseFloat(tab_fin[kfq].SSV_Monthly_Fuel_Delivery_IG)
				base_tab['Total_Electricity_Consumption_kWh']=base_tab['SSV_Current_Electricity_Consumption_kWh']+base_tab['ERS_Current_Electricity_Consumption_kWh']
				base_tab['Total_Fuel_Consumption_L']=base_tab['SSV_Current_Fuel_Consumption_L']+base_tab['ERS_Current_Fuel_Consumption_L']
				base_tab['Enerwhere_Invoice_AED']=(base_tab['Total_Electricity_Consumption_kWh'])*1.17-(base_tab['Total_Fuel_Delivery_IG'])*(tab_fin[kfq].ERS_Diesel_Price_AED)*4.54609
				
		var cmbq = _.merge(base_tab,tab_fin[kfq]);
		qwer.push(cmbq);}			
		 
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
            tableau.connectionName = "SSV Field Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
