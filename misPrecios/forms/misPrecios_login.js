/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3B76E22C-850F-465C-9D61-E855CE370560"}
 */
var vl_user_pass = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"92DC097F-C4D3-4879-A67B-1692D11CDCAD"}
 */
var vl_user_name = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DFCF8E4E-B800-4B23-B4C5-1D637288AD19"}
 */
function onShow(firstShow, event) {
	vl_user_name = null
	vl_user_pass = null
}

/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"80EA8DA9-0242-456F-B8A6-2FFBEF289B7A"}
 */
function onActionNuevaCuenta(event) {
	forms.misPrecios_nueva_cuenta.controller.show()
	
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"41FE51A4-4D62-4C4C-9F04-675B866640BA"}
 */
function validarUsuario(){
	controller.loadAllRecords()
	controller.find()
	usr_nombre = vl_user_name
	if(controller.search() != 0){
		return true
	}
	return false
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"7EF9D1B1-C123-49AF-9CB6-155972506849"}
 */
function validarPass(){
	controller.loadAllRecords()
	controller.find()
	usr_nombre = vl_user_name
	usr_password = vl_user_pass
	if(controller.search() != 0){
		return true
	}
	return false
}

/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"36CE0EA0-119C-408B-A915-4955BFD4920D"}
 */
function onActionIngresar(event) {
	if(vl_user_name == null || vl_user_name == ''){
		plugins.dialogs.showErrorDialog('Error','Ingrese un E-mail')
		return
	}
	
	if(vl_user_pass == null || vl_user_pass == ''){
		plugins.dialogs.showErrorDialog('Error','Ingrese una Contraseña')
		return
	}
	if(!validarUsuario()){
		plugins.dialogs.showErrorDialog('Error','El E-mail ingresado no es válido')
		return
	}else{
		if(!validarPass()){
			plugins.dialogs.showErrorDialog('Error','La Contraseña ingresada no es válida')
			return
		}else{
			forms.misPrecios_principal.controller.show()
		}
	}

}
