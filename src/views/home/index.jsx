import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'

const Home = memo(() => {
  /**从Redux中获取数据 */
const {goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
}),shallowEqual)

  /** 派发一步的事件：发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxx"))
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        <h2>{goodPriceInfo.title}</h2>
        <ul>
          {
            goodPriceInfo.list.map(item => {
              return <li key={item.id}>{item.name}</li>
            })
          }
        </ul>
      </div>
    </HomeWrapper>
  )
})

export default Home