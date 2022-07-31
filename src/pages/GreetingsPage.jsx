import React from 'react';
import s from '../style.module.css';
import screenOne from '../img/ScreenOne.png';

const GreetingsPage = () => {
  return (
    <div className={s.animShow}>
      <div className='container'>
        <>
          <h1 className={s.headerOne}>My demo site.</h1>
        </>
        <div className={s.greetingsText}>
          <div className='row' >
            <div className='col-6'>
              <h3>
                Welcome. This site will show my skills<br />
                in react and redux as well as redux-saga.<br />
                This site demonstrates the creation of some<br />
                posts, this logic can be used in social <br />
                networks or a regular task list.<br />
              </h3>
              <a href="/home" class="btn btn-outline-danger">Get started</a>
            </div>
            <div className='col-6'>
              <div class="card">
                <img src={screenOne} class="card-img-top" className={s.imgOne}/>
                <div class="card-body">
                  <h5 class="card-title">Take a look</h5>
                  <p class="card-text">This site has a post generator.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreetingsPage;
