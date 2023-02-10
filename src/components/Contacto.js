import React from 'react';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  return (
    <section className='contacto' id='contacto'>
      <h2>CONTACTO 📩</h2>
      <div className='contactoContainer'>
        <Form className='contactoFormulario'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Direccion de email</Form.Label>
            <Form.Control type="email" placeholder="nombre@ejemplo.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Dejenos conocer su opinion</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <button className='contactoBoton'>Enviar</button>
        </Form>
        <div className='contactoTexto'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quas eveniet atque delectus, adipisci debitis et fugiat, eos accusamus voluptate molestiae beatae vel impedit earum id ullam, nulla quo blanditiis?
            Possimus dolores corporis ratione nihil iusto alias officia delectus quos suscipit architecto vel adipisci earum ullam minima, odio porro doloremque dicta consectetur vitae voluptate vero consequuntur sequi obcaecati.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio velit cum dicta nostrum cumque numquam, harum asperiores perferendis nulla iste deleniti a explicabo itaque commodi corrupti aspernatur vero accusamus in.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contacto