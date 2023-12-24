import {
  autoBatchEnhancer,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import commonReducer from './common/common.slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const rootReducer = combineReducers({
  common: commonReducer,
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
  enhancers: (defaultEnhancers) => {
    return defaultEnhancers.concat(autoBatchEnhancer())
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
