import React from 'react'

const Meeting = async ({params}:{params : { id:string}}) => {
    const { id } = await params //Need to use the await params
  return (
    <div>
    Meeting Id : {id}
    </div>
  )
}

export default Meeting

