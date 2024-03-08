
import './App.css'

  type showINfoprops ={
    name:string ;
    age:number;
    children?:React.ReactNode;

  }

 function ShowInfo1(props: showINfoprops): JSX.Element {
  return <div>Name: {props.name} - Age:{props.age} <p>{props.children}</p></div>
 
 }

function App() {
 
  const name: string = "nguyễn đình khải ";
  const age : number = 19 ;

  const showINfo =(props:showINfoprops) =>{
    return `Nam :${props.name} - age:${props.age}`
  }

  return (
    <>
     <h1>{name} {age} </h1>
     <h1>{showINfo({name:"khai",age:18})}</h1>
     <ShowInfo1 name="Dat" age={30}>
                Có giá trị bên trong
            </ShowInfo1>
   
    </>
  )
}

export default App
