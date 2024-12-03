import React from "react";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cards from "./Card";
import StatisticsChart from "./statisticsChart";
import CurrentOrders from "./currentOrder";
import NearbyOrder from "./NearbyOrder";
import PrinterList from "./PrinterList";
import styled from "styled-components";

const Section = styled.div`
  height: 150vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 170vh;
  }
`;
const Maintext = styled.div`
  display: flex;
  // flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const StudentDashBoard: React.FC = () => {
  return (
    <Section>
      {/* <Navbar /> */}

      <Maintext>
        <SideBar />
        <Container>
          <Left>
            <Header />
            {/* <div className=" flex flex-col w-full"> */}

            <div className="grid grid-cols-3 gap-10 h-full p-6 ">
              <div className="col-span-2 flex flex-col space-y-5">
                <Cards />
                <StatisticsChart />
                <NearbyOrder />
              </div>
              <div className="col-span-1 flex flex-col space-y-5">
                <CurrentOrders />
                <PrinterList />
              </div>
            </div>
            {/* </div> */}
          </Left>
        </Container>
      </Maintext>
      <Footer />
    </Section>
  );
};

export default StudentDashBoard;
