import React from 'react'
import * as styles from './Content.module.scss'
import { Container, Jumbotron, Col, Row, Card, CardDeck, Button} from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


export default function Content() {
  return (
    <Container className={styles.content}>
        <Jumbotron className={styles.contentHeadline} style={{ marginTop: 0, marginBottom: 20,padding:0 }}>
        <Row>
        <Col>
            <h1>Hello, world!</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at turpis consequat, dictum dolor vel, finibus orci. Vivamus vel fermentum ex, in vehicula dui. Pellentesque feugiat, sapien id lobortis congue, diam mauris ultricies urna, sit amet accumsan lectus urna ac odio. Proin eu dui sit amet felis interdum tristique. Fusce ut mauris vitae ex viverra aliquet. Fusce lacus nunc, finibus vitae orci sit amet, facilisis congue lacus. Vivamus tincidunt massa ut ante lobortis, et auctor ipsum dignissim. Cras a purus orci. Cras tortor sem, scelerisque sed massa eu, malesuada vulputate ex. Vestibulum malesuada nibh sit amet blandit dapibus. Nullam lacinia ultricies nulla, in cursus justo euismod sed. Sed eget suscipit leo.
            </p>

            <Button variant="primary">Learn more</Button>

        </Col>
            <StaticImage
                src="https://media.makeameme.org/created/its-working-oyy433.jpg"
                alt="NUS LOGO"
                layout="fixed"
                loading="eager"
                position="0 0"
                objectFit="contain"
            />

        </Row>
        </Jumbotron>

        <Container>
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://i.imgflip.com/4/2baxar.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum, elit ac semper pharetra, erat erat accumsan nibh, in mattis dui est vitae massa. Aliquam erat volutpat. Nunc odio nibh, sagittis in ultrices ut, porta in libero. Donec venenatis, libero vitae ornare faucibus, quam massa semper quam, sit amet placerat sem sem a nibh. Nulla dapibus varius velit id pretium. Nunc quam purus, semper in mi vitae, porta volutpat arcu. Vivamus pretium, felis vitae imperdiet finibus, diam augue sollicitudin metus, non efficitur nisi odio nec odio. Praesent sem est, suscipit quis tincidunt in, efficitur sit amet urna.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://cdn.kapwing.com/video_image-9gQ4aC2zl.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum, elit ac semper pharetra, erat erat accumsan nibh, in mattis dui est vitae massa. Aliquam erat volutpat. Nunc odio nibh, sagittis in ultrices ut, porta in libero. Donec venenatis, libero vitae ornare faucibus, quam massa semper quam, sit amet placerat sem sem a nibh. Nulla dapibus varius velit id pretium. Nunc quam purus, semper in mi vitae, porta volutpat arcu. Vivamus pretium, felis vitae imperdiet finibus, diam augue sollicitudin metus, non efficitur nisi odio nec odio. Praesent sem est, suscipit quis tincidunt in, efficitur sit amet urna.
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://cdn.kapwing.com/video_image-9gQ4aC2zl.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum, elit ac semper pharetra, erat erat accumsan nibh, in mattis dui est vitae massa. Aliquam erat volutpat. Nunc odio nibh, sagittis in ultrices ut, porta in libero. Donec venenatis, libero vitae ornare faucibus, quam massa semper quam, sit amet placerat sem sem a nibh. Nulla dapibus varius velit id pretium. Nunc quam purus, semper in mi vitae, porta volutpat arcu. Vivamus pretium, felis vitae imperdiet finibus, diam augue sollicitudin metus, non efficitur nisi odio nec odio. Praesent sem est, suscipit quis tincidunt in, efficitur sit amet urna.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardDeck>
        </Container>

      </Container>

  )
}