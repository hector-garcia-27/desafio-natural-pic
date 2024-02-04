import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Navbar = () => {

  const { setDataPhotos } = useContext(PhotoContext)

  useEffect(() => { // deje aca el llamado de la api porque este componente no se desmonta
    ApiPexels() // por lo tanto cuando cambio de vistas no se vuelve a ejecutar el useEffect
    console.log("Hola")
  }, [])

  const ApiPexels = async () => {

    const urlApi = "/photos.json"

    try {
      const res = await fetch(urlApi);
      const data = await res.json();
      const fotos = data.photos
      setDataPhotos(fotos)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className="navbar">
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
