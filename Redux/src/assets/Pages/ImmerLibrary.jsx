import React, { useCallback, useState } from 'react'
import { produce } from 'immer';


const initialState = [
    {

        name : 'house',
        rooms : [
            {
                name : 'room1',
                text : 'Room1'
            }
        ]
         
    },
    {
        name : 'car',
        text : '120'
    }
]

function RoomName(props){
    console.log('Room Name');
    
    const {
        data,
        onChange

    } = props;
    return(
        <div>
        <h1>Update Room Name</h1>
        <input type="text" value={data.text} onChange={onChange} />
        </div>
    )
}

const CarName = React.memo((props)=>{
    console.log('Car Name');

    const {
        data,
        onChange
    } = props;
    return(
        <div>
        <h1>Update Car Name</h1>
        <input type="text" value={data.text} onChange={onChange}/>
        </div>
    )
})

function ImmerLibrary() {
    const [info, setInfo] = useState(initialState)

    const onRoomChange = (evt) =>{

        setInfo((state) => {

            //Insted of shallow clonig and deep cloning we can use immer function

            const newState = produce(state, (draft)=>{
                draft[0].rooms[0].text = evt.target.value;
            })

            //Shallow Cloning

            // var newState = [
            //     {
            //         ...state[0],
            //         rooms :[
            //         {
            //             ...state[0].rooms[0], 
            //             text : evt.target.value
            //         }
            //     ]
            //     },
            //     state[1]
            // ];


            //Deep Cloning
            // const newState = JSON.parse(JSON.stringify(state));
            // newState[0].rooms[0].text = evt.target.value;
            return newState;
        });
    }

    const onCarChange = useCallback((evt) =>{
        setInfo((state) => {

            //Same here Insted of shallow clonig and deep cloning we can use immer function
            const newState = produce(state, (draft)=>{
                draft[1].text = evt.target.value;
            })

            //Shallow Cloning

            // var newState = [
            //     state[0],
            //     {
            //         ...state[1],
            //         text : evt.target.value
            //     }
            // ];


            //Deep Cloning
            // const newState = JSON.parse(JSON.stringify(state));
            // newState[1].text = evt.target.value

                return newState
        })

    },[])

        console.log(info);
        
  return (
    <div>
        <RoomName data={info[0].rooms[0]} onChange={onRoomChange}/>
        <CarName data={info[1]} onChange={onCarChange}/>
      
    </div>
  )
}

export default ImmerLibrary
