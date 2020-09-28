import API from 'API';
import React from 'react'

export default function Todo() {
    const[todo, setTodo] = React.useState(
        {"진행중":[],
        "완료":[],
        "보류":[]}
        );
    
    React.useEffect(()=> {
        API.get("").then(res=> {
            const{data} = res;
            setTodo(prev => ({
                ...prev, 진행중:data
            }));
        })

        
    })
    
    
    
    return(
      <div>
        todo
      </div>
    )
  }
  