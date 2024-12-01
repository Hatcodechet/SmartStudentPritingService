import React from "react";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cards from "./Card";
import StatisticsChart from "./statisticsChart";
import CurrentOrders from "./currentOrder";
import NearbyOrder from "./NearbyOrder";
import PrinterList from "./PrinterList";
const StudentDashBoard: React.FC = () => {
    return (
        <div className="flex h-auto">
            <SideBar/>
            <div className=" flex flex-col w-full">
              <Header/>
                <div className="grid grid-cols-3 gap-10 h-full p-6 ">
                  <div className="col-span-2 flex flex-col space-y-5"> 
                    <Cards/>
                    <StatisticsChart/>
                    <NearbyOrder/>
                  </div>
                  <div className="col-span-1 flex flex-col space-y-5">
                    <CurrentOrders/>
                    <PrinterList/>
                  </div>
                </div>
              <Footer />  
            </div>
        </div>
    );
  };
  
  export default StudentDashBoard;