import { useState } from "react";

function Form() {
      const[form,setForm]=useState({
        name:"",
        email:"",
        password:""
      });

      function handleChange(e){
        const{name,value} = e.target; 
          setForm((prevForm) => {
            return {
              ...prevForm,
              [name]:value,
            }
          })
      }

      function handleSubmit(e){
        e.preventDefault();
        console.log(form);
      }

      function resetForm(){
        setForm({
          name:"",
          email:"",
          password:""
        })
      }

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={resetForm}>Reset</button>

        </form>
      );
    

}
        export default Form;