import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tabela() {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({
    afetiva: '',
    cognitiva: '',
    conotativa: "",
    academia: ""
  });

  useEffect(() => {
    const fetchTableData = async () => {
    
    try {
      
      const response = await axios( {
        method: 'post',
        url: 'http://localhost:3000/api/tecnicas',
        headers: {
          'Content-Type': 'application/json'
        },
        data: formData

    });
      setTableData(response.data);   
    } catch (error) {
      console.error(error);
    }

    };
    fetchTableData();
  }, [formData]); 

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    
  }

  return (    
    
      <div className="table-container">
            <div class="shadow bg-light border-primary text-center">
                <h2>Sugestão de Técnicas</h2>
            </div>
            <table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
                </thead>
                <tbody>
                {tableData.map((row, index) => {
                    return (
                    <tr key={index} data-toogle="tooltip" title={row.resumo}>
                        <td>{row.ID}</td>
                        <td>{row.nome}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
      </div>

  );
}

export default Tabela;