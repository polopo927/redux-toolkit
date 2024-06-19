import { RecipeItem } from "./recipe-item/RecipeItem"



function App() {

  return (
      <div>
        <RecipeItem recipe={{
          id: 1,
          name: 'Лазанья',
        }} />
        <RecipeItem recipe={{
          id: 2,
          name: 'Болоньезе',
        }} />
        <RecipeItem recipe={{
          id: 3,
          name: 'Хенкал',
        }} />
      </div>
  )
}

export default App
