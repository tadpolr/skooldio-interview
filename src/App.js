import React, { Component } from 'react'
import DepartmentCard from './components/DepartmentCard'

class App extends Component {
    render() {
        return <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', margin: '1.5rem auto 0' }}>
          <DepartmentCard data={mockData}/>
        </div>
    }
}

export default App;

// This is an example data for DepartmentCard component.
// If necessary to reuse this component with other format of data, spliting data into individual prop might be a better option.
const mockData = {
    isFavorite: false,

    faculty: 'คณะวิศวกรรมศาสตร์',
    department: 'สาขาวิศวกรรมทั่วไป',
    university: 'จุฬาลงกรณ์มหาวิทยาลัย',
    round: [
        {index: 1, active: true},
        {index: 2, active: true},
        {index: 3, active: true},
        {index: 4, active: true},
        {index: 5, active: false},
    ],
    currentRound: { index: 4, name: 'Admission' },

    userScore: '23,453',
    lowestScore: '20,845',
    averageScore: '21,345',
    highestScore: '23,415',

    scoreWeight: [
        { name: 'GPAX', minimum: 2, value: '20%' },
        { name: 'GAT', minimum: null, value: '15%' },
        { name: 'PAT 1', minimum: null, value: '15%' },
        { name: 'PAT 2', minimum: null, value: '20%' },
        { name: 'PAT 3', minimum: null, value: '30%' },
    ],
    insterstedUser: 10,
}

