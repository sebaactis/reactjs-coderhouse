# Proyecto React Hamburguepedia - Coderhouse

El proyecto esta realizado en React, y corresponde a una tienda e-commerce, donde el usuario puede simular el proceso completo de una compra de diversas hamburguesas que ofrece el sitio. Desde la eleccion de los productos y sus respectivas cantidades, el detalle de los mismos y el checkout final para finalizar la compra, recibiendo como ultimo paso un numero de pedido generado de forma aleatoria. 


***

## Iniciar el proyecto de forma local

1. Clonar el repositirio

```
git clone https://github.com/sebaactis/reactjs-hamburguepedia
```

2. Instalar las dependencias del proyecto
 
```
npm install
```

3. Correr el proyecto
```
npm start
```

***

## Frameworks

- [Bootstrap](https://getbootstrap.com/): Utilizado para algunos estilos concretos.

```
npm install bootstrap@5.2.2
```   

## Librerias

-  [react-router-dom](https://reactrouter.com/en/main): Entorno donde se encuentran las diferentes rutas para navegar a traves de todo el sitio.

```
npm install react-router-dom
```

- [bootstrap-icons](https://icons.getbootstrap.com/): Iconos que se encuentra en el sitio.
```
npm install bootstrap-icons
```
- [firebase](https://console.firebase.google.com/): Se utiliza como la base de datos de este proyecto. En el se encuentran guardados los productos mostrados que puede elegir el usuario, y tambien donde se guardaran las futuruas ordenes de compra realizadas por los mismos. 
```
npm install firebase
```

***
## Funcionalidades del proyecto

- ### El usuario puede navegar libremente a traves de todos los enlaces que estan a disposicion. 

**1.** En la pagina principal encontrara todos los productos.

**2.** Puede ingresar a ver el detalle de cada producto y su descripcion.

**3.** Puede filtrar por tipo de productos a traves de la barra de navegacion.

**4.** Puede ingresar a su carrito de compras.

**5.** Puede ingresar para ver el estado de un pedido ya realizado.

- ### El usuario puede realizar un proceso de compra completo.

**1.** Dentro del detalle de cada producto, puede elegir la cantidad que desea de ese producto, sumando o restado a traves de sus respectivos botones.

**2.** Dentro del carrito, puede decidir si sumar o restar mas unidades de ese producto o eliminarlo por completo de su pedido.

**3.** Puede vaciar todo el carrito con un solo boton, eliminando todo lo que contenga el mismo.

**4.** Puede finalizar la compra, donde tendra que llenar un formulario con sus datos.

**5.** Una vez completo y terminado la compra, se le otorgara un numero de pedido / seguimiento unico e irrepetible.

**6.** Con su numero de seguimiento, puede ingresar a traves de la barra de navegacion y consultar su pedido y el detalle del mismo.

- ### La pagina mostrara en todo momento el estado actual del pedido del usuario, hasta el momento en que finalize el proceso.

**1.** En la barra de navegacion, podra ver cuantos productos en total tiene guardados en su carrito de compras.

**2.** Dentro del carrito vera todo el detalle de su compra actual: importes totales de cada producto y de la suma de los mismos en su totalidad, asi como las cantidades por producto y totales.

**3.** Antes de finalizar la compra con el formulario, podra ver nuevamente un resumen de su compra.

***

## Muchas gracias por visitar mi proyecto. Podes ingresar a ver el resto de mis trabajos en mi [repositorio](https://github.com/sebaactis).








