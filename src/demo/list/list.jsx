import React from 'react'

const List = ({list}) => {
    return(<table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project => <tr>
                    <td>{project}</td>
                    {/* <td>{project.personName}</td> */}
                </tr>)
            }
        </tbody>
    </table>)
}

export default List