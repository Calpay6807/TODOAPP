/* 

!reducer:
* storun nasıl değişeceğine karar verir
* reducer bir fonksiyondur
* ve iki değer alır:
? state : reducerda tutlan verilerin son durumu
? action : store nasıl etkilenmesi gerektiğini söyleyen type ve payload değerlerine sahip obje

*Reducer oluşturma:
1- initial state başlangıç değeri
-- stati uygulama başladında ilk anda sahip olacağı değerleri tanımlar
- bu başlangıç değerine initialstate denir
2- actionu parametre olarak aliyoruz
* actionun type değeri analiz edilir
* actionnun type değerine göre  styorun nasıl etkilenmesi gerektiğini tanimliyoruz
3- reducur store tanitmak için export  edilir
*/


const initialState = {
    todos:[],
    sayi:0
};

const todoReducer = (state = initialState, action) => {

    switch(action.type){
        // Ekleme aksiyonunu dispatch edildiği anda çalışır
        case 'ADD_TODO':
            return {...state,
                todos:[...state.todos, action.payload,] ,sayi: state.sayi +1}
            

            case 'DELETED_TODO':    
            // eylem ile gelen silinecek idye eşit olmayanları aliyoruz           
                 const filteredTodos = state.todos.filter((item) => item.id !== action.payload);
                 
               return{
                ...state,
                // stora filitrelenmiş diziyi tanitiyoruz
                todos: filteredTodos,

                sayi: state.sayi - 1,
               }

               case "UPDATED_TODO":
                //dizideki dizinin kopyasını alma
               const cloneTodos = state.todos;

              // elemanın dizideki sırasını bulma
               const i = cloneTodos.findIndex((item) => item.id === action.payload.id)

               // elemanın dizideki sırasona bir değer atadık
               cloneTodos[i] = action.payload
               return{
                ...state,
                todos: cloneTodos
               }

                default:
                    return state;
    }


};

export default todoReducer
