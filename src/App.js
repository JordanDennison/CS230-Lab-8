import React, { Component } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useState } from "react";

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState([]);

  const addItem = (todo) => {
    const newTodos = {
      id: Math.random(),
      todo: todo
    }

    if (todo != ""){

      setList([...list, newTodos]);

      setInput("");

    }
      
  }

  const deleteItem = (id) => {

    const updatedList = list.filter((item) => item.id !== id);

    setList(updatedList);

  }

    return (
      
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundImage: "url('https://images.saymedia-content.com/.image/t_share/MTkyOTkyMzE2OTQ3MjQ0MjUz/website-background-templates.jpg')", height: "100vh" , backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          
        
        <h1> ToDo List </h1>
        
        
          <Form>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter a task"
              value = {input}
              onChange = {e => setInput(e.target.value)}
              style={{ width: "40vh", textAlign: "center"}}
            />
          </Form>
        
        
          <div>
              <ul style={{listStyleType: "none", alignContent: "center"}}>
                {list.map((todo,i) => (
                  <li key={todo.id} 
                  style={{backgroundColor : i % 2 === 0 ? "lightblue" : "white",
                  textColor: "white",
                  border: "none",
                  display: "flex",
                  alignContent: "center", 
                  borderRadius: "5px", 
                  padding: "10px 200px", 
                  margin: "10px",
                  hover: "blue", 
                  cursor: "pointer",
                  transition: "background-color 0.3s ease"}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = i % 2 === 0 ? "white" : "lightblue"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = i % 2 === 0 ? "lightblue" : "white"}>

                  {todo.todo}&nbsp;
                  
                  
                  <div 
                    onClick={() => deleteItem(todo.id)}
                    style={{alignItems: "right",
                    textColor: "white"}}>

                    &times;

                  </div>

                  </li>
                ))}
              </ul>
          </div>
          
          <div class='d-grid gap-2'>
            <Button 
              variant="primary" 
              size="lg" 
              className="btn-lg" 
              style={{
                backgroundColor: "white",
                border: "2px solid red", 
                borderRadius: "5px", 
                padding: "10px 200px", 
                margin: "10px", 
                cursor: "pointer",
                transition: "background-color 0.3s ease"
              }} 
              onClick={() => addItem(input)}
              onMouseEnter={(e) => e.target.style.backgroundColor = "red"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
            >
              Add
            </Button>{''}
          </div>

        
      </div>
    );
}

export default App;
