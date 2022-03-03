import React from "react";
import styled from "styled-components";
const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  height: 4rem;
  margin: 1rem;
`;

const DateStyleClass = styled.div`
  display: flex;
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
`;
const DateStyle = styled.div`
  margin: 0px 2px 0px 0px;
  font-size: 2.4rem;
  color: #5c5e6c;
  font-weight: 500;
`;

const MonthAndYear = styled.div``;

const MonthStyle = styled.div`
  font-size: 0.8rem;
  color: #494a52;
`;

const YearStyle = styled.div`
  font-size: 0.8rem;
  color: #787986;
  font-weight: 400;
`;

const DayStyleClass = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5c5e6c;
`;

const Header = (props) => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(
    today.toLocaleString("default", { month: "short" })
  ).toUpperCase(); //January is 0!
  const yyyy = today.getFullYear();
  const day = String(today.toLocaleDateString("default", { weekday: "long" }));

  return (
    <>
      <HeaderStyle>
        <DateStyleClass>
          <DateStyle>{dd}</DateStyle>
          <MonthAndYear>
            <MonthStyle>{mm}</MonthStyle>
            <YearStyle>{yyyy}</YearStyle>
          </MonthAndYear>
        </DateStyleClass>
        <DayStyleClass>{day}</DayStyleClass>
      </HeaderStyle>
    </>
  );
};

export default Header;
