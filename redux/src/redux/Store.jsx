/*
* Store Oluşturma:
-- Redux kütüphanesibdeb createStore ve combineReducers imnport edilir
-- Store içerisine tutulacak veriler kategorize eilir ver herbiri için reducur oluşturulur.
-- oluşturulan reducurlar combineReducers() yardımıyla birleştirilir
-- createSore methodu çağırılıur ve argüman olarak rootReducer verilir
-- proje export edilmeli
*/
import categoryReducer from "./categoryReducer"
import todoReducer from "./todoReducer"
import {createStore, combineReducers} from "redux"

// reducurları birleştirme
const rootReducer = combineReducers({
    categoryReducer,
    todoReducer
})
// Storu oluşturma
const store = createStore(rootReducer)

export default store;