import { useEffect } from "react";

const ApiPhotos = () => {

    useEffect(() => {
        ApiPexels()
    })

    const ApiPexels = async () => {

        const urlApi = "/public/photos.json"

        try {
            const res = await fetch(urlApi);
            const data = await res.json();
            const fotos = data.photos
            console.group(fotos) // tengo que crear el context y setear el array en un state para compartir la data de la galeria con todos las paginas 
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>mi api</h2> 
        </>
    )
} 

export default ApiPhotos