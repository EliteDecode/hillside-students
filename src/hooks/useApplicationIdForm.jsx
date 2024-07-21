import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, update } from "../features/auth/authSlice";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { programs } from "../utils/infoData";
import { usePDF } from "react-to-pdf";

const useApplicationIdForm = () => {
  const [confirm, setConfirm] = useState(false);
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const qrCode = `https://online.hust.edu.ng/OESWebApp/images/code/${user?.data?.qrcode}`;
  const img = `https://backend.hust.edu.ng/hust/api/v1/uploads/staffProfile/${user?.data?.profilePicture}`;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pdfRef = useRef();

  const { toPDF, targetRef } = usePDF({
    filename: `id.pdf`,
  });

  const handlePreview = async () => {
    setConfirm(!confirm);
  };

  const submitIDCard = async (values) => {
    setLoading(true);

    const colorCode = programs?.find(
      (program) => program.abbr == values.college
    )?.color;

    const formData = new FormData();
    formData.append("profilePicture", values.profilePicture);

    const updates = [
      { columnName: "matricNumber", newValue: values.matricNumber },
      { columnName: "programs", newValue: "BSC" },
      { columnName: "bloodGroup", newValue: values.bloodGroup },
      { columnName: "college", newValue: values.college },
      { columnName: "sex", newValue: values.sex },
      { columnName: "dob", newValue: values.year },
      { columnName: "idCardColor", newValue: colorCode },
      { columnName: "department", newValue: values.department },
      { columnName: "IdCardStatus", newValue: 1 },
      ,
    ].filter((update) => update.newValue !== "");
    formData.append("updates", JSON.stringify(updates));
    try {
      dispatch(update(formData));
    } catch (error) {
      toast.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      matricNumber: "",
      college: "",
      sex: "",
      year: "",
      department: "",
      bloodGroup: "",
      profilePicture: null,
    },
    onSubmit: (values) => {
      submitIDCard(values);
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error(message);
      setLoading(false);
    }

    if (
      user &&
      isSuccess &&
      message == "Congratulations profile updated successfully"
    ) {
      toast.success("Congratulations your info has been updated", {
        onClose: () => {
          dispatch(reset());
          setLoading(false);
          navigate("/dashboard");
        },
      });
    }

    dispatch(reset());
  }, [isError, isSuccess, dispatch, message]);

  return {
    formik,
    loading,
    loader,
    setProfile,
    setLoader,
    setConfirm,
    qrCode,
    img,
    targetRef,
    toPDF,
    handlePreview,
    user,
    profile,
    confirm,
    pdfRef,
  };
};

export default useApplicationIdForm;
