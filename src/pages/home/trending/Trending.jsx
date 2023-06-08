import React, {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/carousel';

const Trending = () => {

  const [endpoint, setEndpoint] = useState('day');
  const {data, Loading} = useFetch(`/trending/all/${endpoint}`)


  const onTabChange = (tab) => {
    setEndpoint(tab.toLowerCase())
  }



  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data={["Day", "Week"]}  onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} Loading={Loading}/>
    </div>
  )
}

export default Trending