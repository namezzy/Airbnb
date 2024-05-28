import React, { memo } from 'react'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner/>
    </HomeWrapper>
  )
})

export default Home