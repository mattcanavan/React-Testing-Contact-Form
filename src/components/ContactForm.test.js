import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; //preferred over fireEvent
import ContactForm from './ContactForm';


test('form successfully outputs inputted values', ()=> {
    //arrange
    //1. query for all inputs
    render(<ContactForm />)
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/email/i);

    //act 
    //1. input text in fields
    //2. submit form?
    userEvent.type(firstName, 'this should throw an error')
    
    //assert
    //1. was inputted info returned?
    
    screen.debug()
})