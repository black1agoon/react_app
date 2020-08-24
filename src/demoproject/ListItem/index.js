import React from 'react'
import PropTypes from 'prop-types'
import {formatDate} from '../../assets/js/utils'

function ListItem({item, onClick}) {
  return (
    <a href="#" className="list-group-item item-component" onClick={() => onClick(item.id)}>
      {item.title}
     <span className="label label-default label-pill pull-xs-right" style={{marginLeft: 20}}>
       {formatDate(new Date(item.time), 'yyyy-MM-dd')}
     </span>
    </a>
  )
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ListItem
