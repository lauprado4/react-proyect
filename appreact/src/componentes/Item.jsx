import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./Item.css"

export const Item = ({item}) => {

    return(
        <Card className="item-card" style={{ width: '18rem'}}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>${item.price}</Card.Text>
        <Link to={`/item/${item.id}`}><Button variant="primary">Ver mas</Button></Link>
      </Card.Body>
    </Card>
  );
 }