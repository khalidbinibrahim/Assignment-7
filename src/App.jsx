import './App.css'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/Navigation/navigation'
import Header from './components/Header/header'
import OurRecipes from './components/Our Recipes/ourRecipes'
import RecipeCardSection from './components/Our Recipes/Recipe Card Section/recipeCardSection'
import SideBar from './components/Our Recipes/Sidebar/sideBar'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  function handleCook(recipe) {
    if (!selectedRecipe.some(item => item.recipe_id === recipe.recipe_id)) {
      setSelectedRecipe(prevSelected => [...prevSelected, recipe]);
    } else {
      const alreadyClicked = selectedRecipe.some(item => item.recipe_id === recipe.recipe_id);
      if (alreadyClicked) {
        toast.warning(`Already Exist`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }

  function handlePreparing(recipe) {
    setSelectedRecipe(prevSelected => prevSelected.filter(item => item.recipe_id !== recipe.recipe_id));
    setCurrentlyCooking(prevCooking => [...prevCooking, recipe]);
  }

  return (
    <>
      <div className='px-36 py-14'>
        <Navigation />
        <Header />
        <OurRecipes />

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {recipes.map(recipe => (
              <RecipeCardSection key={recipe.recipe_id} recipe={recipe} handleCook={handleCook} />
            ))}
          </div>
          <SideBar selectedRecipe={selectedRecipe} currentlyCooking={currentlyCooking} handlePreparing={handlePreparing} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;

