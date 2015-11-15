/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3A0B516-34D6-4AD4-8924-AE3CB2C36DDF"}
 */
var vl_prd = null;

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"1835B589-D832-4825-A9CB-B17454B477C2"}
 */
function filtrar(){
	controller.find()
	if(vl_prd != null && vl_prd != ''){
		mp_registros_precios_to_mp_productos.prd_nombre = '%'+vl_prd+'%'
	}
	controller.search()
}
/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C529791F-94AA-41FF-8F56-9D6AF1DE70E1"}
 */
function onActionVolver(event) {
	forms.misPrecios_principal.controller.show()

}

/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"13848F57-51AE-4315-8DE2-627F104FA5EC"}
 * @AllowToRunInFind
 */
function onActionRefresh(event) {
	controller.loadAllRecords()
	vl_prd = null

}
