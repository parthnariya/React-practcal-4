import React from "react";
import { HeaderStyle , DateStyleClass, DateStyle, MonthAndYear,MonthStyle,YearStyle,DayStyleClass } from "../../styled/Header.styled";


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
