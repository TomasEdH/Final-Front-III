import React, { useEffect, useReducer, useState } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/global.context";

const Favs = () => {

  const { state, dispatch } = useGlobalContext();
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    const getOdontologoDetail = () => {
      const storageFav = JSON.parse(localStorage.getItem('favCards')) || [];
      const dataDetail = [];

      for (let i = 0; i < storageFav.length; i++) {
        const id = storageFav[i];
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((response) => {
            if (!response.ok) {
              console.error("Error al obtener datos de favoritos");
            }
            return response.json();
          })
          .then((data) => {
            dataDetail.push(data);
            dispatch({ type: "FAV_DATA", payload: dataDetail });
            setEmpty(false)
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };

    getOdontologoDetail();
  }, []);

  return (
    <>
      <div className={`favs-title ${state.theme}`}>
        <h1>Dentists Favs</h1>
      </div>
      {empty && <div><h3 className={`favs-empty ${state.theme}`}>No hay favoritos</h3></div>}
      <div className={`card-grid ${state.theme}`}>
        {state.odontologoData.map((odontologo) => (
          <Card
            key={odontologo.id}
            id={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
            renderButtonAdd={false}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
