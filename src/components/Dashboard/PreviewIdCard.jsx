import { Grid } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { Email, Phone } from "@mui/icons-material";
import { Typography } from "antd";

const PreviewIdCard = ({
  loader,
  downloadPDF,
  targetRef,
  user,
  toPDF,
  formik,
}) => {
  const profile = `https://backend.hust.edu.ng/hust/api/v1/uploads/idProfile/${user?.data?.profilePicture}`;

  return (
    <>
      <Card className="border-red-400 overflow-x-scroll">
        <Card.Header></Card.Header>
        <Card.Body>
          <Grid item xs={12} ref={targetRef} className=" bg-white">
            <div
              id="idpdf"
              ref={targetRef}
              className="bg-white h-screen   mb-4">
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
                            style={{ background: user?.data?.idCardColor }}>
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
                                      {user?.data?.matricNumber}
                                    </h6>
                                  </div>
                                  <div>
                                    <h5 className="text-[12px] text-[#5e0001]">
                                      DOB
                                    </h5>
                                    <h6 className="font-semibold text-[13px] -mt-2">
                                      {new Date(
                                        user?.data?.year
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
                                      {user?.data?.sex}
                                    </h6>
                                  </div>
                                  <div>
                                    <h5 className="text-[12px] text-[#5e0001]">
                                      Blood Group
                                    </h5>
                                    <h6 className="font-semibold text-[13px] -mt-2">
                                      {user?.data?.bloodGroup}
                                    </h6>
                                  </div>
                                </div>
                                <div>
                                  <h5 className="text-[12px] text-[#5e0001]">
                                    College
                                  </h5>
                                  <h6 className="font-semibold text-[13px] -mt-2">
                                    {user?.data?.college}
                                  </h6>
                                </div>
                                <div>
                                  <h5 className="text-[12px] text-[#5e0001]">
                                    Department
                                  </h5>
                                  <h6 className="font-semibold text-[13px] -mt-2">
                                    {user?.data?.department}
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
                          style={{ background: user?.data?.idCardColor }}>
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
                                HILLSIDE UNIVERSITY <br /> OF SCIENCE &
                                TECHNOLOGY <br />
                                <span className="font-semibold text-gray-900 text-[15px]">
                                  Oke-Mesi, Ekiti, Nigeria.
                                </span>
                              </h3>
                              <h3 className="text-[12px]  font-semibold">
                                If found, please return to the above
                                institution.
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
                                style={{ background: user?.data?.idCardColor }}>
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
        </Card.Body>
      </Card>
      <Typography className="sm:hidden block">
        {" "}
        <span className="text-red-500">(*)</span> Download is available on
        desktop.
      </Typography>
      <button
        className="py-2 m-3 px-6 bg-[#5e0001] text-white rounded-md sm:block hidden"
        disabled={loader}
        onClick={() => {
          toPDF();
        }}>
        {loader ? "Please wait..." : "Download ID Card"}
      </button>
    </>
  );
};

export default PreviewIdCard;
