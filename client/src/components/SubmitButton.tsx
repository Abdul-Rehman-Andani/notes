import React from 'react'

interface Props {
    value : string
}

const SubmitButton : React.FC<Props> = ({value} : Props) => {
  return (
    <>
      <button type='submit' className='mt-5 w-full rounded-md py-2 bg-slate-300'>{value}</button>
    </>
  )
}

export default SubmitButton;
