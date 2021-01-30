import React, { useEffect, useState } from 'react'

const useAtTop = () => {
  const [isAtTop, setIsAtTop] = useState(false)
  useEffect(() => {
    window.onscroll = () => {
      setIsAtTop(window.pageYOffset === 0)
      console.log(window.pageYOffset === 0)
    }
  }, [])
  return isAtTop
}

export default useAtTop
