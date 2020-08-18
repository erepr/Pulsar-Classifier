$(function () {

	var $orders = $('#orders');
	var $mean_int_pf = $('#mean_int_pf');
	var $std_pf = $('#std_pf');
	var $ex_kurt_pf = $('#ex_kurt_pf');
	var $skew_pf = $('#skew_pf');
	var $mean_dm = $('#mean_dm');
	var $std_dm = $('#std_dm');
	var $kurt_dm = $('#kurt_dm');
	var $skew_dm = $('#skew_dm');

	$('#add-order').on('click', function() {
	      var order = {
	        mean_int_pf: Number($mean_int_pf.val()),
	        std_pf: Number($std_pf.val()),
	        ex_kurt_pf: Number($ex_kurt_pf.val()),
	        skew_pf: Number($skew_pf.val()),
	        mean_dm: Number($mean_dm.val()),
	        std_dm: Number($std_dm.val()),
	        kurt_dm: Number($kurt_dm.val()),
	        skew_dm: Number($skew_dm.val()),
	      };

		$.ajax({
			type: 'POST',
			url: 'http://ec2-3-129-241-47.us-east-2.compute.amazonaws.com:8888',
			contentType:"application/json",
			data: JSON.stringify(order),
			success: function(response) {
				if (response == '1') {
				  $('#orders').text("✔️ Is a Pulsar Star");
				} else {
				  $('#orders').text("⚠️ Not a Pulsar Star");
				}
			}
		})
	});
})