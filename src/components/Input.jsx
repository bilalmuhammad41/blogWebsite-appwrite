import React, { useId } from 'react'

const Input = React.forwardRef(({
  label,
  type = 'text',
  className = '',
  ...props
}, ref) => {

  const id = useId()

  return (
    <div>
      {label && <label
      className='inline-block mb-1 pl-1'
      htmlFor={id}>
        </label>
      }
      
      <input 
      type = {type} 
      className={`w-full px-3 py-2 rounded-lg bg-[white] text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 ${className}`}
      ref={ref}
      id={id}/>
    </div>
  )
})

export default Input