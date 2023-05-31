import React from 'react'

import NavBAr from './components/NavBar/NavBAr'
import Banner from './components/Banner/Banner';
import './App.css'
import RowPost from './components/RowPost/RowPost';
import Footer from './components/Footer/footer'
function App(){
    
    return(
        <div className='App'>
             
<NavBAr/>
<Banner/>
<RowPost title='SCREENFLIX ORIGINALS'/>
<RowPost title='Action Movies' isSmall />
<Footer/>
        </div>
    )
}
export default App;