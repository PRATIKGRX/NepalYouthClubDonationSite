import person1 from "../assets/img/person1.jpg";
import person2 from "../assets/img/person2.jpeg";
import person3 from "../assets/img/person3.jpeg";
import person4 from "../assets/img/person4.jpeg";
import person5 from "../assets/img/person5.jpeg";

const people = [person1, person2, person3, person4, person5];

const data = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Support for Person ${i + 1}`,
  image: people[i % people.length], // cycle through images
  raised: Math.floor(Math.random() * 250001), // random raised amount between 0 and 250000
  goal: 250000,
  desc: "This is a description of mine.",
  status: Math.random() < 0.3 ? "urgent" : "normal", // 30% chance urgent, 70% normal
}));

export default data;
