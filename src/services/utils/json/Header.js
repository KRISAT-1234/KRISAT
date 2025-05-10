const HeaderData = () => {
  const mainNav = {
    "About Us": [
      "History",
      "About KRISAT",
      "Misson & Vision",
      "Board Members",
      "Governing Council",
      "From Principal Desk",
    ],
    Farming: [
      "Animal Husbandry",
      "Organic Field",
      "Wet Land",
      "Orchard",
      "Garden Land",
      "Dry Land",
      "IFS",
    ],
    Academics: [
      "Courses Offered",
      "Faculty",
      "College Library",
      // "Academic Calendar", "Class Timetable", "Instructional Exam"
    ],
    "Academic Activities": [
      "NSS Programs",
      "Crop Production",
      "Short Tour",
      "Outdoor Visit",
      "Field Classes",
      "All India Study Tour",
    ],
    "Life @ KRISAT": [
      "Hostel",
      "Culturals",
      "Sports Activities",
      // "Grievance",
      //   "Infrastructure",
    ],
    Facilities: [
      "College View",
      "Insfrastructure",
      "Laboratory",
      "Observatory",
      "MI room",
      "Smart Class",
      "Exam Hall",
      "Cafeteria",
      "Gym",
      "Mess",
    ],
    Nursery: [
      "Indoor Planting",
      "Outdoor Planting",
      "Crotons",
      "Flower Plants",
      "Hanging & Creeper",
    ],
    // "Rules & Regulations": ["Academic Rules", "College Rules", "Hostel Rules"],
  };

  const navItems = [
    { label: "Home", route: "/" },
    { label: "About", route: "/AboutUs/1" },
    { label: "Courses", route: "/Academics/0" },
  ];

  return {
    mainNav,
    navItems,
  };
};

export default HeaderData;
