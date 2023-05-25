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

  const placeholders = [
    'First Name',
    'Last Name',
    'Phone Number',
    'What Service are you interested in?',
  ];

  const handleChange = e => {
    if (e.target.name === 'phone') {
      const numericValue = e.target.value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [e.target.name]: numericValue.slice(0, 12),
      }));
    } else
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value.slice(0, 50),
      }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    //submit form func
  };

  const mappedInputs = Object.keys(formData).map((el, idx) => (
    <FormInput
      key={el}
      name={el}
      style={idx > 1 && 'full'}
      value={formData[el]}
      onChange={e => handleChange(e)}
      placeholder={placeholders[idx]}
    />
  ));

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
        <form className='contact_form'>
          {mappedInputs}
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
