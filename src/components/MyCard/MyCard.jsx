import Card from 'react-bootstrap/Card';
import Tags from "../Tags/Tags"
import './MyCard.css'

const MyCard = ({name, desc, img, tagText, tagColor }) => {
  return(
    <div className="col-3">
      <Card>
        <Card.Img variant='top' src={img} />
        <Card.Body className='d-flex flex-column justify-content-between'>
          <Card.Title> {name} </Card.Title>
          <Card.Text> {desc} </Card.Text>
          <Tags color={tagColor} text={tagText}/>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MyCard