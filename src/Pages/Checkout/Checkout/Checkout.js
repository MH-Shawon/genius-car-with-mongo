import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    const handlePlaceOrder = event => {
        event.preventDefault()
        const order = {
            email: user.email,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        axios.post('http://localhost:5000/order', order)
        .then(response=>{
            console.log(response)
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please order:{service.name}</h2>
            <Form onSubmit={handlePlaceOrder}>
                <Form.Group className="mb-2" controlId="formGroupNamw">
                    <Form.Control type="name" value={user.displayName} placeholder="Name" required readOnly disabled />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupEmail">
                    <Form.Control type="email" name="email" value={user.email} placeholder="Enter email" required readOnly disabled />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupService" >
                    <Form.Control type="service" value={service.name} placeholder="Service" required readOnly/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupAddress" >
                    <Form.Control type="address" name="address" placeholder="Address" required autoComplete='off' />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupPhone" >
                    <Form.Control type="phone" name="phone" placeholder="Phone" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Place order
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;