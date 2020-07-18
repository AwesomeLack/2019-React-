const initialState = {
    hamburger: [0, 0, 0, 0, 0, 0, 0, 0], //汉堡配菜的顺序以及限制数量
    garnish: [1, 0, 0, 0], //分辨是哪个材料
}


const BurgerAddReducer = (state = initialState, action) => {
    let newhamburger = state.hamburger;
    let newgarnish = state.garnish;
    let index = action.index;
    console.log(index);
    switch (action.type) {
        case 'addBurger':
            for (let i = 0; i < newhamburger.length; i++) {
                if (newhamburger[i] === 0) {
                    newhamburger[i] = index;
                    newgarnish[index - 1]++;
                    break;
                }
            }
            console.log(newgarnish);
            return {
                hamburger: newhamburger,
                garnish: newgarnish
            };

        case 'supBurger':
            let ant;
            newgarnish[index - 1]--;
            for (let i = newhamburger.length - 1; i >= 0; i--) {
                if (newhamburger[i] === index) {
                    ant = i;
                    break;
                }
            }
            for (let i = ant; i < newhamburger.length; i++) {
                if (i === newhamburger.length - 1)
                    newhamburger[i] = 0;
                else
                    newhamburger[i] = newhamburger[i + 1];
            }
            return {
                hamburger: newhamburger,
                garnish: newgarnish
            };
        default:
            return state;
    }
}
export default BurgerAddReducer;