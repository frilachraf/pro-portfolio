export const AppHeading2 = ({text}:{text:string})=>{
    return (
        <h2 className="mt-4 mb-6 text-4xl font-semibold lg:text-5xl">
            {text}
        </h2>
    )
}

export const AppHeadingDescription = ({text}:{text:string})=>{
    return (
       <p className="font-medium text-muted-foreground lg:text-xl">
        {text}
    </p>
    )
}