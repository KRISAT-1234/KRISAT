const useRandomDateGenerator = () => {
  function randomDate() {
    const start = new Date(2012, 0, 1);
    const end = new Date();
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  function getRandomCollegeEvent() {
    const events = [
      "Culturals",
      "Graduation",
      "Sports Fest",
      "Tech Symposium",
      "Freshers' Orientation",
      "Alumni Meet",
      "Convocation",
      "Annual Day",
      "Music Fest",
      "Drama Night",
      "Guest Lecture",
      "Workshop",
      "Hackathon",
      "Science Exhibition",
      "Career Fair",
      "College Fest",
      "Debate Competition",
      "Art Exhibition",
      "Blood Donation Camp",
      "Community Outreach",
    ];

    // Pick a random event from the list
    const randomIndex = Math.floor(Math.random() * events.length);
    return events[randomIndex];
  }

  return {
    randomDate,
    getRandomCollegeEvent,
  };
};

export default useRandomDateGenerator;
