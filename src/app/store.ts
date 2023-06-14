import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  AnyAction,
  Reducer,
} from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import { api } from "./slices/apiSlices"
import uxReducer from "./slices/uxSlice"

const combinedReducer = combineReducers({
  counter: counterReducer,
  ux: uxReducer,
  [api.reducerPath]: api.reducer,
})

const combinedMiddleware = [api.middleware]
export type RootState = ReturnType<typeof combinedReducer>

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return combinedReducer(state, action)
}
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredPaths: ["api"] },
    }).concat(combinedMiddleware),
})
export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
