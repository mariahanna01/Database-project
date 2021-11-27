import React from 'react'
import Plan from '../Plan/Plan'
import './Plans.css'

export default function PlansVillage2() {
    return (
        
        <div className="main2karen">
           <div className='plan'> <Plan  imageUrl="https://i.redd.it/1elm97cfr5831.jpg"  planTitle='Plan1' capacity='15 bitches'  price='69 dollar mapi' nbOfDays='1'  />  </div> 
           <div className='plan'><Plan imageUrl='https://i.redd.it/1elm97cfr5831.jpg'  planTitle='Plan2' capacity='2 whores'  price='1 lbp' nbOfDays='-90'  />   </div>
           <div className='plan'> <Plan imageUrl='https://i.redd.it/1elm97cfr5831.jpg'  planTitle='Plan3' capacity='1'  price='3' nbOfDays='4' />   </div>

        </div>
        
    )
}
