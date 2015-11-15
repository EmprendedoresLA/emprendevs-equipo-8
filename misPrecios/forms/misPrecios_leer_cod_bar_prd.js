/**
 * @properties={typeid:35,uuid:"83172626-AF45-47F4-886A-34E0E0698518",variableType:-4}
 */
var vl_imagen = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6BD956CE-E40F-4512-BFDD-7B8C5E6E46B7",variableType:8}
 */
var vl_precio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EE90E385-5D8B-4E65-AAEB-CAA7245A056D"}
 */
var vl_producto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"60217645-F776-4922-8E29-BBEB0534C9AB",variableType:4}
 */
var vl_graba_producto = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"395FA116-6980-4D6B-BE83-2B159B8F066D"}
 */
var vl_nombre = null;

/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5F5D64CF-C084-4DE4-AC31-03590AAA0B3E"}
 */
function onActionVolver(event) {
	vl_producto = null
	vl_imagen = null
	databaseManager.revertEditedRecords(foundset)
	application.showForm(forms.misPrecios_principal_copy)

}

/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9840196B-22EE-465C-A7EB-21AA8E582DE2"}
 */
function onActionGrabar(event) {
	var prd = prd_id
	/** @type {JSFoundSet<db:/misprecios/mp_registros_precios>} */
	var fs_prec = databaseManager.getFoundSet("misprecios","mp_registros_precios")
	if(vl_graba_producto == 1)
	{
		if(prd_nombre != null)
		{
			databaseManager.saveData()
			prd = prd_id
			if(vl_precio != 0 && vl_precio != null)
			{
				vl_graba_producto = 0
				fs_prec.newRecord()
				fs_prec.prd_id = prd
				fs_prec.registro_fecha = application.getServerTimeStamp()
				fs_prec.registro_precio = vl_precio
				fs_prec.sucursal_id = 1
				fs_prec.usr_id = 1
				databaseManager.saveData(fs_prec)
			}
		}
		else
		{
			plugins.dialogs.showErrorDialog('Error','Falta ingresar el Nombre del Producto')
			return
		}
	}
	else
	{
		if(vl_precio != 0 && vl_precio != null)
		{
			fs_prec.newRecord()
			fs_prec.prd_id = prd
			fs_prec.registro_fecha = application.getServerTimeStamp()
			fs_prec.registro_precio = vl_precio
			fs_prec.sucursal_id = 1
			fs_prec.usr_id = 1
			databaseManager.saveData(fs_prec)
		}
	}

	vl_precio = null
	plugins.svyToastr.success("Datos Grabados!!!")
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"62FE6FC0-8CAC-4F4F-BB47-21B13B9347CE"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	databaseManager.setAutoSave(true)
	vl_precio = null
	vl_nombre = null
	if(vl_producto != null)
	{
		controller.find()
		 prd_cod_barras = vl_producto
		var cant = controller.search()
		if(cant > 0)
		{
			foundset.getRecord(1)
			vl_nombre = prd_nombre
			vl_graba_producto = 0
			vl_imagen = prd_imagen
		}
		else
		{

			vl_nombre = null
			vl_graba_producto = 1
			controller.newRecord()
			prd_cod_barras = vl_producto
		}
	}
}

/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"78FA455F-C14F-4E9C-8708-6CC622797AFB"}
 */
function onActionCamara(event) {
	application.showForm(forms.misPrecios_leer_cod_bar_prd_foto)

}
