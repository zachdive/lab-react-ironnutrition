import './App.css';
import foodsJSON from "./foods.json";
import React, {useState} from "react"
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search'
import {  Button } from 'antd';


function App() {


  
  const [foods, setFoods] = useState(foodsJSON)
 

  
  //Arrow functions for new food
  
  const addNewFood = (newFood) => {
		
		setFoods([ ...foods, newFood ]);
	};

  //Arrow functions for deleting food

  

    const deleteFood = (name) => {
      setFoods(foods.filter((food) => food.name !== name ));

  };

  //Toggle
  const [ showFood, setShowFood ] = useState(false);
  
  const toggleShowFood = () => {
		setShowFood(!showFood);
	};

 
  //Search Food


 const filterFoods = (foods, query) => {
  if(!query) {
    return foods;
  }
  return foods.filter(food => {
    const foodName = food.name.toLowerCase();
    return foodName.includes(query);
  })
}

const { search } = window.location;
const query = new URLSearchParams(search).get('search-bar');
const [ searchInput, searchFoodFilter ] = useState(query || '');

const filteredFoods = filterFoods(foods, searchInput);

  
  return (
    <div className="App">

      <Button type="default"  onClick={toggleShowFood}>
				{showFood ? 'Hide form' : 'Add new food'}
			</Button>
    
    <div>
      {showFood ? <AddFoodForm yeet = {addNewFood} /> : null}
    </div>

    <Search searchInput={searchInput}  searchFoodFilter = {searchFoodFilter} />
      
      {filteredFoods.map(food => 

    
      <div>
      <FoodBox yeet={food}  bruh = {deleteFood} />
      </div>
 


      )}

      {/* Display message via conditional rendering */}

      {foods.length === 0 && <h1>Oops! There is no more content to show</h1>
      &&   <img src="../nofood.png" width="200px" height="200px" alt="There is no food" />}

    </div>
  );
}

export default App;
