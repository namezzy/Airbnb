import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header'

const HomeLongfor = memo((props) => {
    const { infoData } = props
  return (
    <LongforWrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
        <div className='longfor-list'>
            {
                infoData.list.map(item => {
                    return <div className='item'>{item.city}-{item.price}</div>
                })
            }
        </div>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
    infoData: PropTypes.object
}

export default HomeLongfor