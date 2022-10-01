function leerClientes() {
	// Funcion Get 

	$.ajax({
		url : 'https://gb09214479a28b6-pvun3uwxudkwafgy.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/client/client',
		type : 'GET',
		dataType : 'json',

		success : function(pepito) {
			console.log (pepito);
		},

		error : function(xhr, status) {
		alert('ha sucedido un problema');
		},
 	});
}