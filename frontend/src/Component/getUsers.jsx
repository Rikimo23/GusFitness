import React from 'react'

// This function gathers all users from the backend, and returns just the number of current users
//or -1 if there response is not ok
export default function getUsers() {
    const allUsers= async()=>{
        try{
            const usersAmountResponse = await fetch("http://localhost:8081/api/users/count") 
            let usersAmount = 0
            if(!usersAmountResponse.ok){            
                throw new Error(`Network response was not ok: ${response.statusText}`);
                return -1
            }
            else{
                usersAmount = await usersAmountResponse.json()
                console.log(`amount of users: ${usersAmount}`)
                return usersAmount
            }
        }catch(err){console.error(err)}
    }
}
