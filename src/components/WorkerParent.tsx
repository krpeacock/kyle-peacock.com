import React, { useEffect, useState } from 'react'
import Worker from 'worker-loader!./Worker'

const worker = new Worker()

worker.postMessage({ a: 1 })
worker.onmessage = event => {
  console.log('parent event', event)
}

worker.addEventListener('message', event => {})

interface Props {}

function WorkerParent(props: Props) {
  const {} = props
  const [count, setCount] = useState(0)

  useEffect(() => {
    worker.onmessage = event => {
      const next = event.data.next
      setCount(next)
    }
  }, [worker])

  const handleClick = () => {
    worker.postMessage({ count })
  }

  return (
    <>
      <h4>Count: {count}</h4>
      <button onClick={handleClick}>Increase</button>
    </>
  )
}

export default WorkerParent
