import React from 'react'
import { useEffect, useState } from "react"
import SearchPanel from './search-panel'
import List from './list'
import { useDebounce } from './hooks'

const ProjectListScreen = () => {
    const [users,setUsers] = useState([])
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const debouncedParam = useDebounce(param,2000)

    const [list,setList] = useState([])
    useEffect(() => {
        fetch('project.json').then(async res => {
            const l = await res.json()
            setList(l.data)
        })
    },[debouncedParam])
    useEffect(() => {
        fetch('users.json').then(async res => {
            const l = await res.json()
            setUsers(l.data)
        })
    },[])
    return(<div>
        <SearchPanel users={users} param={param} setParam={setParam} list={list}/>
        <List users={users}  list={list}/>
    </div>)
}

export default ProjectListScreen