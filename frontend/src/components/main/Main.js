import React from 'react'

import "./Main.css"
import Speaker from '../pages/speakers/Speakers'
import Teams from '../pages/team/Team'
import Whoarewe from '../pages/whoarewe/Whoarewe'
export default function Main() {
  return (
    <main>
        <Whoarewe/>
        <Speaker/>
        <Teams/>
    </main>
  )
}
