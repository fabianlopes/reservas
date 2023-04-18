import React, { useState, useEffect } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import salasService from '../services/salasService';

function ComboSalas({ onSelectChange }) {

    const [selectData, setSelectData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {

      async function fetchSelectData () {
          
        try {
          const response = await salasService.getSalas();
          setSelectData(response.data);
        } catch (error) {
          console.error(error);
        }

        };
        fetchSelectData();
  },[]); 


  const handleChange = (event) => {
    const value = event.target.value;    
    setSelectedValue(value);
    onSelectChange(value);
  };

  return (
    <FormGroup>
      
        <Form.Label>Salas</Form.Label>
        <Form.Control as = 'select' value={selectedValue} onChange={handleChange}>
            {selectData.map(item => (
                <option key={item._id} value={item._id}>
                  {item.numero} - {item.tipo} - {item.descricao}
                </option>
              ))}
        </Form.Control>
      
    </FormGroup>
  );
}

export default ComboSalas;