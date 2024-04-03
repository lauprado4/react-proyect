import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./Item.css"

export const Item = ({item}) => {

    return(
      <Card className="item-card" style={{ width: '18rem'}}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title className='card-title'>{item.name}</Card.Title>
          <Card.Text className='card-description'>{item.description}</Card.Text>
          <Card.Text>${item.price}</Card.Text>
          <Link to={`/item/${item.id}`}><Button variant="primary">Ver mas</Button></Link>
        </Card.Body>
      </Card>
  );
 }