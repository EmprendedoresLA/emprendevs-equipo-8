# emprendevs-equipo-8

misPrecios
===========

Gasta menos en la comunidad de precios para jovenes independientes.
Oportunidad

Instrucciones para su instalación
==========================================

Nuestra solución requiere de Apache Tomcat para correr, por lo que se debe instalar Apache Tomcat y una base de datos. En nuestro servidor de testing en Softlayer estamos usando Postgre SQL, pero en nuestras máquinas locales, algunos usamos Postgre y otros MySQL, pero se puede utilizar cualquier base de datos que se desee. (Ver arquitectura de Deployment de Servoy https://wiki.servoy.com/display/DOCS/Servoy+Deployment+Architecture).

Nuestro proyecto incluyen tres soluciones diferentes: una móvil, una web y una web interna de administración. Las tres están hechas con Servoy. Pueden bajar Servoy desde http://servoy.prorm.com e instalar el Servoy Developer, que también insstalará un Servoy Application Server con Apache Tomcat y da la opción de instalar una PostgreSQL para desarrollo, todo dentro del mismo instalador y de la misma carpeta de disco.

Luego de iniciar Servoy Developer que instala Eclipse, ya que Servoy es un plugin de Eclipse, agregar egit para poder conectarse con el repositorio en GITHUB. Bajar al ambiente de desarrollo los proyecto. Los módulos web los pueden correr directamente desde Servoy Developer para probar, y el módulo móvil, como usa APIs de Phonegap (Apache Cordova), hay que correrlo en un móvil. Para subir las aplicaciones a producción, hay que exportarlas como archivo war desde Servoy Developer. Hacer esto, incluyendo la solución activa, para cada una de las tres soluciones. Luego copiar los wars en la carpeta webapps de su servidor Tomcat y estarán listas para correr. 

La aplicación móvil, de momento la tenemos para ios con un certificado de desarrollo que está atado a algunas UDIDs por lo que no van a poder correrlo. En cuanto lo tengamos abierto para ios y en android, bastará con bajar la app desde una url o con un código QR.

Navegadores soportados. El NGClient de Servoy con el que corremos las aplicaciones, necesita soporte de HTML5, CSS3 y WebSocket, por lo que correrá en cualquier navegador que soporte estos. Algunos navegadores soportados son:

    Internet Explorer 10 y superior
    Firefox 11 y superior
    Chrome 16 y superior
    Safari 7 y superior
    Opera 12 y superior

La mayoría de los navegadores que soportan WebSocket también soportan HTML5 y CSS3. 

Persona y escenario
------------------
El analisis de persona y escenario puede verse en el siguiente link.
https://docs.google.com/document/d/1flYd4TwpvtPeZDkDW5S3CP9dl8zFHNl_J-79OemkHl0/edit?usp=sharing

Presentacion
------------
La presentacion del proyecto puede verse en el siguiente link.
https://docs.google.com/presentation/d/18D2gxw_d0gZD0boghatSsx4Sa4w_yDP5RADqXu56oYQ/edit?usp=sharing

Diagrama de funcionamiento
--------------------------
El diagrama de funcionamiento puede verse en el siguiente link.
https://drive.google.com/file/d/0B8IrWvi2RXi0cDB5MjRoWVROVjA/view?usp=drive_web

Modelo de datos
---------------
El modelo de datos puede verse en el siguiente link.
https://drive.google.com/open?id=0B4qLAYgT2klKQXZYNTY2d3lWaHc&authuser=0

El video de la App Movil puede verse en el siguiente link:
https://youtu.be/V41biN0-Cpg


