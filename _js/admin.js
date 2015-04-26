function debug(obj){
	try{console.log(obj)}catch(error){}
}
function setup(){
	$('div.methodResult:hidden').slideDown('100');
	$('div.testCase h3 input').unbind().bind('change',function(){
		$(this).parents('div.testCase').find('input').attr('checked',$(this).attr('checked')==true);
	});
	$('#suiteForm').ajaxForm({target:'#main',success:setup});
	//$('#suiteEditor').ajaxForm({target:'#main',success:setup});
	
	$('#suiteForm button:contains(Start)').bind('click',function(){
    	$('div.methodResult:visible').slideUp('100');
	})
	$('#suiteForm button:contains(Reset)').bind('click',function(){
    	$('div.methodResult:visible').slideUp('100');
		$('div.testCase input').attr('checked',true);
	})
	var checkAll = true;
	$('h3 input').each(function(){
	    if($(this).attr('checked')){return checkAll = false}  
	})
	checkAll ? $('div.testCase input').attr('checked',true):null;
}
function setMetrics(){
	$('#suiteForm input[@name=suiteTask]').val('metrics'); 
}
function subForm(){
	$('#suiteForm').submit();
}

$('document').ready(setup);
