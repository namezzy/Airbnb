import React, { memo } from 'react'
import { PicturesWrapper } from './style'
import { useSelector } from 'react-redux'

const DetailPictures = memo(() => {
    /** redux获取数据*/
    const {detailInfo} = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }))
  return (
    <PicturesWrapper>{detailInfo.name}</PicturesWrapper>
  )
})

export default DetailPictures