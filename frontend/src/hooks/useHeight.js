import { useEffect, useRef, useState } from 'react'

export default function useHeight() {
  const ref = useRef(null)
  const refHeight = ref?.current?.clientHeight || 0
  const [height, setHeight] = useState(0)

  useEffect(() => {
    console.log('hello')
    setHeight(refHeight)
  }, [refHeight])

  return [height, ref]
}
