import { useEffect, useState } from "react";
import { Post } from "../types/posts";
import { api } from "../api";
import '../App.css';
import { HomeList } from "../Components/HomeList";

export const Home = () => {
    useEffect(() => {
        loadAlbums();
    }, []);
    
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
      
    const loadAlbums = async () => {
      setLoading(true);  
      const albums = await api.getAlbums()
      setLoading(false);
      setPosts(albums);
    }
    
    
    return (       
      <div>
        {loading &&
          <div>
            <p>Loading the page...</p>
          </div>
        }

        {posts.map((item) => (
          <div className='albums_main' key={item.id}>
            <HomeList id={item.id} title={item.title}/>
          </div>
        ))}
        
        
      </div>
    );
}