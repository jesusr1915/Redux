

export const deptoFrutasReducer = (state = { manzanas:0, peras:0 } , action) => {

    switch (action.type) {

        case 'AGREGAR_MANZANAS':

        return {manzanas:(state.manzanas + action.value), peras:state.peras};

        case 'QUITAR_MANZANAS':

            return {manzanas:(state.manzanas - action.value), peras:state.peras};


        case 'AGREGAR_PERAS':

            return { manzanas:state.manzanas, peras:(state.peras + action.value)};

        case 'QUITAR_PERAS':

            return {manzanas:state.manzanas, peras:(state.peras - action.value)};

        default:
            return state;

    }

};


export const deptoLacteosReducer = (state = { leche:0, huevos:0 } , action) => {

    switch (action.type) {

        case 'AGREGAR_LECHE':

            return {leche:(state.leche + action.value), huevos:state.huevos};

        case 'QUITAR_LECHE':

            return {leche:(state.leche - action.value), huevos:state.huevos};


        case 'AGREGAR_HUEVOS':

            return { leche:state.leche, huevos:(state.huevos + action.value)};

        case 'QUITAR_HUEVOS':

            return {leche:state.leche, huevos:(state.huevos - action.value)};

        default:
            return state;

    }

};