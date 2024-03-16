import './App.css'
import { useEffect, useState } from 'react'
import Navigation from './components/Navigation/navigation'
import Header from './components/Header/header'
import OurRecipes from './components/Our Recipes/ourRecipes'

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('recipe.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch recipes');
        }
        return res.json();
      })
      .then(data => setRecipes(data));
  }, []);

  return (
    <>
      <div className='px-36 py-14'>
        <Navigation></Navigation>
        <Header></Header>
        <OurRecipes></OurRecipes>
      </div>
    </>
  )
}

export default App
