/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DF4C5F48-A14B-4F0E-814F-0FBFC3E129EC"}
 */
var format = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F90FBDEC-CEAB-4D7B-A77D-70E792FA9642"}
 */
var code = "";

/**
 *
 * @param {JSEvent} event
 *
 * 
 *
 * @properties={typeid:24,uuid:"29EBC969-4399-4E85-A59A-D54BDB67CF09"}
 */
function onActionConsultarPrecios(event) 
{	
	//forms.misPrecios_leer_cod_bar_prd.vl_producto = "77908950007826677666777"
	//application.showForm(forms.misPrecios_leer_cod_bar_prd)
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
 * @properties={typeid:24,uuid:"D9C537C6-8FFB-4A61-89BB-C1D957A1027E"}
 */
function onSuccess(result) {
     if (result) {
   	 application.output(JSON.stringify(result));
   	 if (result && result.cancelled) {
   		 clearFormVariables();
   	 } else if (result) {
//   		 format = result.format;
//   		 code = result.text;
			forms.misPrecios_leer_cod_bar_prd.vl_producto = result.text
			forms.misPrecios_leer_cod_bar_prd.foundset.clear()
			application.showForm(forms.misPrecios_leer_cod_bar_prd)
   	 }
    }


}

/**
 * TODO generated, please specify type and doc for the params
 * @param error
 *
 * 
 *
 * @properties={typeid:24,uuid:"A9A35AFE-651E-46C2-97F4-5E637F973B5D"}
 */
function onError(error) {
    application.output('Inside onError function', LOGGINGLEVEL.ERROR)
    clearFormVariables();
}

/**
 * @properties={typeid:24,uuid:"2BB80E55-A0DE-4D60-B518-CB4B3456BCB5"}
 */
function clearFormVariables() {
	format = "";
	code = "";
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"031A09AB-2DC8-401C-9BF8-CD69CD6AD761"}
 */
function onActionBuscar(event) {
	forms.misPrecios_buscar.controller.show()

}
