/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"14615C14-9347-4F39-AED2-9BA81B12BE40"}
 */
var vl_user_pass_2 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"857E4952-053A-4246-8EB9-0E3C6956DD66"}
 */
var vl_user_pass = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C41D3C9A-7E69-4D32-9A4B-08CFD47655D2"}
 */
var vl_user_name = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"02B698D4-3DEB-4C33-9CF1-FB34B77B5ED2"}
 */
function onShow(firstShow, event) {
	vl_user_name = null
	vl_user_pass = null
	vl_user_pass_2 = null
	elements.label_error.text = ""
}

/**
 * @properties={typeid:24,uuid:"30B7BAC2-EED4-485B-9519-AAC7B7709543"}
 * @AllowToRunInFind
 */
function validarPass(){
	if(vl_user_name == null || vl_user_name == ''){
		elements.label_error.text = "Debe ingresar E-mail"
	}
	if(vl_user_name != null || vl_user_name != ''){
		var reg = new RegExp ('@')
		if(vl_user_name.search(reg) == 0){
			elements.label_error.text = "Debe ingresar un E-mail valido"
		}
	}
	if(vl_user_pass == null){
		elements.label_error.text = "Debe ingresar su Contraseña"
	}
	if(vl_user_pass != null){
		if(vl_user_pass != vl_user_pass_2){
			elements.label_error.text = "Las Contraseñas no coinciden"
		}
	}
}
/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B177ACF0-D18E-4D3B-A869-2EAF1525DF57"}
 */
function onActionCrearCuenta(event) {
	validarPass()
}
