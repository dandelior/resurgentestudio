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
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "titulo",
                maxLength: 200,
                slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 200)
            }
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
        {
            title: '¿Es Destacado?',
            name: 'esDestacado',
            type: 'boolean'
        }
    ]
}