import React from "react";

const leftSect = ({temp, date, high, low}) => (
  <>
    {
        temp &&
        <h1 class="temp"> {temp} </h1>
    }

    {
        date &&
        <span class="date"> {date} </span>
    }

    {
        high && low &&
        <section class="hiLo">
            <span class="high"> {high} </span>
            <span class="low"> {low} </span>
        </section>
    }
  </>
);

export default leftSect;
