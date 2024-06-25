import { useState } from "react"
import { useCreateRecipeMutation } from "../../store/api/recipe.api"

export const CreateRecipe = () => {

  const defaultValue = {
    name: '',
    image: ''
  }

  const [recipe, setRecipe] = useState(defaultValue)

  const [createRecipe] = useCreateRecipeMutation()

  const handleSubmit = e => {
    e.preventDefault()
    createRecipe(recipe).then(() => {
      setRecipe(defaultValue)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Create new recipe:</p>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={recipe.name}
          onChange={e => setRecipe({ ...recipe, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image"
          value={recipe.image}
          onChange={e => setRecipe({ ...recipe, image: e.target.value })}
        />
        <button type="submit">Create</button>
      </div>
    </form>
  )
}