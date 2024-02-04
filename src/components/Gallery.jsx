import { useContext, useEffect, useState } from "react";
import { PhotoContext } from "../context/PhotoContext";
import './gallery.css'
import IconHeart from "./IconHeart";

const Gallery = () => {

  /*   const [ubicacion, setUbicacion] = useState('/src/assets/icons/iconCorazon.svg') */
  const { dataPhotos, setDataPhotos } = useContext(PhotoContext)

  const Liked = (id) => {
    const newData = [...dataPhotos]
    const like = newData.find((element) => element.id === id)
    if (like) {
      like.liked = !like.liked
    }

    setDataPhotos(newData)
  }

  return (
    <div className="ContainerGallery">
      {dataPhotos.map((foto) => {
        return (
          <div className="gallery" key={foto.id}>
            <div className="containerfoto">
              <img className="foto" src={foto.src.large} alt="foto" onClick={() => Liked(foto.id)} />
              <IconHeart filled={foto.liked} Liked={Liked} />
            </div>
            <p>{foto.alt}</p>
          </div>
        )
      })
      }
    </div>
  )
}
export default Gallery;
