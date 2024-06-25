import { useGetRecipesQuery } from "../store/api/api"
import { CreateRecipe } from "./create-recipe/createRecipe"
import { Header } from "./header/Header"
import { RecipeItem } from "./recipe-item/RecipeItem"


function App() {
  const { isLoading, data } = useGetRecipesQuery()
  console.log(data)

  return (
    <section>
      <Header />
      <CreateRecipe />
      <div>
        {isLoading ?
          (<div>Loading...</div>)
          : data ? (
            data.map(recipe =>
              < RecipeItem
                key={recipe.id}
                recipe={recipe}
              />)
          ) : (
            <div>Not found</div>
          )}
      </div>
    </section>
  )
}

export default App
