import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <div className="left">left</div>
      <div className="center">center</div>
      <div className="right">right</div>
    </HeaderWrapper>
  )
})

export default AppHeader 