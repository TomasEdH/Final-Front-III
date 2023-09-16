import React, { useEffect, useReducer } from "react";
import { Link } from 'react-router-dom'
import img from '../Images/doctor.jpg';
import { useGlobalContext } from "./global.context";



  const Card = ({ name, username, id, renderButtonAdd }) => {

    const { state, dispatch } = useGlobalContext(); 

    const addFav = () => {
      const favCards = JSON.parse(localStorage.getItem('favCards')) || [];
      if (!favCards.includes(id)) {
        favCards.push(id);
        localStorage.setItem('favCards', JSON.stringify(favCards));
        dispatch({ type: "ADD_FAV", payload: favCards }); 
      }
      alert('Agregado a tus favoritos correctamente')
    };
    
    
    useEffect(() => {
      const favCardExist = JSON.parse(localStorage.getItem('favCards')) || [];
      if (favCardExist.includes(id)) {
        dispatch({ type: "ADD_FAV", payload: favCardExist });
      }
    }, [id]);
    

    return (
      <>
        <section>
          <Link to={`/dentist/${id}`} className={`link link-estilo ${state.theme}`}>
            <img src={img} alt="dentist-img" className='img-link' />
            <p>{name}</p>
            <p>{username}</p>
          </Link>
          {renderButtonAdd && (
            <button onClick={addFav} className="fav-btn">Agregar a favoritos</button>
          )}
        </section>

      </>
    );
  };

  export default Card;