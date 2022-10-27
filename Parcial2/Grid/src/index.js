new gridjs.Grid({
    columns: ['IdProducto', 'Descripcion', 'Precio','Existencia inicial','Stock'],
    server: {
        url: 'http://localhost:8081/inventariofull',
        then: data => data.map(inventario =>
            [inventario.ID_PRODUCTO, inventario.DESCRIPCION, inventario.PRECIO,inventario.EXISTENCIA_INICIAL,inventario.STOCK]
        )
    }
}).render(document.getElementById("wrapper"));