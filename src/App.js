import React, { memo } from 'react'
import HelloWorld from 'components/hello-world'

const App = memo(() => {
  return (
    <div>
      <HelloWorld/>
    </div>
  )
})

export default App