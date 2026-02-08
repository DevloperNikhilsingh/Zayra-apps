import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});




function Contact() {
    const [position, setPosition] = useState(null);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const handleDefault = (e) => {
       e.preventDefault();

       if(name == "" || email == "" || subject == "" || message == ""){
        alert("Please Fill All the Fields");
       }else{
        setTimeout(() => {
            alert("Thank You ! Your Message has been Sent Succesfully.");
        }, 2000);
       };

       //FORM RESET KARNE KE LIYE
       setName("");
       setEmail("");
       setSubject("");
       setMessage("");
    }
 
    useEffect(() => {
        if (!navigator.geolocation) return;

        const watchId = navigator.geolocation.watchPosition(
            (pos) => {
                setPosition([pos.coords.latitude, pos.coords.longitude]);
            },
            (err) => console.log(err),
            { enableHighAccuracy: true }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);


    return (
        <>
            {/* // BANNER */}
            <div className='w-full h-[200px] bg-aboutbanner bg-cover bg-center '>
                <div className='p-14'>
                    <h1 className='text-4xl font-bold text-center text-white'>#let's_talk</h1>
                    <p className='text-sm font-semibold text-center mt-3 text-white'> LEAVE A MESSAGE. We love to here For You !</p>
                </div>
            </div>

            <div className='w-full p-6 mt-6'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='left-box p-4' data-aos="fade-right">
                        <div>
                            <p className='text-sm font-semibold text-gray-400'>GET IN TOUCH</p>
                        </div>
                        <div>
                            <h1 className='text-xl text-black font-bold mt-2'>Visit one of Our Agency location or Contact us Today.</h1>
                        </div>
                        <div>
                            <p className='text-sm font-bold mt-2'>Head Office</p>
                        </div>
                        <div className='flex flex-col space-y-2 mt-3'>
                            <div className='flex items-center gap-4'>
                                <img src="Location.png" alt="" className='w-4 h-4 rounded-full' />
                                <p className='text-sm font-semibold text-gray-500'>56 Glassford Street Glassgow G1 1UL New York</p>
                            </div>
                            <div className='flex items-center gap-4'>
                             <img src="mail.png" alt="" className='w-4 h-4 rounded-full' />   
                            <p className='text-sm font-semibold text-gray-500'>Contact@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-4'>
                             <img src="call.png" alt="" className='w-4 h-4 rounded-full' />      
                            <p className='text-sm font-semibold text-gray-500'>Contact@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-4'>
                             <img src="clock.png" alt="" className='w-4 h-4 rounded-full' />      
                            <p className='text-sm font-semibold text-gray-500'>Monday - Saturday 9:00 AM to 4:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-box w-full h-[300px] md:h-[400px] relative z-0'data-aos="fade-left">
                        {position && (
                            <MapContainer
                                center={position}
                                zoom={15}
                                className="h-full w-full rounded-xl shadow-md z-0"
                            >
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={position} icon={icon}>
                                    <Popup>Our Location 📍</Popup>
                                </Marker>
                            </MapContainer>
                        )}
                    </div>
                </div>
            </div>

            <div className='w-full p-6 mt-6  '>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10 border-2 border-gray-300 p-2'>
                    <div className='left-box'  data-aos="fade-right">
                        <p className='text-sm font-bold text-gray-500'>LEAVE A MESSAGE</p>
                        <h1 className='text-xl font-bold mt-2'>We Love to here for You</h1>

                        <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} className='w-[310px] sm:w-full md:w-full h-[30px] border-2 border-gray-300 mt-4 p-2' />
                        <input type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} className='w-[310px] sm:w-full md:w-full h-[30px] border-2 border-gray-300 mt-4 p-2' />
                        <input type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} className='w-[310px] sm:w-full md:w-full h-[30px] border-2 border-gray-300 mt-4 p-2' />
                        <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} className='w-[310px] sm:w-full md:w-full mt-4 border-2 border-gray-300 p-2'></textarea>

                        <button className='btn-primary mt-2 w-full'
                        onClick={handleDefault}
                        >
                            Submit
                        </button>
                    </div>

                    <div className='right-box p-10  '  data-aos="fade-left">
                        <div className='w-full grid grid-cols-1 md:grid-cols-1 gap-4 '>
                            <div className='box-1 flex gap-4 md:justify-center'>
                                <div>
                                    <img src="blog1.jpg" alt="" className='w-[50px] h-[50px] rounded-full' />
                                </div>
                                <div>
                                    <p className='text-[15px] font-bold'>John Doe</p>
                                    <p className='text-sm font-semibold text-gray-400'>Senior Marketing Manager</p>
                                    <p className='text-sm font-semibold text-gray-400'>Phone: +91 63920000</p>
                                    <p className='text-sm font-semibold text-gray-400'>Email: Contact@gmail.com</p>
                                </div>
                            </div>
                            <div className='box-1 flex gap-4 md:justify-center'>
                                <div>
                                    <img src="blog1.jpg" alt="" className='w-[50px] h-[50px] rounded-full' />
                                </div>
                                <div>
                                    <p className='text-[15px] font-bold'>John Doe</p>
                                    <p className='text-sm font-semibold text-gray-400'>Senior Marketing Manager</p>
                                    <p className='text-sm font-semibold text-gray-400'>Phone: +91 63920000</p>
                                    <p className='text-sm font-semibold text-gray-400'>Email: Contact@gmail.com</p>
                                </div>
                            </div>
                            <div className='box-1 flex gap-4 md:justify-center'>
                                <div>
                                    <img src="blog1.jpg" alt="" className='w-[50px] h-[50px] rounded-full' />
                                </div>
                                <div>
                                    <p className='text-[15px] font-bold'>John Doe</p>
                                    <p className='text-sm font-semibold text-gray-400'>Senior Marketing Manager</p>
                                    <p className='text-sm font-semibold text-gray-400'>Phone: +91 63920000</p>
                                    <p className='text-sm font-semibold text-gray-400'>Email: Contact@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* NEWSLETTER BANNER */}
      <div className='h-[150px] bg-gray-800'>
        <div className='w-full m-auto p-2 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex flex-col justify-center items-start'>
            <h1 className='text-[14px] md:text-3xl font-bold p-2 text-white'>Sign Up For Newsletters</h1>
            <p className='text-[12px] md:text-sm font-semibold p-2 text-white'>Get Email updates About our Latest Shop and <span className='text-yellow-400'>Special offers</span></p>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <input type="text" className='w-[400px] h-[35px] px-2 border-2 border-black outline-none shadow-sm' placeholder='Your E-mail Address' />
            <button className='w-[100px] h-[32px] bg-transparent border-2 text-white border-white shadow-sm rounded-tr-md rounded-br-md'>Subscribe</button>
          </div>
        </div>
      </div>
        </>
    )
}

export default Contact
