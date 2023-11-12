import { useEffect, useState } from 'react';
import './App.css';
import video from './myfood.mp4';
import MyRecipesComponent from './MyRecipesComponent';




function App() {

  const MY_ID = "7e869eeb";
  const MY_KEY = "%20a79ad0ea2ebe7fb154454d865cc93a0b";
  

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("apple")



  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
        <source src={video} type='video/mp4'/>
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>
          <img src='https://img.freepik.com/free-icon/recipe-book_318-818161.jpg?size=626&ext=jpg&ga=GA1.1.2029561744.1672748242&semt=ais' alt='icon' width="30px"/>
        </button>
      </div>

      {myRecipes.map((element, index) => (
        <MyRecipesComponent  key={index}
        label={element.recipe.label}
        image={element.recipe.image}
        type={element.recipe.cuisineType}
        mealType={element.recipe.mealType}
        totalTime={element.recipe.totalTime}
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}
        />
      ))}

    </div>
  );
}

export default App;
