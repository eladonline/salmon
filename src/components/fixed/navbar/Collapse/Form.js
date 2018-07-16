import React from 'react';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';

const Form = () => (
  <Navbar.Form pullLeft>
    <FormGroup>
      <FormControl type="text" placeholder="Search" />
    </FormGroup>{' '}
    {/* <Button type="submit">Submit</Button> */}
  </Navbar.Form>
);

export default Form;
