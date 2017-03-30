$(document).ready(function() {
	$("#address").click(function() {
		$(".footerInvisible").hide();
		$("#footerInvis1").fadeToggle(1000);
		window.scrollTo(0,document.body.scrollHeight);
	});

	$("#phone").click(function() {
		$(".footerInvisible").hide();
		$("#footerInvis2").fadeToggle(1000);
		window.scrollTo(0,document.body.scrollHeight);
	});

	$("#mail").click(function() {
		$(".footerInvisible").hide();
		$("#footerInvis3").fadeToggle(1000);
		window.scrollTo(0,document.body.scrollHeight);
	});

	$("#googlemap").click(function() {
		$(".footerInvisible").hide();
		$("#footerInvis4").fadeToggle(1000);
		window.scrollTo(0,document.body.scrollHeight);
	});

	$(".footerClose").click(function() {
		$(".footerInvisible").hide(300);
	});
});

$("#formContact").validate();

$('#formContact').submit(function() {
	if (!attributeSupported("required") || ($.browser.safari)) {

		$("#formContact [required]").each(function(index) {
			if (!$(this).val()) {
			alert("Proszę wypełnić wszystkie pola!");
			return false;
			}
		});
	}
	return false;
});
