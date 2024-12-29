
export const ParagrafoCustomizado = ({texto, colorText}) => {
    return (
    <>
        <p className="paragrafoCustomizado" style={{color: colorText, textTransform:'uppercase'}}>{texto}</p>
    </>
    )
}