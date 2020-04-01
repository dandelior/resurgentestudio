export default {
    title: "Página",
    name: "pagina",
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
            title: "Contenidos",
            name: "contenido",
            type: "array",
            of: [
                {type: 'block'},
                {type: 'image'}
            ]
        }
    ]
}