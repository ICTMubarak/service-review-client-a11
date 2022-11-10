import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import banner from '../easyBanner.jpg'
import Service from './Service';




const Home = () => {
    const services = useLoaderData({});
    const {user} = useContext(AuthContext);
    const threeService  = services.slice(0,3);
    
    return (
        <div>
            <img src={banner} alt="Banner" />
            <div class="grid grid-cols-1 gap-2 border-4 gap-4 md:grid-cols-3">
            {
                threeService.map(service => <Service key={service._id} service={service}></Service>)
            }
            </div>
            <Link className="btn btn-ghost normal-case text-xl" to='/allservices'>See All</Link>
<br /><br />
            <div class="flex">
            <section class="flex-1">
             <div className="card card-compact w-96 bg-base-100 shadow-xl">
               <div className="card-body">
                 <h2 className="card-title">About us</h2>
                 <p>Those who provide different services individually but do not have their own website, we promote their services.</p>
                 <p>You can write details about your service and post it on our ad service. Tell people about your services.</p>
                 <p>People can give their reviews about your services here.</p>
               </div>
             </div>
            </section>

            <section class="flex-1">
             <div className="card card-compact w-96 bg-base-100 shadow-xl">
               <div className="card-body">
                 <h2 className="card-title">Contact us</h2>
                 <p>Mobile: 01919738110</p>
                 <p>E-mail: easyservices@gmail.com</p>
                 <p>Whatsapp: 01729738110</p>
                 <p>Imo: 01729738110</p>
                 <p>Facebook: fb.com/mubarak.hossain</p>
               </div>
             </div>
            </section>

            </div>
            <br /><br />
            
        </div>
    );
};

export default Home;