import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_SUCCESS":
      return { ...state, success: action.payload };
    default:
      return state;
  }
};

const Form = () => {

  const initialState = {
    name: "",
    email: "",
    success: false,
    error: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, email, error, success } = state;
  const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length >= 5 && emailValidation.test(email)) {
      dispatch({ type: "SET_ERROR", payload: false });
      dispatch({ type: "SET_SUCCESS", payload: true });
    } else {
      dispatch({ type: "SET_ERROR", payload: true });
      dispatch({ type: "SET_SUCCESS", payload: false });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={`form ${state.theme}`}>
        <label className={`form-label ${state.theme}`}>Name</label><br />
        <input type="text" placeholder='Ingresa tu nombre' className="form-input" value={name} onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })} /> <br />
        <label className={`form-label ${state.theme}`}>Email</label> <br />
        <input type="text" placeholder='Ingresa tu email' className="form-input" value={email} onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })} /> <br />
        <button type='submit'>Agregar</button>
      </form>
      {error && <div><p id="error-message">Por favor verifique su información nuevamente</p></div>}
      {success && <div><p>Gracias {name}, te contactaremos cuando antes vía mail</p></div>}
    </div>
  );
};

export default Form;
