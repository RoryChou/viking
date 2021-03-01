import React from 'react'
import { useEffect, useState } from "react"
import SearchPanel from './search-panel'
import List from './list'

const ProjectListScreen = () => {
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const [list,setList] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setList(['11','22','33','44'])
        }, 2000)
    },[param])
    return(<div>
        <SearchPanel param={param} setParam={setParam} list={list}/>
        <List list={list}/>
    </div>)
}

export default ProjectListScreen