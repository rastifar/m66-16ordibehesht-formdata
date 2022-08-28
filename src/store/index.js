import { configureStore } from '@reduxjs/toolkit'
import user from './userSlice'
import invoice from './invoiceSlice'
import theme from './themeSlice'

const loadPreloadState = ()=>{
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}
const saveState = (state) =>{
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

export const store = configureStore({
  devTools: true,
  preloadedState: loadPreloadState(),
  reducer: {
    user,
    invoice,
    theme
  },
})

store.subscribe(()=>{
  saveState({
    user: store.getState().user,
    theme: store.getState().theme
   })
})
