import React from "react"
import { useState } from "react"


const Addtask = (props) => {
    const [isValid, setisValid] = useState(false)
    const [Text, setText] = useState("")
    const [Arr, setArr] = useState([])
    
    // add input value to our Text state
    const addText = (event) => {
        setText(event.target.value)
    }
    // change ivalid value
    const checkBox = (j) => {
        // creating a duplicate of the object to update
        let currentTask = {...Arr[j]}
        // console.log("current task: ", currentTask)
        // console.log(j)

        // Updating the new value off our duplicate object
        currentTask.isValid = !currentTask.isValid
        // console.log("current task: ", currentTask)
        // console.log(Arr)
        
        // Example original arr (Arr = [3, 33, 333], j=0)
        // splicing the Original array to j value not inclide arr[j] (after ...Arr.slice(0,j) [])then
        // adding our update duplicate object [...Arr.slice(0,j), currentTask] = [3]
        // concatinate to the original object splice from the next value to the end of our originale arr (Arr.slice(j+1) [33, 333]) 
        setArr([...Arr.slice(0,j), currentTask].concat(Arr.slice(j+1)))
        // [3].concate[33,333]
        // console.log(Arr)
        // [3,33,333]
        // ps "3" is a new updated object (different thant the old one)
        // ps each num represent an object in this example
    }

    // add input value to array
    const addArray = () => { 
        const task = {
            text : Text,
            isValid:false
        }
        setArr([...Arr, task])
        return Arr
    }

    // delete task
    const deleteText = (index) => {
        
        // *** 1
        // console.log(`delete ${index}`);
        // const newArr = [...Arr];
        // newArr.splice(index, 1);
        // *** 2
        const newArr = [
            ...Arr.slice(0,index),
            ...Arr.slice(index+1)
        ]

        setArr(newArr)
    }
    return (
        <div>
            <div className="box">
                <input className="input" id="input" onChange={addText}></input>
                <button className="addButton" onClick={addArray}>Add</button>
                <div className="">
                    {
                        Arr.map((task, i) => {
                            return <p key={i} index={i}> <span className={task.isValid ? "text" : ""}>{task.text}</span> 
                            <input onChange={() => {checkBox(i)}} type="checkbox" /> <button className="delButton" onClick={()=>{deleteText(i)}} >Delete</button></p>
                        })
                    }
                    {/* <p>
                        <span className={isValid ? "text" : ""}>Get Python Black Belt</span>
                        <input onChange={checkBox} type="checkbox" />
                        <button className="delButton">Delete</button>
                    </p> */}
                </div>
            </div>
        </div>
    )
}
export default Addtask;