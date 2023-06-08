import React from 'react'
import "./style.scss"
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBannner/DetailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videoFetch/VideoSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'


const Details = () => {

  const { mediaType, id } = useParams()
  const {data, laoding} = useFetch(`/${mediaType }/${id}/videos`)
  const {data: credits, laoding: creditsLoading} = useFetch(`/${mediaType }/${id}/credits`)





  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}  />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={laoding} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default Details