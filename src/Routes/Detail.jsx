import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import img from '../Images/doctor.jpg';
import { useGlobalContext } from '../Components/global.context';

const Detail = () => {

  const { id } = useParams();
  const { state, dispatch } = useGlobalContext(); 

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al cargar el odontologo');
          }
          return response.json();
        })
        .then((data) => {
          dispatch({ type: "ODONTOLOGOS_DETAIL", payload: data });
        })
        .catch((error) => {
          console.error(error);
          dispatch({ type: "ERROR" });
        });
    }
  }, [id]);
  

  return (
    <div className={`detail-box ${state.theme}`}>
      <div id='detail-box-title'><h1>Detalle del Dentista</h1></div>
      {state.error ? (
        <p>Error al cargar datos del odontólogo</p>
      ) : state.odontologosDetail ? (
        <div className={`card-detail ${state.theme}`}>
          <img src={img} className='img-card-detail' alt="Dentista" />
          <p>Nombre: {state.odontologosDetail.name}</p>
          <p>Email: {state.odontologosDetail.email}</p>
          <p>Teléfono: {state.odontologosDetail.phone}</p>
          <p>Sitio Web: {state.odontologosDetail.website}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Detail;

