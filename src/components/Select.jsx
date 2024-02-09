import React from 'react'

const Select = React.forwardRef(({
  options,
  label,
  className = '',
  ...props
},ref) => {
  return (
    <div>
      {label && <label
      htmlFor={id} className=''>{label}</label>}

      <select id={id} ref={ref} {...props} className={`px-3 py-2 rounded-lg bg-[white] text-black outline-none focus:bg-gray-50 duration-200 border border-gry-200 w-full ${className}`}>
        {options?.map((option)=>(
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
})

export default Select