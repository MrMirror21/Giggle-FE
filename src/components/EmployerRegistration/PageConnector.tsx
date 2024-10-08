import { useState } from "react";
import EmployerRegistrationInput from "./EmployerRegistrationInput";
import { partTimeRecruitPostRequest } from "./types";
import EmployerRegistrationInputSecond from "./EmployerRegistrationSecond";
import EmployerRegistrationInputThird from "./EmployerRegistrationThird";
import EmployerRegistrationFourth from "./EmployerRegistrationFourth";

interface Props {
  pageNum: number;
  setPageNum: () => void;
}

const PageConnector = ({ pageNum, setPageNum, ...otherProps }: Props) => {

  const [recruitInfo, setRecruitInfo] = useState<partTimeRecruitPostRequest>({
    title: "",
    job_type: "ANY",
    dead_line: '2024-08-24',
    hourly_wage: 0,
    work_start_date: '2024-08-24',
    working_period: 0,
    work_days: [],
    age: 0,
    gender: "ANY",
    education: "ANY",
    number_recruited: 0,
    content: "",
  });
  switch (pageNum) {
    case 1:
      return (
        <EmployerRegistrationInput
          recruitInfo={recruitInfo}
          setRecruitInfo={() => setRecruitInfo}
          setPageNum={setPageNum}
          {...otherProps}
        />
      );
    case 2:
      return (
        <EmployerRegistrationInputSecond
          recruitInfo={recruitInfo}
          setRecruitInfo={setRecruitInfo}
          setPageNum={setPageNum}
        />
      );
    case 3:
      return (
        <EmployerRegistrationInputThird
          recruitInfo={recruitInfo}
          setRecruitInfo={setRecruitInfo}
          setPageNum={setPageNum}
        />
      );
    case 4:
      return (
        <EmployerRegistrationFourth
          recruitInfo={recruitInfo}
          setRecruitInfo={setRecruitInfo}
          setPageNum={setPageNum}
        />
      );
  }
};

export default PageConnector;
