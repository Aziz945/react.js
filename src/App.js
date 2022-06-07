
import './App.css';
import {Navbar , Nav , Container, Form , Button, Spinner, Carousel} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      
    
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">MyReact</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About </Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
<br></br>
<p className='reactpara'>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality</p>
  {/* carousel */}
  <Carousel>
  <Carousel.Item>
    <img
    
      // className="d-block w-100"
      src="https://www.letecode.com/storage/articles/September2021/fKFlgB6K1b9IwjcgwtGl.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>react.js</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      // className="d-block w-100"
      src="https://res.cloudinary.com/practicaldev/image/fetch/s--2tHjFfPe--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f1qn7uw1ymkntxsgx3tu.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>node.js</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      // className="d-block w-100"
      src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/01/000-VS-Code.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>vscode</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  
<br></br>
  
   {/* my form */}
   <Form className='myform' id='home'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>

    </div>
  );
}

export default App;
