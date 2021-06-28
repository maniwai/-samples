
import React, {useEffect, useRef} from 'react'

// note: useRefs is used to access DOM node directly within functional component
// note: common use cases is to focus on a text input outside of the component

const Demo = () => {
    // note: step 1 - create the ref variable with an initial value
    const inputRef = useRef(null)

    // note: focus logic    
    const handleFocus = () => {
        // note: final step: call the focus method on the input element
        // note: React provide the `current` property to the corresponding DOM node
        inputRef.current.focus()
    }
    // note: we use useEffect to be rendered only once (componentDidMount)
    useEffect(handleFocus, [])
    return (
        <div>
            {/* // note: step 2 - attach the ref variable to the element with the reserved ref attribute */}
            <input ref={inputRef} type="text"/>
        </div>
    )
}

export default Demo
