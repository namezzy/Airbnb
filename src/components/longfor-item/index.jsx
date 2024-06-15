import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const LongforItem = memo((props) => {
  return (
    <ItemWrapper>LongforItem</ItemWrapper>
  )
})

LongforItem.propTypes = {
    itemData: PropTypes.object
}

export default LongforItem