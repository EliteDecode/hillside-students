import * as Yup from "yup";

export const programs = [
  {
    college: "Tristate College of Health and Allied Medical Sciences",
    abbr: "Tristate College of Health and Allied Medical Sciences",
    color: "#91a7d6",
    courses: [
      "Medicine & Surgery",
      "Dentistry",
      "Pharmacy",
      "Optometry",
      "Nursing Science",
      "Medical Laboratory Science",
      "Physiology",
      "Audiology",
      "Anatomy",
      "Biochemistry",
      "Nutrition & Dietics",
    ],
  },
  {
    college: "College of Engineering And Computing Sciences",
    abbr: "Engineering And Computing Sciences",
    color: "#b75927",
    courses: [
      "Computer Science",
      "Computing & Artificial Intelligence",
      "Cyber Security",
      "Data Science",
      "Software Engineering",
      "Aerospace Engineering",
      "Civil & Construction Engineering",
      "Systems Engineering",
      "Mechatronics Engineering",
      "Mechanical Engineering",
      "Chemical Engineering",
      "Electrical Engineering",
    ],
  },

  {
    college: "College of Business Law and Educational Science",
    abbr: "Business Law & Educational Sciences",
    color: "#4172b4",
    courses: [
      "Accounting",
      "Economics",
      "Mass Communication",
      "Logistics & Supply Chain Management",
    ],
  },
  {
    college: "College of Agriculture, Life And Environmental Sciences",
    abbr: "Agriculture, Life & Environmental Sciences",
    color: "#577e39",
    courses: [
      "Agribusiness",
      "Agricultural Economics",
      "Forensic Science",
      "Environmental Management & Toxicology",
      "Microbiology",
      "Petroleum Chemistry",
    ],
  },
];

export const validationSchema = Yup.object().shape({
  matricNumber: Yup.string().required("Please enter your matric number"),
  college: Yup.string().required("Please select your College"),
  bloodGroup: Yup.string(),
  sex: Yup.string().required("Please select your gender"),
  year: Yup.string().required("Please enter your date of birth"),
  department: Yup.string().required("Please enter your department"),
  profilePicture: Yup.mixed().required("Profile Picture is required"),
});
