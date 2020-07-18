import React from 'react';
import './Burger.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient.module.css';
import Meat from './Meat';
import Cheese from './Cheese';
import Bacon from './Bacon';
import Salad from './Salad';


class Burger extends React.Component {
  render() {
    let isNull = this.props.states[0] === 0;
    if (isNull)
      return (
        <div className={BurgerIngredient.P}>
            <br /><br /><br /><br />
          <div className={BurgerIngredient.BreadTop} >{/*<div className={BurgerIngredient.Seeds1}>&nbsp;</div>*/}</div>
          <div className={BurgerIngredient.BreadBottom}>&nbsp;</div>
        </div>
      )
    else
      return (
        <div className={BurgerIngredient.P}>
            <br /><br /><br /><br />
          <div className={BurgerIngredient.BreadTop} >{/*<div className={BurgerIngredient.Seeds1}>&nbsp;</div>*/}</div>
          <div>{this.props.states.map((st) => {
            if (st === 1)
              return <Bacon />
            else if (st === 2)
              return <Salad />
            else if (st === 3)
              return <Meat />
            else if (st === 4)
              return <Cheese />
            else
              return <div/>
          })}</div>
          <div className={BurgerIngredient.BreadBottom}>&nbsp;</div>
          
        </div>
      )
  }
}
export default Burger;
