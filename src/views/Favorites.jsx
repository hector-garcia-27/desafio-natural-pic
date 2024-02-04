import { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Favorites = () => {

  const { dataPhotos, setDataPhotos } = useContext(PhotoContext)
  const newData = [...dataPhotos]
  const FotoFilter = newData.filter((imagen) => imagen.liked)

  return (
    <div className="ContainerGallery">
      {FotoFilter.map((foto) => {
        return (
          <div className="gallery" key={foto.id}>
            <div className="containerfoto">
              <img className="foto" src={foto.src.large} alt="foto" onClick={() => Liked(foto.id)} />
            </div>
          </div>
        )
      })
      }
    </div>
  );
};
export default Favorites;
