export const DEFAULT_PROFILE_IMAGE_URL =
  "https://randomuser.me/api/portraits/lego/7.jpg";

// list of genders used in employee form
export const GENDER = [
  {
    label: "Male",
    value: "M",
  },
  {
    label: "Female",
    value: "F",
  },
];

// list of table titles
export const TABLE_TITLES = [
  {
    key: 1,
    value: "Image",
  },
  {
    key: 2,
    value: "First Name",
  },
  {
    key: 3,
    value: "Last Name",
  },
  {
    key: 4,
    value: "Email",
  },
  {
    key: 5,
    value: "Phone",
  },
  {
    key: 6,
    value: "Gender",
  },
  {
    key: 7,
    value: "Actions",
  },
];

// list of validation mesages
export const ERROR_MESSAGE = {
  FIRST_NAME_REQUIRED: "First name is required",
  INVALID_NAME: "Only allow alphabets, min 6 character and max 10 characters",
  LAST_NAME_REQUIRED: "Last name is required",
  EMAIL_REQUIRED: "Email is required",
  INVALID_EMAIL: "Email is invalid",
  PHONE_REQUIRED: "Mobile number is required",
  INVALID_PHONE: "Mobile number is invalid (+94X XXX XXX)",
};
