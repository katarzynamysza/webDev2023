import { useState } from 'react';
import FormInput from '../../components/formInput';
import './index.css';
import Heading from '../../components/heading';
import Text from '../../components/text';
import Button from '../../components/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    message: '',
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    //submit form func
  };

  return (
    <div className='contact'>
      <div className='container'>
        <div className='wrapper'>
          <Heading level={2}>Contact</Heading>
          <Text size='14px' style={{ lineHeight: '2rem' }}>
            Questions or concerns? Just fill out the form below and our support
            team will get back to you within 24 hours
          </Text>
        </div>
        <form className='contact_form' action=''>
          <div className='field_wrap'>
            <FormInput
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={e => handleChange(e)}
              placeholder='First Name'
              required={true}
              disabled={false}
            />
            <FormInput
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={e => handleChange(e)}
              placeholder='Last Name'
              required={true}
              disabled={false}
            />
          </div>
          <FormInput
            type='text'
            name='phone'
            style='full'
            value={formData.phone}
            onChange={e => handleChange(e)}
            placeholder='Phone Number'
            required={true}
            disabled={false}
          />
          <FormInput
            type='text'
            name='message'
            style='full'
            value={formData.message}
            onChange={e => handleChange(e)}
            placeholder='What Service are you interested in?'
            required={true}
            disabled={false}
          />
          <Button
            name='submit'
            buttonType='primary'
            onClick={e => handleSubmit(e)}>
            SUBMIT NOW
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
