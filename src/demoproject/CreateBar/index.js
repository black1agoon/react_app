import React from 'react'
function CreateBar({onClick}) {
  return (
    <button className="btn btn-primary" onClick={() => onClick()}>+创建新文章</button>
  )
}

export default CreateBar