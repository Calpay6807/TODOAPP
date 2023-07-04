

const initialState = {
    todos:[],
    sayi:0
};

const categoryReducer = (state = initialState, action) => {

    switch(action.type){
        // Ekleme aksiyonunu dispatch edildiği anda çalışır
        case 'ADD_CATEGORY':
            console.log("CATEGORY Çalişti")

            case 'DELETE_CATEGORY':
                console.log("CATEGORY Çalişti")
        // Caselerden hiçbiri çalışmaz ozaman state'i olduğu gibi birak
                default:
                    return state;
    }


};

export default categoryReducer
