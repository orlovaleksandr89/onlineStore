import React, { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax'
import macImg from '../../assets/mac.jpg'

function ParallaxCover() {
  const [showMessage, setShowMessage] = useState(false)
  useEffect(() => {
    let timer
    timer = setTimeout(() => {
      setShowMessage(true)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div className='d-none d-lg-block'>
      <Parallax bgImage={macImg} bgImageAlt='mac' strength={200}>
        <div className={!showMessage ? 'parallax' : 'parallax hide'}>
          The power of Mac
        </div>
        <div style={{ minHeight: '50vh', width: '100wv' }} />
      </Parallax>
    </div>
  )
}

export default React.memo(ParallaxCover)
