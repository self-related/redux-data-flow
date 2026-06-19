interface MetaOpts {
    title?: string,
    description?: string,
}

export function setMeta({ title, description }: MetaOpts) {
    if (title) {
        document.title = title;
    }

    if (description) {
        const descElement = document.getElementById("page-description") as HTMLMetaElement;
        descElement.content = description;
    }
}