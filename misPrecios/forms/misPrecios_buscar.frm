customProperties:"layout:{\
responsive:true\
}",
dataSource:"db:/misprecios/mp_registros_precios",
items:[
{
customProperties:"attributes:{\
class:\"container\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"container\"\
}",
items:[
{
customProperties:"attributes:{\
class:\"row\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"row\"\
}",
items:[
{
customProperties:"attributes:{\
class:\"col-lg-12\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"column\"\
}",
items:[
{
customProperties:"attributes:{\
class:\"page-header\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"div\"\
}",
items:[
{
customProperties:"attributes:{\
class:\"h2\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"div\"\
}",
items:[
{
json:{
text:"Busqueda de Precios"
},
name:"label_titulo",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"B9E90C1D-0FC1-4477-82CD-2255E071C45F"
}
],
location:"1,1",
typeid:46,
uuid:"DD4F855B-842D-4B98-892C-64665DCD7319"
}
],
location:"1,1",
typeid:46,
uuid:"81B3D890-CE22-4C05-806C-997674ABECB2"
}
],
location:"1,1",
typeid:46,
uuid:"7BBFA00D-6BA1-4023-A7C4-7201F82D15F4"
}
],
location:"1,1",
typeid:46,
uuid:"2BB84D0B-82F2-4D6F-80D9-809878D23C90"
},
{
customProperties:"attributes:{\
class:\"row\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"row\"\
}",
items:[
{
customProperties:"attributes:{\
class:\"col-md-4 col-md-offset-6 col-sm-offset-6 col-xs-offset-8\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"column\"\
}",
items:[
{
json:{
onActionMethodID:"C529791F-94AA-41FF-8F56-9D6AF1DE70E1",
styleClass:"btn btn-lg glyphicon glyphicon-home btn-secondary",
text:" "
},
location:"60,70",
name:"btn_home",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"F97423DF-F390-46D9-B58F-A67AAAC02754"
}
],
location:"1,1",
typeid:46,
uuid:"B30FA6FD-0761-43EB-B629-8E6334DDF8E7"
}
],
location:"2,2",
tagType:"div style=\"padding-bottom:5px;\"",
typeid:46,
uuid:"3F2553C7-0740-4744-84EB-33236C75EFB8"
},
{
customProperties:"attributes:{\
class:\"row\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"row\"\
}",
items:[
{
customProperties:"attributes:{\
class:\"col-lg-12\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"column\"\
}",
items:[
{
customProperties:"attributes:{\
class:\"row\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"row\"\
}",
items:[
{
customProperties:"attributes:{\
class:\"col-md-12\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"column\"\
}",
items:[
{
customProperties:"attributes:{\
class:\"table-responsive\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"responsivetable\"\
}",
items:[
{
items:[
{
json:{
foundsetSelector:""
},
typeName:"foundset",
typeid:48,
uuid:"33805C7F-961B-4918-952E-3CB4C0B0C5A4"
},
{
json:{
dataprovider:"registro_precio",
format:"#,###.00",
headerText:"Precio"
},
typeName:"column",
typeid:48,
uuid:"6FD92FD6-972E-47CA-8176-0CA851849D1D"
},
{
json:{
dataprovider:"mp_registros_precios_to_mp_sucursales.sucursal_nombre",
headerText:"Lugar"
},
typeName:"column",
typeid:48,
uuid:"B27440C6-F33A-40C6-854A-CDA965C65E44"
},
{
json:{
dataprovider:"mp_registros_precios_to_mp_productos.prd_nombre",
headerText:"Producto"
},
typeName:"column",
typeid:48,
uuid:"F43D0E40-2200-4AFD-BAFE-B081A31B0F89"
},
{
json:{
dataprovider:"registro_fecha",
format:"dd-MM-yyyy",
headerText:"Fecha Carga"
},
typeName:"column",
typeid:48,
uuid:"F7567842-95AC-4AB4-8F54-CB204D5FEC17"
}
],
json:{
columns:[
{
dataprovider:"mp_registros_precios_to_mp_productos.prd_nombre",
headerText:"Producto"
},
{
dataprovider:"registro_precio",
format:"#,###.00",
headerText:"Precio"
},
{
dataprovider:"mp_registros_precios_to_mp_sucursales.sucursal_nombre",
headerText:"Lugar"
},
{
dataprovider:"registro_fecha",
format:"dd-MM-yyyy",
headerText:"Fecha Carga"
}
],
foundset:{
foundsetSelector:""
},
styleClass:"table table-striped table-hover"
},
location:"1,1",
name:"tabla",
typeName:"bootstrapcomponents-table",
typeid:47,
uuid:"CBC84674-3142-4308-B963-56E01F9C84F3"
}
],
location:"2,2",
typeid:46,
uuid:"A433A3DD-C285-446D-B729-F6D3690D8565"
}
],
location:"1,1",
typeid:46,
uuid:"F6C8F094-B5FB-4B40-A83A-A9D82CE2B8F4"
}
],
location:"3,3",
typeid:46,
uuid:"72F49108-E052-47CE-91B1-9E8EBE04DA59"
},
{
customProperties:"attributes:{\
class:\"customDiv\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"div\"\
}",
location:"4,4",
typeid:46,
uuid:"798E2E99-88E6-4AF3-BE82-D86696ABC7B4"
},
{
customProperties:"attributes:{\
class:\"row\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"row\"\
}",
items:[
{
customProperties:"attributes:{\
class:\"col-lg-12\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"column\"\
}",
elementId:"dosBotones",
items:[
{
customProperties:"attributes:{\
class:\"col-lg-8 col-sm-8 col-xs-8\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"div\"\
}",
items:[
{
json:{
dataProviderID:"vl_prd",
placeholderText:"Ingrese nombre de producto"
},
location:"1,1",
name:"prd",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"2ED7DFAF-E7E8-4B92-81B5-AFDCC0D7A4D9"
}
],
location:"1,1",
typeid:46,
uuid:"0929DD01-4E96-4F01-8687-E9707F51046D"
},
{
customProperties:"attributes:{\
class:\"col-lg-2 col-sm-2 col-xs-2\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"div\"\
}",
items:[
{
json:{
onActionMethodID:"1835B589-D832-4825-A9CB-B17454B477C2",
styleClass:"btn btn-md glyphicon glyphicon-search btn-primary",
text:" "
},
location:"1,1",
name:"btn_buscar",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"FE61CFB3-436E-497A-9DB1-0598109B4C73"
}
],
location:"2,2",
typeid:46,
uuid:"AE038C0E-2CFC-446C-996E-8C1A1A167530"
},
{
customProperties:"attributes:{\
class:\"col-lg-2 col-sm-2 col-xs-2\"\
},\
properties:{\
packagename:\"12grid\",\
specname:\"div\"\
}",
items:[
{
json:{
onActionMethodID:"13848F57-51AE-4315-8DE2-627F104FA5EC",
styleClass:"btn btn-md glyphicon glyphicon-refresh btn-primary",
text:" "
},
location:"234,215",
name:"btn_refrescar",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"D1A869A0-220D-41EC-8643-9DBE6985AB7F"
}
],
location:"3,3",
typeid:46,
uuid:"B4E801C6-EF2E-4B9B-B0FA-8D7FF757F78C"
}
],
location:"1,1",
typeid:46,
uuid:"D20F24CF-2835-4354-B7EA-1B59258CFF56"
}
],
location:"2,2",
tagType:"div style=\"padding-bottom:5px;;\"",
typeid:46,
uuid:"EB2B53C0-7729-4CCC-AE1F-F6BC2FD0DC84"
}
],
location:"1,1",
typeid:46,
uuid:"7AB80290-94F0-4A46-8EA5-CA3699845C0E"
}
],
location:"3,3",
typeid:46,
uuid:"BA4BB384-7873-4E42-87CF-03E109A10FEF"
}
],
location:"1,1",
typeid:46,
uuid:"8CBFD7F8-A5F6-4C75-A8E4-F860C18C4C28"
}
],
name:"misPrecios_buscar",
navigatorID:"-1",
showInMenu:true,
typeid:3,
uuid:"936D3C75-E4C7-4010-89B5-ADB1D283FB7B"