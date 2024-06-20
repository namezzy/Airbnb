import React, { memo } from 'react'
import { Pagination } from '@mui/material'

import { PaginationWrapper } from './style'


const EntirePagination = memo(() => {
  return (
    <PaginationWrapper>
      <div className='info'>
      <Pagination count={15}/>
        <div className='desc'>
          第x-yy个房源，共超过zzz个
        </div>
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination