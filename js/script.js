$(document).ajaxSuccess(function () {
    $("footer").text("Ajax success!").delay(100).slideUp(3000);
}).ajaxError(function () {
    $("footer").text("Ajax Error!").delay(100);
    $("footer").addClass('anim');
});
function addInfo(c_name) {
		$.ajax({
		  url: '../txt/'+c_name+'.txt',
		  dataType: 'text',		  
		  success: function (data) {
		  	$('#par').text("Запрос:"+ c_name);
		    $('.'+c_name+'_txt').text(data);
		  }
		});
}
function addJson(c_name){
		$.getJSON( "json/"+c_name+".json", function (data, textStatus, jqXHR) {
        var out = "";
        for ( key in data ) {
      		out += ( key + ": " + data[key] + "<br>");
        };
        $('#par').text("Запрос:"+ c_name);
        $("."+c_name+"_add_txt").html(out);
    	});
}
 $(function(){
// 	$("#blr_btn").click(addInfo("belarus"));
	$("#blr_btn").on("click", function() {   addInfo("belarus"); });
	$("#blr_add_btn").on("click", function() {   addJson("belarus"); });
	//$("#blr_add_btn").click(addJson("belarus"));
	$("#usa_btn").on("click", function() {  addInfo("usa");});
	$("#usa_add_btn").on("click", function() {  addJson("usa");});
	$("#uk_btn").on("click", function() {  addInfo("uk"); });
	$("#uk_add_btn").on("click", function() {  addJson("uk");});
	$("#rus_btn").on("click", function() {  addInfo("russia");});
	$("#russia_add_btn").on("click", function() {  addJson("russia");});
	$('.add_info_btn').click(()=>{
		$( ".add_info" ).load("../html/add.html"); 
	});
});