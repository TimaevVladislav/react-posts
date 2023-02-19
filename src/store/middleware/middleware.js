import {CREATE_POST} from "../reducer/types"
import {showAlert} from "../actions/actions"

const forbidden = ["fuck", "spam", "php"]

export function fobiddenWordwsMiddleware({ dispatch }) {
   return (next) => {
       return (action) => {
           if (action.type === CREATE_POST) {
              const found = forbidden.filter(w => action.payload.title.includes(w))

              if (found.length) {
                  return dispatch(showAlert("Вы спамер. Мы вас не звали, идите домой", "primary"))
              }
           }
           return next(action)
       }
   }
}