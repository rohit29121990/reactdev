
import './App.css';
// import Form from './components/Form';
// import Person from "./components/person/Person"
import { Component } from 'react';
import ControledComponent from './components/ControledComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons:[
        {id:1,
          name:"React Tech",
          age:25
        },
        {id:2,
          name:"React native Tech",
          age:26
        },
        {id:3,
          name:"React native Tech",
          age:36
        },
      ],
      isShow:true
    };
    this.buttonClick=this.buttonClick.bind(this)
  }

  buttonClick(){
   this.setState({isShow:!this.state.isShow})
  };

  removeHandler=(personIndex)=>{
  const personsCopy = this.state.persons;
    // alert(persons[personIndex].id)
    console.log(personsCopy)
    personsCopy.splice(personIndex,1)
    console.log(personsCopy)
    this.setState({persons:personsCopy})
  }

  render(){
  //   let persons;
  //  if(this.state.isShow){
  //   persons = this.state.persons.map((p,index)=>{
  //     return (
  //       <Person key={index} name={p.name} age={p.age}
  //       remove={()=>this.removeHandler(index)}
  //       />
  //     )
  //   })
  //  }else{
  //   persons=""
  //  }
  //   console.log(this.state.isShow)
    return (
      <div className='App' >     
{/* 
<button type="button" onClick={this.buttonClick}>Click me </button>          
       {
//      this.state.isShow===true?persons:""
      persons
      }  */}
    <ControledComponent/>
      </div>
    )
  };
}

export default App;
