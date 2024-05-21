import React, { memo, useEffect, useState } from 'react'
import leviRequest from '@/services'

const Home = memo(() => {
  // 定义状态
  const [highScore, setHighScore] = useState({})


  // 网络请求的代码
  useEffect(() => {
    leviRequest.get({ url: "/home/highscore" }).then(res => {
      console.log(res)
      setHighScore(res)
    })
  }, [])

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      {
        // highScore.list && <ul>
        //   {
        //     highScore.list.map((item, index) => {
        //       return <li key={index}>{item.name}</li>
        //     })
        //   }
        // </ul>


        <ul>
          {
            // 使用可选列
            highScore.list?.map((item, index) => {
              return <li key={index}>{item.name}</li>
            })
          }
        </ul>
      }
    </div>
  )
})

export default Home