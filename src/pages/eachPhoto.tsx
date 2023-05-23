import { useNavigate } from "react-router-dom";

export const EachPhoto = () => {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }
    
    return (
        <div>
            <button onClick={handleBackButton}>Voltar</button>
            <br />
            <p>Título da photo</p>

            <div>
                <img src="" alt="" width='600' height='600' style={{backgroundColor: 'red'}}/>
            </div>
        </div>
    );
}