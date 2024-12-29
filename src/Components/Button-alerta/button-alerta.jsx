import './button-alerta.css'

export const ButtonAlerta = ({label}) => {

    function AlertaLabel() {
        alert('A label desse botão é:' + ' ' + label)
    }

    return (
        <button className="btnAlert" onClick={AlertaLabel}>Mostrar Alerta</button>
    )
}