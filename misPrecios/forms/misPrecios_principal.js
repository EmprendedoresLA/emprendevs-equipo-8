/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B6C068E3-3317-4CAF-8A8A-6E52189B112C"}
 */
var format = ""
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FE8F44A7-D891-4F71-BB96-67E062BB3F52"}
 */
var code = ""
/**
 *
 * @param {JSEvent} event
 *
 * 
 *
 * @properties={typeid:24,uuid:"79A564C8-43B5-46FE-B74E-3E5EA27E735B"}
 */
function onActionConsultarPrecios(event) 
{
	clearFormVariables();
    plugins.phoneGapBarCode.scan(onSuccess, onError);
}

/**
 * @param {{cancelled: Boolean, format: String, text: String}} result
 *
 * 
 *
 * 
 *
 * @properties={typeid:24,uuid:"9A232426-91E6-44D5-B941-3EFA19652C8B"}
 */
function onSuccess(result) {
     if (result) {
   	 application.output(JSON.stringify(result));
   	 if (result && result.cancelled) {
   		 clearFormVariables();
   	 } else if (result) {
   		 format = result.format;
   		 code = result.text;
   	 }
    }


}

/**
 * TODO generated, please specify type and doc for the params
 * @param error
 *
 * 
 *
 * @properties={typeid:24,uuid:"0ACD09A9-70D5-4810-B517-B221B7191B65"}
 */
function onError(error) {
    application.output('Inside onError function', LOGGINGLEVEL.ERROR)
    clearFormVariables();
}

/**
 * @properties={typeid:24,uuid:"D42104AE-C396-4770-85AA-7D9DBE5AEB2D"}
 */
function clearFormVariables() {
	format = "";
	code = "";
}