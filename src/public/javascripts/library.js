function ajax(ajaxUrl, ajaxData, callback) {
	var request = $.ajax({
		url : ajaxUrl,
		type : "POST",
		data : ajaxData,
	});

	request.success(function(msg) {
		callback(msg);
	});

	request.fail(function(msg) {
		//alert('Error');
		callback(msg);
	});
}

function ajaxGet() {

}