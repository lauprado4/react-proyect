import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./Item.css"

export const Item = ({item}) => {

    return(
      <Card className="item-card" style={{ width: '18rem'}}>
        <Card.Img variant="top" src={item.imageId} />
        <Card.Body>
          <Card.Title className='card-title'>{item.title}</Card.Title>
          <Card.Text className='card-description'>{item.descriptionId}</Card.Text>
          {/* <Card.Text>Stock: {item.stock}</Card.Text> */}
          <Card.Text>${item.price}</Card.Text>
          <Link to={`/item/${item.id}`}><Button variant="primary" style={{backgroundColor: "#222569", borderColor: "#222569"}}>Ver mas</Button></Link>
        </Card.Body>
      </Card>
  );
 }