import * as React from "react";

export default function Head({title, description}) {
    return (
        <>
            <meta charSet="utf-8"/>
            <title>{title}</title>
            {description ?? (
                <meta
                    name="description"
                    content={description}
                />
            )}
        </>
    )
}