import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'

function MovieCard(props) {
    return (
        <Card style={{ width: '18rem' , marginTop:"10px"}}>
            <Card.Img variant="top" src={props.info.posterUrl} />
            <Card.Body>
                <Card.Title>Title: {props.info.title}</Card.Title>
                <Card.Text>
                    Description: {props.info.description}
                </Card.Text>
                <ReactStars
                    count={5}
                    value={props.info.rate}
                    edit={false}
                    half={false}
                size={24}
                color2={'#ffd700'} />
                <Button variant="primary" onClick={() => window.open(props.info.trailer, '_blank')}>
                    See more...
                </Button>
                <br />
                <Button variant="primary" onClick={()=>props.delMovie(props.info.id)}>
                    delete
                </Button>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;