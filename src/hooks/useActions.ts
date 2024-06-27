import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { actions } from "../store/favorites/favorites.slice"
import * as userActions from "../store/user/user.actions"

export const useActions = () => {
  const dispatch = useDispatch()
  // если много Actions, то разворачиваем их в идеале выносить в отдельный файл
  const rootActions = {
    ...actions,
    ...userActions
  }

  // возвращаем в useMemo, чтобы запомнить данные в памяти
  // bindActionCreators позволяет обернуть все Actions в диспатч
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch] )

}