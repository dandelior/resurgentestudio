export default {
    title: "Artículo",
    name: "articulo",
    type: "document",
    fields: [
        {
            title: "Título",
            name: "titulo",
            type: "string"
        },
        {
            title: "Fecha",
            name: "fecha",
            type: "datetime"
        },
        {
            title: "Contenido",
            name: "contenido",
            type: "array",
            of: [
                {type: 'block'},
                {type: 'image'}
            ]
        },
        {
            title: "Imagen Destacada",
            name: "imagenDestacada",
            type: "image"
        },
        {
            title: "Tag",
            name: "tag",
            type: "reference",
            to: [{type: 'tag'}]
        },
        {
            title: "Autor",
            name: "autor",
            type: "reference",
            to: [{type: 'autor'}]
        },
    ]
}