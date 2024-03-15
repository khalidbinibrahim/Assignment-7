import './App.css'
import Navigation from './components/Navigation/navigation'
import Header from './components/Header/header'
import OurRecipes from './components/Our Recipes/ourRecipes'

function App() {
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
