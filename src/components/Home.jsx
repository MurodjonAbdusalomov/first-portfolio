import React from 'react';
import face from '../assets/face.png';
import face2 from '../assets/face2.png';

const Home = () => {
  return (
    <div className='asosiy1' id='container'>

      <h1 className='h12'>My - Projects</h1>





      <div className="fff">


        <div className='fff1'>
          <img className='face' src={face} alt="" /><br />

          <a href="https://face-market-2ovi.vercel.app/">Face-marcet -//</a>
        </div>

        <div className='fff1'>
          <img className='face' src={face2} alt="" /><br />


          <a href="https://yangi2-face-films.vercel.app/">Films -//</a>
        </div>

        <div className='fff1'>


          <a href="">link</a>
        </div>

        <div className='fff1'>


          <a href="">link</a>
        </div>



      </div>





    </div>
  )
}

export default Home