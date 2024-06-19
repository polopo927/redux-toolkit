import { useDispatch, useSelector } from 'react-redux'
import styles from './RecipeItem.module.css'
import { actions } from '../store/favorites/favorites.slice'

export const RecipeItem = ({ recipe }) => {
  const { favorites } = useSelector(state => state)
console.log(favorites)
  const dispatch = useDispatch()

  return (
    <div className={styles.item}>
      <h3>{recipe.name}</h3>
      <button onClick={() => dispatch(actions.toggleFavorites(recipe))}>Add to Favorites</button>
    </div>
  )
}