import { useState, createContext } from "react";

export const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
    const [dataPhotos, setDataPhotos] = useState([])

    return (
        <PhotoContext.Provider value={{ dataPhotos, setDataPhotos }}>
            {children}
        </PhotoContext.Provider>
    )
};

export default PhotoProvider