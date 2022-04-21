import React from "react";

const rightSect = ({ locat, cond, humid, wind }) => (
  <>
    {
        locat && <h1 className="location"> {locat} </h1>
    }
    {
        cond &&
        <section className="status">
            <img className="todayIcon" alt="Shows status conditions" />
            <span className="conditions"> {cond} </span>
        </section>
    }
    {
        humid && wind &&
        <section className="huWi">
        <span className="humidity"> {humid} </span>
        <span className="wind"> {wind} </span>
        </section>
    }
  </>
);

export default rightSect;
