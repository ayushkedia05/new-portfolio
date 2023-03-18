import React, { useState } from "react";
import styles from "./Experience.module.css";
import jobDetails from "../../utils/details.jsx";
import { Badge } from "@mantine/core";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { GrCertificate } from "react-icons/gr";

import { Button } from "@mantine/core";

export default function Experience() {
  const [company, selectedcompany] = useState("Vaidhyamegha");

  const getCompanyInfo = (companydetails) => {
    return (
      <div className=" flex flex-col max-w-screen-md">
        <span className={styles.role}>{jobDetails.role[companydetails]}</span>
        <span className={styles.location}>
          {jobDetails.location[companydetails]}
        </span>
        <span className={styles.period}>
          {jobDetails.period[companydetails]}
        </span>
        <div className="flex flex-wrap pt-4 pb-4">
          {jobDetails.tech[companydetails].map((tech, ind) => (
            <span key={ind} className="p-3">
              <Badge>{tech}</Badge>
            </span>
          ))}
        </div>
        <div className={`${styles.points} font-normal`}>
          {jobDetails.points[companydetails].map((point, ind) => (
            <span key={ind} className="flex">
              <RxDotFilled className="mt-1"></RxDotFilled> {point}
            </span>
          ))}
        </div>
        {/* <div className='pt-10 '>
                <Button color='bg-[#294c5a]' leftIcon={<GrCertificate size="1rem" />}>
                    Certificate
                </Button>
                </div> */}
      </div>
    );
  };

  return (
    <div name="Experience" className=" bg-slate-200 p-8 pb-[3rem]">
      <div className="flex-col lg:flex justify-around max-w-[70%] m-auto pt-[90px] ">
        <div className="flex-row justify-between lg:flex-col ">
          <span className="text-4xl font-bold text-center  ">
            Work Experience
          </span>

          <div className=" flex-col text-lg pt-10">
            <span
              className={`${styles.companyName} ${
                company === "Vaidhyamegha" ? styles.companySelected : undefined
              } pt-7`}
              onClick={() => selectedcompany("Vaidhyamegha")}
            >
              Vaidhyamegha
              {company === "Vaidhyamegha" && (
                <BsFillArrowRightCircleFill
                  size={20}
                ></BsFillArrowRightCircleFill>
              )}
            </span>
            <span
              className={`${styles.companyName} ${
                company === "incribo" ? styles.companySelected : undefined
              }`}
              onClick={() => selectedcompany("incribo")}
            >
              Incribo.INC
              {company === "incribo" && (
                <BsFillArrowRightCircleFill
                  size={20}
                ></BsFillArrowRightCircleFill>
              )}
            </span>
          </div>
        </div>
        <div className="flex items-center pt-[5rem]">
          {getCompanyInfo(company)}
        </div>
      </div>
    </div>
  );
}
