import React from 'react'
import Guidance from "../assets/images/guidance_icon.png"
import { FiSearch } from "react-icons/fi";
import { MdNotifications } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import "./Header.css"

export const Header = () => {
  return (
    <div className = "header">
        <div className="header_left">
            <img className="ICON" src={Guidance}/>
            <div className="seic">
                <div className="not ll">
                    <MdNotifications />
                    <span className="unre">Unread message</span>
                </div>
                <div className="sear ll">
                   <FiSearch/>
                   <span className="seacrh">
                    <input id="IN"type="text" placeholder='Seeking guidance' />
                   </span>
                </div>
            </div>
            
        </div>
        <div className="Header_right">  
            <div className="centered">
                <div className="spe">
                  <IoIosHome />
                    <div className="">Home </div>
                </div>
                <div className="spe">
                    <div className=''></div>
                   <span>Matric <br/> Results</span>
                </div>
                <div className="spe">
                  <FaBook />
                  <span>courses</span>
                </div>
                <div className="spe">
                    <MdWork />
                  <span>Career <br/> Expo</span>
                </div>
                <div className="spe">
                     <FaCalendar />
                    <span>Calendar</span>
                </div>
                <div className="spe">
                     <GrResources />
                       <span>Resources</span>
                </div>
            </div>
        </div>
        <div className="last">
            <div className="af">
                aososgi
            </div>
        </div>
    </div>
  )
}
