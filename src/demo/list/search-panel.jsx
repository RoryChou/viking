import React from 'react'
import { useState } from "react"

const SearchPanel = ({param,setParam}) => {
    const [users,setUsers] = useState([])
    
    return(<form action="">
        <input type="text" value={param.name} onChange={evt => setParam({
            ...param,
            name: evt.target.value
        })}/>
        <search value={param.name} onChange={evt => setParam({
            ...param,
            personId: evt.target.value
        })}>
            <option value="">负责人</option>
            {
                users.map(user => <option value={user.id}>{user.name}</option>)
            }
        </search>
    </form>)
}

export default SearchPanel