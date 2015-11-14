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
