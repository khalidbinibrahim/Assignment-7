import './App.css'
import { useEffect, useState } from 'react'
import Navigation from './components/Navigation/navigation'
import Header from './components/Header/header'
import OurRecipes from './components/Our Recipes/ourRecipes'
import RecipeCardSection from './components/Our Recipes/Recipe Card Section/recipeCardSection'
import SideBar from './components/Our Recipes/Sidebar/sideBar'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState([]);

  const [clickCount, setClickCount] = useState({});

  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  function handleCook(recipe) {
    if (!selectedRecipe.some(item => item.recipe_id === recipe.recipe_id)) {
      setSelectedRecipe(prevSelected => [...prevSelected, recipe]);
    }
  }

  return (
    <>
      <div className='px-36 py-14'>
        <Navigation />
        <Header />
        <OurRecipes />


        <div className="flex flex-col lg:flex-row gap-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
              recipes.map(recipe => (
                <RecipeCardSection handleCook={handleCook} key={recipe.recipe_id} recipe={recipe} />
              ))
            }
          </div>

          <SideBar selectedRecipe={selectedRecipe} />
        </div>

      </div>
    </>
  );
}

export default App
