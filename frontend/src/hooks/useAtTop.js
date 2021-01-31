import { useEffect, useState } from 'react'

const useAtTop = () => {
  const [isAtTop, setIsAtTop] = useState(true)
  const handleScroll = () => {
    setIsAtTop(window.pageYOffset === 0)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return isAtTop
}

export default useAtTop
