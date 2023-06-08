import React, {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/carousel';

const Popular = () => {

  const [endpoint, setEndpoint] = useState('movie');
  const {data, Loading} = useFetch(`/${endpoint}/popular`)


  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv")
  }



  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">What's Popular</span>
            <SwitchTabs data={["Movies", "TV Shows"]}  onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} Loading={Loading} endpoint={endpoint}/>
    </div>
  )
}

export default Popular