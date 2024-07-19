import React from "react";
import {
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Box,
} from "@mui/material";
import Card from "react-bootstrap/Card";
import PreviewIdCard from "./PreviewIdCard";
import ConfirmIdCardDetails from "./ConfirmIdCardDetails";
import useApplicationIdForm from "../../hooks/useApplicationIdForm";
import { programs } from "../../utils/infoData";

const IDForm = () => {
  const {
    formik,
    loading,
    loader,
    setProfile,

    user,
    profile,
    setConfirm,
    pdfRef,
    downloadPdf,
    handlePreview,
    confirm,
  } = useApplicationIdForm();

  return (
    <>
      <Box className="mt-3 sm:mb-48 mb-48">
        {user?.data?.Approved == 0 ? (
          <Card>
            <Card.Header> Student Access ID Card Applications</Card.Header>
            <Card.Body>
              <Card.Title className="font-bold text-[#5e0001]">
                Fill out the form to request your staff access ID card.
              </Card.Title>
              {!confirm ? (
                <Card.Text className="text-[12px]">
                  <form
                    onSubmit={formik.handleSubmit}
                    className=" mx-auto mt-8">
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth size="medium" variant="outlined">
                          <InputLabel htmlFor="college">College</InputLabel>
                          <Select
                            label="Role"
                            name="college"
                            id="college"
                            value={formik.values.college}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}>
                            {programs?.map((program, index) => (
                              <MenuItem value={program.abbr} key={index}>
                                {program.college}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        {formik.errors.college && formik.touched.college && (
                          <Typography
                            sx={{
                              fontSize: "11px",
                              color: "red",
                              textAlign: "left",
                            }}>
                            {formik.errors.college}
                          </Typography>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel htmlFor="department">
                            Department
                          </InputLabel>
                          <Select
                            label="Role"
                            name="department"
                            id="department"
                            value={formik.values.department}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}>
                            {programs
                              ?.find(
                                (item) => item?.abbr == formik.values.college
                              )
                              ?.courses?.map((department, index) => (
                                <MenuItem value={department} key={index}>
                                  {department}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                        {formik.errors.department &&
                          formik.touched.department && (
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "red",
                                textAlign: "left",
                              }}>
                              {formik.errors.department}
                            </Typography>
                          )}
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth size="medium" variant="outlined">
                          <InputLabel htmlFor="sex">Sex</InputLabel>
                          <Select
                            label="Sex"
                            name="sex"
                            id="sex"
                            value={formik.values.sex}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}>
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                          </Select>
                        </FormControl>
                        {formik.errors.sex && formik.touched.sex && (
                          <Typography
                            sx={{
                              fontSize: "11px",
                              color: "red",
                              textAlign: "left",
                            }}>
                            {formik.errors.sex}
                          </Typography>
                        )}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth size="medium" variant="outlined">
                          <InputLabel htmlFor="bloodGroup">
                            Blood Group
                          </InputLabel>
                          <Select
                            label="Blood Group"
                            name="bloodGroup"
                            id="bloodGroup"
                            value={formik.values.bloodGroup}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}>
                            <MenuItem value="A+">A+</MenuItem>
                            <MenuItem value="A-">A-</MenuItem>
                            <MenuItem value="B+">B+</MenuItem>
                            <MenuItem value="B-">B-</MenuItem>
                            <MenuItem value="AB+">AB+</MenuItem>
                            <MenuItem value="AB-">AB-</MenuItem>
                            <MenuItem value="O+">O+</MenuItem>
                            <MenuItem value="O-">O-</MenuItem>
                          </Select>
                        </FormControl>
                        {formik.errors.bloodGroup &&
                          formik.touched.bloodGroup && (
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "red",
                                textAlign: "left",
                              }}>
                              {formik.errors.bloodGroup}
                            </Typography>
                          )}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Matric Number"
                          name="matricNumber"
                          fullWidth
                          size="medium"
                          focused
                          variant="outlined"
                          value={formik.values.matricNumber}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.matricNumber &&
                          formik.touched.matricNumber && (
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "red",
                                textAlign: "left",
                              }}>
                              {formik.errors.matricNumber}
                            </Typography>
                          )}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Date of Birth"
                          name="year"
                          fullWidth
                          size="medium"
                          focused
                          type="date"
                          variant="outlined"
                          value={formik.values.year}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.year && formik.touched.year && (
                          <Typography
                            sx={{
                              fontSize: "11px",
                              color: "red",
                              textAlign: "left",
                            }}>
                            {formik.errors.year}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12}>
                        <input
                          accept="image/*"
                          style={{ display: "none" }}
                          id="profilePicture"
                          name="profilePicture"
                          type="file"
                          onChange={(event) => {
                            formik.setFieldValue(
                              "profilePicture",
                              event.currentTarget.files[0]
                            );
                            // Display the chosen picture beneath the form
                            setProfile(
                              URL.createObjectURL(event.currentTarget.files[0])
                            );
                          }}
                        />

                        <label htmlFor="profilePicture">
                          <Button
                            variant="outlined"
                            color="primary"
                            component="span"
                            className="mt-2 w-full">
                            Upload Profile Picture
                          </Button>
                        </label>
                        {profile && (
                          <img
                            src={profile}
                            alt=""
                            className="h-[120px] w-[110px] mt-1"
                          />
                        )}

                        {formik.errors.profilePicture &&
                          formik.touched.profilePicture && (
                            <Typography
                              sx={{
                                fontSize: "11px",
                                color: "red",
                                textAlign: "left",
                              }}>
                              {formik.errors.profilePicture}
                            </Typography>
                          )}
                      </Grid>

                      {/* Display the chosen picture */}

                      {formik.values.matricNumber &&
                        formik.values.profilePicture &&
                        formik.values.college &&
                        formik.values.sex &&
                        formik.values.year &&
                        formik.values.department && (
                          <>
                            <Grid item xs={12} md={12}>
                              <Button
                                onClick={handlePreview}
                                variant="contained"
                                color="success"
                                className="mt-4 w-full"
                                size="large"
                                sx={{ fontSize: "12px" }}>
                                Next
                              </Button>
                            </Grid>
                          </>
                        )}
                    </Grid>
                  </form>
                </Card.Text>
              ) : (
                <ConfirmIdCardDetails
                  pdfRef={pdfRef}
                  loading={loading}
                  profile={profile}
                  confirm={confirm}
                  setConfirm={setConfirm}
                  formik={formik}
                  user={user}
                />
              )}
            </Card.Body>
          </Card>
        ) : (
          <>
            <PreviewIdCard
              pdfRef={pdfRef}
              downloadPDF={downloadPdf}
              loader={loader}
              formik={formik}
              user={user}
            />
          </>
        )}
      </Box>
    </>
  );
};

export default IDForm;
