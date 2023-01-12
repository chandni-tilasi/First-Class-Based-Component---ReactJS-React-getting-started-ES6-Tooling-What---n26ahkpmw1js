import React from 'react'
import '../styles/App.css';

// You are given an initial state {name: "John Doe", enrollmentNo: "12345678", age: 34}. Complete the given class based react component 'App' such that it returns 'Hello, my name is name' in <h1> tag and 'I am age years old and my enrollment no is enrollmentNo' in <p>. Also insert a button which increases the age by 1 when clicked on it. boilerplate is showing error because the code is missing. Complete the code

const obj = {name: "John Doe", enrollmentNo: "12345678", age: 34}


function increment(){
    let countAge = obj.age;
    obj.age = countAge++;
}

class App extends React.Component {
  
    render(){
        return <div>

            <h1> Hello, my name is {obj.name} </h1>
            <p> I am {obj.age} years old and my enrollment no is {obj.enrollmentNo}  </p>
            <button onClick={increment}>
            increase age
</button>
        </div>
    }
    
    
}


export default App;
