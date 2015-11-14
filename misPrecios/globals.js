/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5682AB82-74BC-490B-A594-B25E9A10E15C",variableType:8}
 */
var vg_velocidad = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9156B5DD-8CC8-4B40-8719-118F1F7F5AB5",variableType:8}
 */
var vg_accuracy_altitud = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CD8A747A-315E-4EA7-BF44-E92BD95317DF",variableType:8}
 */
var vg_accuracy = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB2E2913-E2E3-4E58-B7F5-659E85BB5974",variableType:8}
 */
var vg_altitud = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6AF2046D-D824-4620-B15E-48AD9A59954E",variableType:8}
 */
var vg_longitud = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C6BA6EEB-9D06-4495-AE90-AB1CB762A1FD",variableType:8}
 */
var vg_latitud = null;

/**
 * @properties={typeid:24,uuid:"91620474-ECF7-40BB-9B84-303F3D8CE0F4"}
 */
function clearFormVariables() {
	vg_accuracy = 0;
	vg_altitud = 0;
	vg_accuracy_altitud = 0;
	vg_latitud = 0;
	vg_longitud = 0;
	vg_velocidad = 0;
}

/**
 * 
 * @param result
 *
 * @properties={typeid:24,uuid:"52F80EED-89C0-433A-93C3-E32F39A9F865"}
 */
function onSuccess(result) {
	if (result) {
		application.output(JSON.stringify(result));
		vg_altitud = result.coords.altitude;
		vg_accuracy_altitud = result.coords.altitudeAccuracy;
		vg_accuracy = result.coords.accuracy;
		vg_latitud = result.coords.latitude;
		vg_longitud = result.coords.longitude;
		vg_velocidad = result.coords.speed;
	}
}

/**
 * 
 * @param error
 *
 * @properties={typeid:24,uuid:"F6E76444-DFFC-4D05-853A-0CA15382F7A3"}
 */
function onError(error) {
	clearFormVariables();
}

/**
 * @properties={typeid:24,uuid:"56C0C2C0-C34F-49CA-9B40-C860F32B81C5"}
 */
function obtenerPosicion(){
	clearFormVariables();
	plugins.phoneGapGeolocation.getCurrentPosition(onSuccess,onError)
}