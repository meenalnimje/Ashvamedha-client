import React, { useEffect, useState } from "react";
import axios from "axios";
import PointInfo from "../../components/PointInfo/PointInfo";
import CollegeWrapper from "../../components/CollegeWrapper/CollegeWrapper";
function Leaderboard() {
  const collegeInfo = [
    {
      collegeName: "niser",
      displayName: "NISER",
      collegeLogo: "",
    },
    {
      collegeName: "iitbbs",
      displayName: "IIT BBS",
      collegeLogo: "",
    },
    {
      collegeName: "bjb",
      displayName: "B.J.B",
      collegeLogo: "",
    },
    {
      collegeName: "bgu",
      displayName: "B.G.U",
      collegeLogo: "",
    },
    {
      collegeName: "ict",
      displayName: "I.C.T",
      collegeLogo: "",
    },
    {
      collegeName: "igit",
      displayName: "I.G.I.T",
      collegeLogo: "",
    },
    {
      collegeName: "centurion",
      displayName: "CENTURION",
      collegeLogo: "",
    },
    {
      collegeName: "aiims",
      displayName: "AIIMS",
      collegeLogo: "",
    },
    {
      collegeName: "iiit",
      displayName: "IIIT",
      collegeLogo: "",
    },
    {
      collegeName: "cvraman",
      displayName: "CVRAMAN",
      collegeLogo: "",
    },
    {
      collegeName: "outr",
      displayName: "OUTR",
      collegeLogo: "",
    },
    {
      collegeName: "silicon",
      displayName: "SILICON",
      collegeLogo: "",
    },
  ];
  return (
    <div className="leaderboard">
      <div className="heading">
        <h1 className="text">POINT TABLE</h1>
      </div>
      <div className="content">
        {collegeInfo.map((item) => (
          <CollegeWrapper collegeInfo={item} />
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
