import React, {useState, useEffect} from 'react'

function EffectDemo() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    // note: specifying an empty array to execute only once and wont rerender (mimic the `componentDidMount`)
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        // note: return statement is executed with the component is unmount, commonly used to clean up (mimic of component componentWillUnmount)
        return () => {
            console.log('component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

    return (
        <div>
            X: {x} - Y: {y}
        </div>
    )
}

export default EffectDemo
