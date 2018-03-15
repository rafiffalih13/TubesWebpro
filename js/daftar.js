$().ready(function () {
	$("#FormDaftar").validate({
		rules: {
			namalengkap:"required",
			username:{
				required: true,
				minlength:3
			},
			username:{
				required: true,
				minlength:8
			},
			password:{
				required: true,
				minlength:8
			},
			confpassword:{
				required: true,
				minlength:8,
				equalTo:"#password"
			},
			email:{
				required:true,
				email:true
			}
		},
		messages:{
			namalengkap:"Masukkan nama lengkap",
			username:{
				required:"Masukkan username anda",
				minlength : "Minimal character username 3"
			},
			password:{
				required:"Masukkan password anda",
				minlength : "Minimal character password 3"
			},
			confpassword:{
				required:"Masukkan password anda",
				minlength : "Minimal character password 3",
				equalTo: "Password tidak sama dengan password diatas"
			},
		}
	});
});