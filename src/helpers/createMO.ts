type MenuO = '' | 'all'  | 'dog'  | 'cat' | 'fish'

export const createMO = (activeMenu:MenuO) =>{
    let returnObejct = {
        all:false,
        dog:false,
        cat: false,
        fish: false
    };

    if(activeMenu !=='') {
        returnObejct[activeMenu] = true;
    }

    return returnObejct;
}