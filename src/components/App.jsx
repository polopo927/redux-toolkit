import { Header } from "./header/Header"
import { RecipeItem } from "./recipe-item/RecipeItem"
import { User } from "./user/User"



function App() {

  return (
    <section>
      <Header />
      <User />
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
    </section>
  )
}

export default App
