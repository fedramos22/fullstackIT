import Card from 'react-bootstrap/Card';
import img1 from '../Images/categoriaTres.png'

function CardLink() {
    return (
        <Card className="bg-dark text-white">
        <Card.Img src={img1} alt="Card image"/>
        <Card.ImgOverlay>
            <Card.Title>Camisas y Remeras</Card.Title>
        </Card.ImgOverlay>
        </Card>
    );
}

export default CardLink;