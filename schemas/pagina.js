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
            title: "Contenido",
            name: "contenido",
            type: "array",
            of: [
                {type: 'block'},
                {type: 'image'}
            ]
        }
    ]
}