import Badge from 'react-bootstrap/Badge'

const Tags = ({text, color}) => {
  return(
    <Badge 
      bg={color}
      style={{width: '100%'}}  
    >
        {text}
    </Badge>
  )
}

export default  Tags