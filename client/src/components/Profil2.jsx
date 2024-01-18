import React , {useState, useEffect} from 'react'
import './profile2.css'
import {useSelector,useDispatch} from 'react-redux'

import { edituser } from '../redux/userslices'

function Profil2({ping, setping}) {
    const user = useSelector(state => state.user.user)
const dispatch = useDispatch()
const [edited, setedited] = useState({
    name:user?.name,
    lastname:user?.lastname,
    email:user?.email,
    password:user?.password,
})
  return (
    <div className="profil" style={{marginTop:150} }>
     
    <div className="row" style={{width:1148,marginLeft:48}} > 
      <div className="col-md-12">
        <ol className="breadcrumb">
          <h6  style={{fontWeight:'bolder', fontSize:24}}>Informations personnelles</h6>
        </ol>
      </div>
    </div>
   <div className="container" style={{marginTop:110}} >
         
  <div className="main-body" style={{margin:20}}>

   {/* /Breadcrumb */}
    <div className="row gutters-sm box">
      <div className="col-md-4 mb-3" style={{marginTop:20}}>
        <div className="card" style={{marginLeft:-100, marginTop:-120, width:400, height:350}}>
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center" >
              <img src="https://img.freepik.com/vecteurs-premium/avatar-icon002_750950-52.jpg" alt="Admin" class="rounded-circle p-1 bg-light" width="120" height="130"  />
              <div className="mt-3">
                <h4>{user?.name} {user?.lastname}</h4>
                <p className="text-secondary mb-1">Full Stack Developer</p>
                <p className="text-muted font-size-sm"></p>
              
                {/* <button className="btn btn-primary">Changer votre photo</button> */}
               
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="col-md-8">
        <div className="card mb-3" style={{marginLeft:-10, marginTop:-100, width:665}}>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0" style={{color:"blue"}}>Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              <input type="text" class="form-control"  placeholder={user?.name} onChange={(e)=>setedited({...edited,name:e.target.value})}/>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0" style={{color:"blue"}}>Lastname</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              <input type="text" class="form-control" placeholder={user?.lastname}  onChange={(e)=>setedited({...edited,lastname:e.target.value})} />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0" style={{color:"blue"}}>Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              <input type="text" class="form-control" placeholder={user?.email}  onChange={(e)=>setedited({...edited,email:e.target.value})} />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0" style={{color:"blue"}}>Password</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              <input type="text" class="form-control" placeholder={user?.password}  onChange={(e)=>setedited({...edited,password:e.target.value})} />
              </div>
            </div>
            <hr />
          
            <div className="row">
              <div className="col-sm-12">
                <button onClick={()=>{dispatch(edituser(edited));setping(!ping)}}>edit</button> 
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


{/*Reservation List */}


</div>
  )
}

export default Profil2