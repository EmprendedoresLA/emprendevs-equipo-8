# emprendevs-equipo-8

Instrucciones para su instalación

Nuestra solución requiere de Apache Tomcat para correr, por lo que se debe instalar Apache Tomcat y una base de datos. En nuestro servidor de testing en Softlayer estamos usando Postgre SQL, pero en nuestras máquinas locales, algunos usamos Postgre y otros MySQL, pero se puede utilizar cualquier base de datos que se desee.

Nuestro proyecto incluyen tres soluciones diferentes: una móvil, una web y una web interna de administración. Las tres están hechas con Servoy. Pueden bajar Servoy desde http://servoy.prorm.com e instalar el Servoy Developer, que también insstalará un Servoy Application Server con Apache Tomcat y da la opción de instalar una PostgreSQL para desarrollo, todo dentro del mismo instalador y de la misma carpeta de disco.

Luego de iniciar Servoy Developer que instala Eclipse, ya que Servoy es un plugin de Eclipse, agregar egit para poder conectarse con el repositorio en GITHUB. Bajar al ambiente de desarrollo los proyecto. Los módulos web los pueden correr directamente desde Servoy Developer para probar, y el módulo móvil, como usa APIs de Phonegap (Apache Cordova), hay que correrlo en un móvil. Para subir las aplicaciones a producción, hay que exportarlas como archivo war desde Servoy Developer. Hacer esto, incluyendo la solución activa, para cada una de las tres soluciones. Luego copiar los wars en la carpeta webapps de su servidor Tomcat y estarán listas para correr. 

La aplicación móvil, de momento la tenemos para ios con un certificado de desarrollo que está atado a algunas UDIDs por lo que no van a poder correrlo. En cuanto lo tengamos abierto para ios y en android, bastará con bajar la app desde una url o con un código QR.
