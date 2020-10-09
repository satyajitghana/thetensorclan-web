import React from "react";
import { Container, CardDeck, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    const cardsData = [
        {
            title: "Classifier Models",
            body:
                "The models included are: ImageNetClassifier - ResNet, IFOClassifier - MobileNet",
            btntext: "Go to Classifiers",
            url: "/classifiers",
        },
        {
            title: "Face Swap",
            body:
                "Do you want to see how two people look likewhen their faces are swapped ? Head over to this API to see !",
            btntext: "Go to FaceSwap",
            url: "/face-swap",
        },
        {
            title: "Indian Face Recognizer",
            body:
                "I've trained the model to recognize 10 Indian people Faces !",
            btntext: "Go to FaceRecognizer",
            url: "/indian-face-recognizer",
        },
        {
            title: "LWF Plus Facial Recognition",
            body:
                "The Model here was trained on LFW Dataset + Indian Faces Dataset",
            btntext: "Go to FaceRecognizer",
            url: "/lfw-plus-recognizer",
        },
        {
            title: "Human Pose Estimation",
            body:
                " This model uses SOTA Human Pose Estimation for Single Human Pose Detection",
            btntext: "Go to HumanPoseEstimator",
            url: "/human-pose-estimation",
        },
        {
            title: "Red Car Generator",
            body: "This is a custom GAN to generate Red Coloured Cars !",
            btntext: "Go to RedCarGAN",
            url: "/red-car-gan",
        },
        {
            title: "MNIST VAE",
            body:
                "Play with the MNIST VAE, see how a machine learns to encode and decode information",
            btntext: "Go to VAE",
            url: "/mnist-vae",
        },
        {
            title: "Red Car VAE",
            body:
                "Reconstructs a Red Car Image, see how well it does, something like this can be used for Image compression",
            btntext: "Go to RedCarVAE",
            url: "/red-car-vae",
        },
        {
            title: "IFO Super Resolution",
            body:
                "Convert a Low Resolution Identified Flying Object and super resolutiohn it to 2X !",
            btntext: "Go to SuperResolution",
            url: "ifo-sr",
        },
    ];

    return (
        <Container className="mt-5">
            <Row xl={3} xs={1} className="justify-content-around">
                {cardsData.map((card, idx) => (
                    <Container as={Col} className="p-2">
                        <Card
                            className="shadow-lg p-0 m-0"
                            style={{
                                minWidth: "18rem",
                                height: "15rem",
                            }}
                            as={Col}
                        >
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.body}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={card.url}>
                                    <Button variant="dark" as={Col}>
                                        {card.btntext}{" "}
                                        <i className="fas fa-arrow-right" />
                                    </Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Container>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
