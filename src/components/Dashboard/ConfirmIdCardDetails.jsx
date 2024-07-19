import { Email, Phone } from "@mui/icons-material";
import { Grid, Button } from "@mui/material";
import { Typography } from "antd";
import React from "react";
import { Card } from "react-bootstrap";
import imgFile from "../../assets/img/gospelProfile.jpg";
import { programs } from "../../utils/infoData";

const ConfirmIdCardDetails = ({
  formik,
  user,
  loading,
  pdfRef,
  confirm,
  profile,
  setConfirm,
}) => {
  const colorCode = programs?.find(
    (program) => program.abbr == formik.values.college
  )?.color;

  const IdCardDetails = [
    {
      title: "Firstname",
      value: user?.data?.firstname,
    },
    {
      title: "Lastname",
      value: user?.data?.lastname,
    },
    {
      title: "Blood Group",
      value: formik.values.bloodGroup,
    },
    {
      title: "Username",
      value: user?.data?.username,
    },
    {
      title: "Email",
      value: user?.data?.email,
    },
    {
      title: "Sex",
      value: formik?.values?.sex,
    },
    {
      title: "Matric Number",
      value: formik?.values?.matricNumber,
    },
    {
      title: "College",
      value: formik?.values?.college,
    },
    {
      title: "Department",
      value: formik.values.department,
    },
  ];

  return (
    <Card.Text className="text-[12px]">
      <Typography sx={{ opacity: 0.7 }}>
        {" "}
        Please Confirm your Staff ID Card Information
      </Typography>
      <Grid container spacing={2} className="mt-2">
        {IdCardDetails.map((item) => {
          return (
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontSize: "12px",
                  background: "#f2f2f2",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  margin: "0px 0px",
                  "@media (min-width: 0px) and (max-width: 575px)": {
                    fontSize: "15px",
                    padding: "13px 12px",
                  },
                }}>
                {item.title}: <span className="font-bold">{item.value}</span>
              </Typography>
            </Grid>
          );
        })}

        <Grid item xs={12} className="space-x-4">
          {loading ? (
            <>
              <Button
                disabled
                variant="contained"
                color="warning"
                className="mt-4"
                size="medium"
                disableElevation
                sx={{ fontSize: "12px" }}>
                Prev
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled
                color="primary"
                className="mt-4"
                size="medium"
                disableElevation
                sx={{ fontSize: "12px" }}>
                Please wait...
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => setConfirm(!confirm)}
                variant="contained"
                color="warning"
                className="mt-4"
                size="medium"
                disableElevation
                sx={{ fontSize: "12px" }}>
                Prev
              </Button>
              <Button
                type="submit"
                variant="contained"
                onClick={formik.handleSubmit}
                color="primary"
                className="mt-4"
                size="medium"
                disableElevation
                sx={{ fontSize: "12px" }}>
                Submit
              </Button>
            </>
          )}
        </Grid>

        <Grid item xs={12} className=" bg-white">
          <div id="idpdf" ref={pdfRef} className="bg-white h-screen  mb-4">
            <div className="">
              <Grid container spacing={4}>
                <Grid item sm={12} md={12} className="">
                  <div className="flex items-center justify-center relative">
                    <div className="w-[470px] h-[280px] relative border ">
                      <div className="faintLogo">
                        <img
                          src={require("../../assets/img/faintLogo.png")}
                          alt=""
                        />
                      </div>
                      <div className="front">
                        <div
                          className={`header  space-x-2`}
                          style={{ background: colorCode }}>
                          <div className="logo">
                            <img
                              src={require("../../assets/img/logo.png")}
                              alt=""
                            />
                          </div>
                          <div className="text">
                            <h1 className="mt-2">
                              HILLSIDE UNIVERSITY <br />
                              <i>OF</i> SCIENCE & TECHNOLOGY
                            </h1>
                            <h6>Oke-Mesi, Ekiti, Nigeria.</h6>
                          </div>
                        </div>
                        <div>
                          <div className="px-2 py-1 flex mt-1 space-x-4">
                            <div
                              className="h-[133px] w-[177px]"
                              style={{
                                backgroundColor: "#5e0001", // Background color that you want to remove
                                mixBlendMode: "multiply", // Multiply blend mode to remove background
                                border: "2px solid #5e0001", // Border color
                                display: "inline-block", // Ensures the background color is applied properly
                              }}>
                              <img
                                src={profile}
                                className="h-full w-[175px]"
                                alt="Profile Picture"
                              />
                            </div>
                            <div className="w-full ">
                              <div>
                                <h1 className="text-[20px] font-semibold text-[#5e0001] mt-1 uppercase">
                                  {user?.data?.lastname}
                                </h1>
                                <h2 className="text-[19px] -mt-2">
                                  {user?.data?.firstname}
                                  {user?.data?.middlename &&
                                    `, ${user?.data?.middlename}`}
                                </h2>
                              </div>
                              <div className="grid -mt-1 grid-cols-2 ">
                                <div>
                                  <h5 className="text-[12px] text-[#5e0001]">
                                    Matric No
                                  </h5>
                                  <h6 className="font-semibold text-[13px] -mt-2">
                                    {formik.values.matricNumber}
                                  </h6>
                                </div>
                                <div>
                                  <h5 className="text-[12px] text-[#5e0001]">
                                    DOB
                                  </h5>
                                  <h6 className="font-semibold text-[13px] -mt-2">
                                    {new Date(
                                      formik.values.year
                                    ).toLocaleDateString("en-us", {
                                      year: "numeric",
                                      month: "numeric",
                                      day: "2-digit",
                                    })}
                                  </h6>
                                </div>
                                <div>
                                  <h5 className="text-[12px] text-[#5e0001]">
                                    Sex
                                  </h5>
                                  <h6 className="font-semibold text-[13px] -mt-2">
                                    {formik.values.sex}
                                  </h6>
                                </div>
                                <div>
                                  <h5 className="text-[12px] text-[#5e0001]">
                                    Blood Group
                                  </h5>
                                  <h6 className="font-semibold text-[13px] -mt-2">
                                    {formik.values.bloodGroup}
                                  </h6>
                                </div>
                              </div>
                              <div>
                                <h5 className="text-[12px] text-[#5e0001]">
                                  College
                                </h5>
                                <h6 className="font-semibold text-[13px] -mt-2">
                                  {formik.values.college}
                                </h6>
                              </div>
                              <div>
                                <h5 className="text-[12px] text-[#5e0001]">
                                  Department
                                </h5>
                                <h6 className="font-semibold text-[13px] -mt-2">
                                  {formik.values.department}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src={require("../../assets/img/leaf.png")}
                        alt=""
                        className="absolute bottom-0 left-0 "
                      />
                      <div
                        className="absolute flex flex-col items-center justify-center p-3 border top-[70px] right-0"
                        style={{ background: colorCode }}>
                        <span className="-mt-1 text-white text-[13px] font-semibold">
                          S
                        </span>
                        <span className="-mt-1 text-white text-[13px] font-semibold">
                          T
                        </span>
                        <span className="-mt-1 text-white text-[13px] font-semibold">
                          U
                        </span>
                        <span className="-mt-1 text-white text-[13px] font-semibold">
                          D
                        </span>
                        <span className="-mt-1 text-white text-[13px] font-semibold">
                          E
                        </span>
                        <span className="-mt-1 text-white text-[13px] font-semibold">
                          N
                        </span>
                        <span className="-mt-1 text-white text-[13px] font-semibold">
                          T
                        </span>
                      </div>
                    </div>
                  </div>
                </Grid>
                {/* Back of card */}
                <Grid item sm={12} md={12} className="bg-white ">
                  <div className="flex items-center flex-wrap justify-center relative">
                    <div className="h-[280px] w-[470px] border p-3">
                      {/* Header */}
                      <div className="absolute h-[420px] w-[270px] top-[10px] right-[50px]">
                        <img
                          src={require("../../assets/img/faintLogo.png")}
                          alt=""
                        />
                      </div>

                      <div className="flex justify-between">
                        <div className="w-full">
                          <div>
                            <h3 className="text-[12px] font-semibold">
                              This card is the property of
                            </h3>
                            <h3 className="text-[15px] text-[#5e0001] font-bold ">
                              HILLSIDE UNIVERSITY <br /> OF SCIENCE & TECHNOLOGY{" "}
                              <br />
                              <span className="font-semibold text-gray-900 text-[15px]">
                                Oke-Mesi, Ekiti, Nigeria.
                              </span>
                            </h3>
                            <h3 className="text-[12px]  font-semibold">
                              If found, please return to the above institution.
                            </h3>
                            <h3 className="text-[12px] font-semibold ">
                              Visit us at www.hust.edu.ng or call
                              (+)234-814-064-1124
                            </h3>
                          </div>
                          <div className="">
                            <h3 className="text-[12px] font-bold mt-1">
                              Disruptive Innovation Capacity Building in:
                            </h3>

                            <p className="font-semibold text-[13px] ">
                              <span className="font-black text-black">S</span>
                              ciences/Security
                            </p>
                            <p className="font-semibold text-[13px] -mt-4">
                              <span className="text-[#b75927] font-black">
                                T
                              </span>
                              echnology/Engineering
                            </p>
                            <p className="font-semibold text-[13px] -mt-4">
                              <span className="font-black text-[#4172b4]">
                                E
                              </span>
                              ducation/Environment
                            </p>
                            <p className="font-semibold text-[13px] -mt-4">
                              <span className="font-black text-[#577e39]">
                                A
                              </span>
                              gribusiness/Vocational
                            </p>
                            <p className="font-semibold text-[13px] -mt-4">
                              <span className="font-black text-[#91a7d6]">
                                M
                              </span>
                              edicine/Management
                            </p>
                          </div>
                        </div>
                        <div className="w-[30%] relative">
                          <div className="flex justify-between items-center mt-2">
                            <div></div>
                            <div
                              className="border p-2 rounded-md"
                              style={{ background: colorCode }}>
                              <img
                                src={require("../../assets/img/qrcode.png")}
                                alt=""
                                className="w-[100%]"
                              />
                            </div>
                          </div>

                          <div className="absolute bottom-3 ">
                            <div className="flex items-center justify-center flex-col">
                              <img
                                src={require("../../assets/img/vc_sign.png")}
                                className="w-[55%]"
                                alt=""
                              />
                              <h5 className="text-[15px] text-[#5e0001] font-semibold mt-2">
                                Registrar
                              </h5>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Email
                                fontSize="13px"
                                style={{ fontSize: "12px" }}
                              />
                              <span className="text-[10px]">
                                Registrar@hust.edu.ng
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Phone
                                fontSize="13px"
                                style={{ fontSize: "12px" }}
                              />
                              <span className="text-[10px]">09019202993</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </Card.Text>
  );
};

export default ConfirmIdCardDetails;
