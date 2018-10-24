$(function(){
	$(".input-field input").click(function(){
		var nowId = $(this).attr("id");
		nowId = '#' + nowId + 'label';
    	// alert(nowId);
    	// alert(nowId);
    	$(nowId).toggleClass("active");
    	$(nowId).siblings().removeClass("active");
    });
});


// 时间控件

$.fn.selectDate = function(){
	var minYear = 1900
	var maxYear = (new Date).getFullYear()
	var yearSel = document.getElementById('year1')
	var monthSel = document.getElementById('month1')
	var daySel = document.getElementById('days1')
	
	for(var y = maxYear;y >= minYear;y--){
		var yearOpt = document.createElement('option')
		yearOpt.value = y
		yearOpt.innerHTML = y
		yearSel.appendChild(yearOpt)
	}

	$("#year1").click(function(event){
		if(!$("#year1 option:selected").val()) return;
		removeOption(monthSel)
		addOption(12,'',monthSel)
		removeOption(daySel)
	})

	$("#month1").click(function(){
		removeOption(daySel)
		var year = $("#year1 option:selected").val()
		var month = $("#month1 option:selected").val()
		if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
			addOption(31,'',daySel)
		}else if(month==4 || month==6 || month==9 || month==11){
			addOption(30,'',daySel)
		}else if(month==2){
			if((year%4 == 0 && year%100 != 0 ) || (year%400 == 0)){
				addOption(29,'',daySel)
			}else{	
				addOption(28,'',daySel)
			}
		}
	})

	function addOption(num,unit,parent){
				//num：选项个数
				//unit：单位（年/月/日）
				//parent：父对象
				for(var index=1;index <= num;index++){
					var opt =document.createElement('option')
					$(opt).attr('value',index)
					if(index<10){index = '0'+index}
						$(opt).html(index+unit)
					$(parent).append(opt)
				}
			}
			
			function removeOption(parent){
				//parent：父对象
				var options = $(parent).find('option')
				for(var index = 1;index < options.length;index++){
					parent.removeChild(options[index])
				}
			}
		}
$.fn.selectDate1 = function(){
	var minYear = 1900
	var maxYear = (new Date).getFullYear()
	var yearSel = document.getElementById('year2')
	var monthSel = document.getElementById('month2')
	var daySel = document.getElementById('days2')
	
	for(var y = maxYear;y >= minYear;y--){
		var yearOpt = document.createElement('option')
		yearOpt.value = y
		yearOpt.innerHTML = y
		yearSel.appendChild(yearOpt)
	}

	$("#year2").click(function(event){
		if(!$("#year2 option:selected").val()) return;
		removeOption(monthSel)
		addOption(12,'',monthSel)
		removeOption(daySel)
	})

	$("#month2").click(function(){
		removeOption(daySel)
		var year = $("#year2 option:selected").val()
		var month = $("#month2 option:selected").val()
		if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
			addOption(31,'',daySel)
		}else if(month==4 || month==6 || month==9 || month==11){
			addOption(30,'',daySel)
		}else if(month==2){
			if((year%4 == 0 && year%100 != 0 ) || (year%400 == 0)){
				addOption(29,'',daySel)
			}else{	
				addOption(28,'',daySel)
			}
		}
	})

	function addOption(num,unit,parent){
				//num：选项个数
				//unit：单位（年/月/日）
				//parent：父对象
				for(var index=1;index <= num;index++){
					var opt =document.createElement('option')
					$(opt).attr('value',index)
					if(index<10){index = '0'+index}
						$(opt).html(index+unit)
					$(parent).append(opt)
				}
			}
			
			function removeOption(parent){
				//parent：父对象
				var options = $(parent).find('option')
				for(var index = 1;index < options.length;index++){
					parent.removeChild(options[index])
				}
			}
		}