import React from 'react'
import bootstrap from 'bootstrap'
import Potion from './Potion'
import css from './Potions.css'
import potSight from './Potion Images/potion-sight.png'
import potFrog from './Potion Images/potion-frog.png'
import potFortun from './Potion Images/potion-fortune.png'
import potLuck from './Potion Images/potion-luck.png' 
import potLove from './Potion Images/potion-love.png'
import potInt from './Potion Images/potion-int.png'
import ajax from 'ajax'



class ListaPotionsAPI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://merigold-potions.herokuapp.com/potions")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.content
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            items.map(item => (
              <Potion potName={item.name} potDesc={item.description} img={item.img}/>
            ))
            
        );
      }
    }
  }

function Potions() {
    return (
        
        <div className='potionsPage'>
            
            <ListaPotionsAPI/> 

            <Potion potName='Poção da invisibilidade' potDesc='Com essa poção você pode se tornar innvisivel por algumas horas' img={potSight}/>
            <Potion potName='Poção da cura do pé de sapo' potDesc='Com essa poção você pode se curar do pé de sapo' img={potFrog}/>
            <Potion potName='Poção da Fortuna' potDesc='Com essa poção você irá aumentar a quantidade de dinheiro recebida' img={potFortun}/>
            <Potion potName='Poção da Sorte' potDesc='Com essa poção você irá aumentar sua sorte' img={potLuck}/>
            <Potion potName='Poção do Amor' potDesc='Quem tomar esta poção irá se apaixonar pela primeira pessoa que ver' img={potLove}/>
            <Potion potName='Poção da inteligencia' potDesc='Esta poção aumenta a inteligecia da pessoa' img={potInt}/>
            
        </div>
        
    )
}

export default Potions
