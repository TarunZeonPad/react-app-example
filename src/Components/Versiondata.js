import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Versiondata()
{
    const [versionData, setVersionData]= useState([]); 
    useEffect( ()=>{
        const getVersionData= async()=>{
            const reqData= await fetch("http://13.48.43.79:5000/api/user");
            const resData= await reqData.json();
            setVersionData(resData);
           // console.log(resData);
        }
        getVersionData();
    },[]);
 
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Version</h5>
                       <div className="d-grid d-md-flex justify-content-md-end mb-3">
                        <Link to="/addversion" className="btn btn-warning">Add New Version</Link>
                       </div>
                       <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                        <th>Sr. No</th>
                        <th>Version</th>
                        <th>User Id</th>
                        <th>Description</th>
                        <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                         { versionData.map( (versionData, index)=>(                           
                        <tr key={index}>
                        <td>{index+1} </td>
                        <td>{ versionData.versionName } </td>
                        <td>{ versionData.email } </td>
                        <td>{ versionData.description } </td>
                        <td>{ versionData.status===1?"Active":"Inactive" } </td>
                        </tr>
                        )) 
                        }                        
                        </tbody>
                        </table>                            
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Versiondata;
