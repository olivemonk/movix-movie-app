import React, {useState, useEffect} from 'react'
import "./style.scss"
import {useNavigate} from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import Img from '../../../components/lazyLoadImage/Img'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {

    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const { url } = useSelector((state) => state.home);

    const {data, loading} = useFetch('/movie/upcoming');

    useEffect(() => {
        const br = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(br);
    },[data])

    const searchQueryHandler = (e) => {
        if(e.key==='Enter' && query.length>0){
            navigate(`/search/${query}`)
        }

    }


  return (
    <div className='heroBanner'>
        {!loading && <div className="backdrop-img">
            <Img src={background}/>
        </div>}

        <div className="opacity-layer"></div>

        <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">Millions of Movies and TV Shows to Discover and Explore Now</span>
                    <div className="searchInput">
                        <input 
                            type="text" 
                            placeholder='Seach for Movies and TV shows...'
                            onChange={(e)=>setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
        </ContentWrapper>
    </div>
  )
}

export default HeroBanner