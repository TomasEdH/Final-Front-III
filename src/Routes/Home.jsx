import React, { useEffect } from 'react';
import Card from '../Components/Card';
import { useGlobalContext } from '../Components/global.context'; 

const Home = () => {
  
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw Error('Error al cargar a los odontologos');
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "ODONTOLOGOS_HOME", payload: data });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <section>
        <ul className={`grid-container ${state.theme}`}>
          {state.odontologosHome.map((item) => (
            <Card key={item.id} id={item.id} name={item.name} username={item.username} renderButtonAdd={true} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
