import React, { useState } from "react";


export const GetApi = (url, options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }) => {
        fetch(url, options)
            .then((response) => {
                if(response.ok) console.log("Consulta satisfactoria")
                return response.json()
            })
            .then((responseJson) => {
                setContacts(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
    

    return
}