import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom';
import { Photo } from "../types/photo";
//import { Post as AlbumInfo } from "../types/posts";
import '../App.css'

export const PhotoGrid = () => {
    const [photo, setPhotos] = useState<Photo[]>([]);
    //const [info, setInfo] = useState<AlbumInfo>({id: 0, title: '', userId: 0}) // mesmo assim não consigo jogar o title
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadPhotos();
    }, []);

    const loadPhotos = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        let json = await response.json();
        setPhotos(json);
    }
    

    const handleBackButton = () => {
        navigate(-1);
    }
    
    return (
        <div> 
            <button onClick={handleBackButton}>Voltar</button>
            <p>{params.title}</p>
            <div className="gridWrapper">
                {photo.map((item, index) => (    
                    <div className="photoGrid" key={index}>
                        <Link to='/album/photo'><img src={item.thumbnailUrl} alt="" /></Link>
                    </div>                    
                ))}
            </div>
        </div>
    );
    // Falta arrumar o nome do album (do jeito que fiz fica 
    // aparecendo o id ao invés do title) e adicionar o header
    // que é o Galeria de fotos seguido de um <hr /> e um botão
    // voltar
}