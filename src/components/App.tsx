import { useState } from "react"
import { useGetRecipesQuery } from "../store/api/api"
import { CreateRecipe } from "./create-recipe/createRecipe"
import { Header } from "./header/Header"
import { RecipeItem } from "./recipe-item/RecipeItem"

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [ queryTerm, setQueryTerm ] = useState('')

  const { isLoading, data } = useGetRecipesQuery(queryTerm)

  const handleSearch = () => {
    setQueryTerm(searchTerm)
  }

  return (
    <section>
      <Header />
      <CreateRecipe />
      <div style={{
        padding: 10
      }}>
        <p>Поиск рецепта:</p>
        <div>
          <input
            type="search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Название рецепта"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
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
