const people = [
  {
    fullname: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    profession: "Web Developer",
    description: "A creative web developer specializing in modern JavaScript frameworks.",
    tags: ["JavaScript", "React", "CSS"]
  },
  {
    fullname: "Maria Smith",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    profession: "UI/UX Designer",
    description: "Designs clean and user-friendly interfaces with a focus on user experience.",
    tags: ["Figma", "UI Design", "UX Research"]
  },
  {
    fullname: "Daniel Lee",
    image: "https://images.unsplash.com/photo-1752170080622-18196de87763?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    profession: "Backend Developer",
    description: "Builds scalable server-side applications and APIs.",
    tags: ["Node.js", "Express", "MongoDB"]
  },
  {
    fullname: "Sophia Brown",
    image: "https://plus.unsplash.com/premium_photo-1688822011902-55a31e5a17a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    profession: "Mobile App Developer",
    description: "Creates high-performance mobile applications for Android and iOS.",
    tags: ["Flutter", "Dart", "Firebase"]
  },
  {
    fullname: "James Wilson",
    image: "https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.webp?a=1&b=1&s=612x612&w=0&k=20&c=774fm_pppNJj-S1mSrArKVe08CLr4C1S2wZaImayyng=",
    profession: "Data Analyst",
    description: "Analyzes data to help businesses make data-driven decisions.",
    tags: ["Python", "SQL", "Data Visualization"]
  }
];

let sum='';
people.forEach(function(elm){

  sum = sum +`<div id="card">
        <img src="${elm.image}" alt="123">
        <h1>${elm.fullname}</h1>
        <h3>${elm.profession}</h3>
        <p>${elm.description}</p>
        
    </div>`;

});

let main=document.querySelector('main');
main.innerHTML=sum;
