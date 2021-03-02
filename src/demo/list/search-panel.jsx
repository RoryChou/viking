import React from 'react'

const SearchPanel = ({ param, setParam, users }) => {
    return (<form action="">
        <input type="text" value={param.name} onChange={evt => {
            setParam({
                ...param,
                name: evt.target.value
            })
        }} />
        <select value={param.name} onChange={evt => {
            console.log(evt.target.value);
            setParam({
                ...param,
                personId: evt.target.value
            })
        }}>
            <option value={''}>负责人</option>
            {
                users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
            }
        </select>
    </form>)
}

export default SearchPanel