import { Link } from "react-router-dom"

const NoEncontrado = () => {
  return (
    <div>
        <h1>404 Pagina no encontrada</h1>
        <Link to="/" className="btn btn-outline-primary">Volver a recargar</Link>
    </div>
  )
}
export default NoEncontrado