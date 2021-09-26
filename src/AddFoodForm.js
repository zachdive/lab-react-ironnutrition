import React, {useState} from "react";
import {  Divider, Input } from "antd";

function AddFoodForm ({yeet}) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(1);
    const [servings, setServings] = useState(1)

    const handleNameInput = (e) => setName(e.target.value)
    const handleImageInput = (e) => setImage(e.target.value)
    const handleCaloriesInput = (e) => setCalories(e.target.value)
    const handleServingsInput = (e) => setServings(e.target.value)

    const handleFormSubmit = (e) => {
    
        e.preventDefault();
        const newFood = {
            name,
            image,
            calories,
            servings,
        };
        yeet(newFood)
    
        //Resetting the state
        setName("")
        setImage("")
        setCalories(1)
        setServings(1)
        console.log("Submitted Food", newFood);
    
    }

    return(
        <>
      
          <h4>Add Food Entry</h4>
        
          
        <form onSubmit = {handleFormSubmit}>
         
         <label>Name</label>
         <Input type="text" onChange = {handleNameInput} value={name} />

         <label>Image</label>
         <Input type="text" alt ="foodpic" onChange = {handleImageInput} value={image}/>

         <label>Calories</label>
         <Input type="number" onChange = {handleCaloriesInput} value={calories}/>

         <label>Servings</label>
         <Input type="number" onChange = {handleServingsInput} value={servings}/>

         <button type="submit">Create</button>



          </form>

        </>

    )





}

export default AddFoodForm;