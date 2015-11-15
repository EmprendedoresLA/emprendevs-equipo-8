/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C3C9BF86-8E41-484E-AD24-58F6BD53ECCC"}
 */
function onActionVolver(event) 
{
	application.showForm(forms.misPrecios_leer_cod_bar_prd)

}

/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"14B17D6C-11C9-4ABB-B63D-7255B755B3CB"}
 */
function onActionCamara(event) 
{
    plugins.phoneGapCamera.getPicture(onPictureSuccess, onPictureError, {
  		 quality: 50,
  		 targetWidth: 1200,
  		 targetHeight: 1200,
  		 sourceType: 2 - 1,
  		 destinationType: 0
  	 });


}

/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"4D5D433D-BD0A-4F6B-AEE7-CC54267B2659"}
 */
function onActionGaleria(event) {
    plugins.phoneGapCamera.getPicture(onPictureSuccess, onPictureError, {
 		 quality: 50,
 		 targetWidth: 1200,
 		 targetHeight: 1200,
 		 sourceType: 1 - 1,
 		 destinationType: 0
 	 });

}

/**
 * TODO generated, please specify type and doc for the params
 * @param result
 *
 * @properties={typeid:24,uuid:"0591F531-8A98-4B97-A1CF-4349B03707D4"}
 */
function onPictureSuccess(result) {
    if (result) {
   	 var decoder = new Packages.sun.misc.BASE64Decoder();
   	forms.misPrecios_leer_cod_bar_prd.vl_imagen = decoder.decodeBuffer(result);
   	forms.misPrecios_leer_cod_bar_prd.foundset.prd_imagen = decoder.decodeBuffer(result);
   	 databaseManager.saveData()
	 application.showForm(forms.misPrecios_leer_cod_bar_prd)
    }
}

/**
 * TODO generated, please specify type and doc for the params
 * @param error
 *
 * @properties={typeid:24,uuid:"89C930FD-28C9-4ADC-B8BA-612D57D37B3E"}
 */
function onPictureError(error) {
    plugins.dialogs.showErrorDialog("Error", "Error getting picture: " + error);
}
