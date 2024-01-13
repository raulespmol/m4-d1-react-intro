import Card from 'react-bootstrap/Card';
import Tags from "./Tags"
import { CardFooter } from 'react-bootstrap';

const MyCard = ({name, desc, img, tagText, tagColor }) => {
  return(
    <div className="col-3">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Text> {desc} </Card.Text>
        </Card.Body>
        <CardFooter>
          <Tags color={tagColor} text={tagText}/>
        </CardFooter>
      </Card>
    </div>
  )
}

export default MyCard