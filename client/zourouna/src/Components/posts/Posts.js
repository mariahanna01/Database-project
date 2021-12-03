import React from 'react'
import './posts.css'
import RatingComponent from "../Rating/RatingComponent"
import { Link } from 'react-router-dom'
import RatingReadOnly from '../Rating/RatingReadOnly'
export default function Posts()  {



    return (
        
        <div className="MyPosts">
           
            <div className='post'>
                    
                    
                    <img className="postImg" 
                        src ='https://i.redd.it/1elm97cfr5831.jpg'
                        alt=''
                    />
                <div className="postInfo" >   
                    
                
                    <div className="postCats">
                        <span className='postcat'>Zahle</span>
                    
                    </div>
                    <Link to="/village1"  style={{ textDecoration: 'none' ,color:'black'}}>
                        <span className="postTitle">Beqaa Governorate
                        </span>
                        </Link>
                        <hr/>
                     
                </div> 
                        <p className="postDescription"> A red-roofed town set among the eastern 
                        foothills of Mount Sannine, Zahlé enjoys a prime location in the Beqaa 
                        valley. 
                        </p>
{localStorage.getItem('loggedIn')=='true'?<p className="postDescription"> Add a rating to the village you visited below: </p>:null}


                <div className='rating'>
              {localStorage.getItem('loggedIn')!='true'?<RatingReadOnly village='Zahle'/>:<RatingComponent village='Zahle'/>}
                </div>
                </div>   
            


            <div className='post' >
                
                <img className="postImg" 
                    src ='https://www.lebanoninapicture.com/Prv/Images/Pages/Page_126758/lebanon-heritage-old-ancient-heritageday-oldvil-7-30-2017-4-09-13-am-l.jpg'
                    alt=''
                />
            <div className="postInfo">   
                
            
                <div className="postCats">
                    <span className='postcat'>Rashaya al-Wadi</span>
                
                </div>
                <Link to="/village2" style={{ textDecoration: 'none' ,color:'black'}}>
                        <span className="postTitle">Rashaya
                        </span>
                        </Link>
                    <hr/>
                    
            </div> 
                    <p className="postDescription"> Rachaya El Foukhar must be one of the very few
                    places in Lebanon where we could still see an abundance of trees, we crossed
                    huge olive trees and were informed that the village was also known for its olive 
                    oil production.
                    </p>
                    {localStorage.getItem('loggedIn')=='true'?<p className="postDescription"> Add a rating to the village you visited below: </p>:null}


                    <div className='rating'>
                    {localStorage.getItem('loggedIn')!='true'?<RatingReadOnly village= 'Rashaya al-Wadi'/>:<RatingComponent village='Rashaya Al-Wadi'/>}
                </div>
                
                </div>

                <div className='post'>
                
                <img className="postImg" 
                    src ='https://c1.staticflickr.com/9/8628/28636323615_2899625ffd_b.jpg'
                    alt=''
                />
            <div className="postInfo">   
                
            
                <div className="postCats">
                    <span className='postcat'>Maaser El Chouf</span>
                
                </div>
                <Link to="/village3" style={{ textDecoration: 'none' ,color:'black'}}>
                        <span className="postTitle">Chouf
                        </span>
                        </Link>
                    <hr/>
                      
            </div> 
                    <p className="postDescription"> The village of Maasser el Shouf offers a
                    panoramic view of Anti-Lebanon range, Mount Hermon, the irrigated plains
                    of West Beqaa and lake Qaraoun, not to mention the view of the Shouf and 
                    the Mediterranean Sea.

                    </p>
                    {localStorage.getItem('loggedIn')=='true'?<p className="postDescription"> Add a rating to the village you visited below: </p>:null}
                    <div className='rating'>
                    {localStorage.getItem('loggedIn')!='true'?<RatingReadOnly village= "Maaser El Chouf"/>:<RatingComponent village='Maaser El Chouf'/>}
                </div>
                
                
                    </div>




                <div className='post'>
                
                <img className="postImg" 
                    src ='https://lh3.googleusercontent.com/-YqvQN5x5oe4/UzrlG32lc8I/AAAAAAAAC8Y/A6vLShvlWwk/s640/blogger-image-1988350524.jpg'
                    alt=''
                />
            <div className="postInfo">   
                
            
                <div className="postCats">
                    <span className='postcat'>Ghadir</span>
                
                </div>
                <Link to="/village4" style={{ textDecoration: 'none' ,color:'black'}}>
                        <span className="postTitle">Mount Lebanon
                        </span>
                        </Link>
                    <hr/>
                     
            </div> 
                    <p className="postDescription"> A town nestling on the western slope
                    of the mountain and overlooking the bay of Jounieh, there are two large
                    dwellings, markedly different to the other houses around by reason both
                    of their architecture and their size.
                    </p>
                    {localStorage.getItem('loggedIn')=='true'?<p className="postDescription"> Add a rating to the village you visited below: </p>:null}
                    <div className='rating'>
                    {localStorage.getItem('loggedIn')!='true'?<RatingReadOnly village="Ghadir"/>:<RatingComponent village='Ghadir'/>}
                </div>
            </div>   


            <div className='post'>
                
                <img className="postImg" 
                    src ='https://www.lebanoninapicture.com/Prv/Images/Pages/Page_174428/the-beautiful-town-of-bcharre-lebanese-villages-4-14-2018-9-12-33-pm-l.jpg'
                    alt=''
                />
            <div className="postInfo">   
                
            
                <div className="postCats">
                    <span className='postcat'>Bsharri</span>
                
                </div>
                <Link to="/village5" style={{ textDecoration: 'none' ,color:'black'}}>
                        <span className="postTitle">North Governorate
                        </span>
                        </Link>
                    <hr/>
                     
            </div> 
                    <p className="postDescription"> A former Phoenician village where cedar wood
                    was exploited in antiquity, Bcharre rises to 1400m in North Lebanon, in the
                    heart of a majestic and fierce nature. The village, with a rather urban character.
                    </p>
                    {localStorage.getItem('loggedIn')=='true'?<p className="postDescription"> Add a rating to the village you visited below: </p>:null}
                    <div className='rating'>
                    {localStorage.getItem('loggedIn')!='true'?<RatingReadOnly village="Bsharri"/>:<RatingComponent village='Bsharri'/>}
                </div>
                
                </div>

                <div className='post'>
                
                <img className="postImg" 
                    src ='https://i.pinimg.com/originals/0b/2b/01/0b2b0177af0ea8b669783fab8385e809.jpg'
                    alt=''
                />
            <div className="postInfo">   
                
            
                <div className="postCats">
                    <span className='postcat'>Ehden</span>
                
                </div>
                <Link to="/village6" style={{ textDecoration: 'none' ,color:'black'}}>
                        <span className="postTitle">Zgharta District
                        </span>
                        </Link>
                    <hr/>
                    
            </div> 
                    <p className="postDescription"> Located in the heart of the mountains of North 
                    Lebanon, the village of Ehden stands out for its historic downtown, its lively 
                    Midane  and its old souk,perfect for walks and discovery.

                    </p>
                    {localStorage.getItem('loggedIn')=='true'?<p className="postDescription"> Add a rating to the village you visited below: </p>:null}
                    <div className='rating'>
                    {localStorage.getItem('loggedIn')!='true'?<RatingReadOnly village="Ehden"/>:<RatingComponent village='Ehden'/>}
                </div>
                
                </div>
                </div>
                




                
            
        

        
        
    )
       
}