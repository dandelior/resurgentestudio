export default {
    title: "Tag",
    name: "tag",
    type: "document",
    fields: [
        {
            title: "Nombre",
            name: "nombre",
            type: "string"
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "nombre",
                maxLength: 200,
                slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 200)
            }
        }
    ]
}