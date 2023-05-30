import React from 'react'

import NavBAr from './components/NavBar/NavBAr'
import Banner from './components/Banner/Banner';
import './App.css'
import RowPost from './components/RowPost/RowPost';
function App(){
    return(
        <div className='App'>
<NavBAr/>
<Banner/>
<RowPost/>
        </div>
    )
}
export default App;