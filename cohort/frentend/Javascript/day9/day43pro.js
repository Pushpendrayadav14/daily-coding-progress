const iplTeams = [ {
    teamImg:"https://img.jagranjosh.com/images/2022/March/2632022/CSK_player_list_2022_stats_past_records.jpg",
    captianImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGiePTB8FMahuRGiory1zdt3PQJItucmbBQ&s",
    teamName: "Chennai Super Kings",
    shortName:"CSK",
    captainName: "Ruturaj Gaikwad",
    city: "Chennai, Tamil Nadu",
    homeGround: "M. A. Chidambaram Stadium",
    owner: "Chennai Super Kings Cricket Ltd",
    founded: 2008,
    iplTitles: 5
  },
 {
    teamImg:"https://media.assettype.com/nationalherald%2F2017-05%2F58323955-7554-47cb-a829-4d2093e88c58%2Fipl-finals-mumbai-romp-home-with-the-trophy-final-ball-rohit-sharma-rising-pune-supergiants.jpg?rect=17%2C0%2C928%2C522&auto=format%2Ccompress&fmt=webp&w=400&dpr=2.6",
    captianImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kwOoKRJRp8L0owbiynU_k76hwoNdRUvukA&s",
    teamName: "Mumbai Indians",
    shortName:"MI",
    captainName: "Hardik Pandya",
    city: "Mumbai, Maharashtra",
    homeGround: "Wankhede Stadium",
    owner: "Reliance Industries",
    founded: 2008,
    iplTitles: 5
  },
{
    teamImg:"https://images.performgroup.com/di/library/omnisport/9a/ed/kohli_xhs7tt022r0i1tyb8rahcaa69.jpg?t=998608647",
    captianImg:"https://crickettimes.com/wp-content/uploads/2022/03/Faf-du-Plessis-to-lead-RCB-in-IPl-2022.jpg",
    teamName: "Royal Challengers Bengaluru",
    shortName:"RCB",
    captainName: "Faf du Plessis",
    city: "Bengaluru, Karnataka",
    homeGround: "M. Chinnaswamy Stadium",
    owner: "United Spirits",
    founded: 2008,
    iplTitles: 0
  },

  {
    teamImg:"https://images.mykhel.com/img/2024/05/kkr-champions1-1716751483.jpg",
    captianImg:"https://images.news18.com/ibnlive/uploads/2024/04/bcci-punishes-shreyas-iyer-for-breaching-ipl-code-of-conduct-2024-04-7693d88aaebd4895680ebf7f9bf9581c.jpg",
    teamName: "Kolkata Knight Riders",
    shortName:"KKR",
    captainName: "Shreyas Iyer",
    city: "Kolkata, West Bengal",
    homeGround: "Eden Gardens",
    owner: "Red Chillies Entertainment",
    founded: 2008,
    iplTitles: 2
  },

  {
    teamImg:"https://s2.dmcdn.net/v/FmFY11ZfIJhVmrY-z/x1080",
    captianImg:"https://english.varthabharati.in/storage/uploads/sports/PatCumminsPCIPL_vb_12.jpeg",
    teamName: "Sunrisers Hyderabad",
    shortName:"SRH",
    captainName: "Pat Cummins",
    city: "Hyderabad, Telangana",
    homeGround: "Rajiv Gandhi International Stadium",
    owner: "Sun TV Network",
    founded: 2012,
    iplTitles: 1
  },

  {
    teamImg:"https://english.cdn.zeenews.com/sites/default/files/2022/02/15/1014773-capitalsquadipl.jpg",
    captianImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNHlwaD263deH5RQfjH7j9BhWptX_v4kmPw&s",
    teamName: "Delhi Capitals",
    shortName:"DC",
    captainName: "Rishabh Pant",
    city: "Delhi",
    homeGround: "Arun Jaitley Stadium",
    owner: "JSW Group & GMR Group",
    founded: 2008,
    iplTitles: 0
  },

  {
    teamImg:"https://cricketaddictor.com/wp-content/uploads/2021/05/Rajasthan-Royals-8.jpg?q=80",
    captianImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSufc7a-BATw-2SJ5tptg8IIcfDcy0pBDQwew&s",
    teamName: "Rajasthan Royals",
    shortName:"RR",
    captainName: "Sanju Samson",
    city: "Jaipur, Rajasthan",
    homeGround: "Sawai Mansingh Stadium",
    owner: "Royal Multisport",
    founded: 2008,
    iplTitles: 1
  },
  {
    teamImg:"https://crickettimes.com/wp-content/uploads/2023/12/Complete-squad-of-PBKS-for-IPL-2024.webp",
    captianImg:"https://documents.iplt20.com/ipl/IPLHeadshot2024/11.png",
    teamName: "Punjab Kings",
    shortName:"PBKS",
    captainName: "Shikhar Dhawan",
    city: "Mohali, Punjab",
    homeGround: "IS Bindra Stadium",
    owner: "KPH Dream Cricket Pvt Ltd",
    founded: 2008,
    iplTitles: 0
  },

  {
    teamImg:"https://images.indianexpress.com/2022/05/GT-trophy.jpg",
    captianImg:"https://assets.thehansindia.com/h-upload/2024/03/27/1434140-untitled-design-8.webp",
    teamName: "Gujarat Titans",
    shortName:"GT",
    captainName: "Shubman Gill",
    city: "Ahmedabad, Gujarat",
    homeGround: "Narendra Modi Stadium",
    owner: "CVC Capital Partners",
    founded: 2022,
    iplTitles: 1
  },
   {
    teamImg:"https://worldcrics.com/wp-content/uploads/2025/03/LSG.jpeg",
    captianImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxADbs1muSlFmqA-DmlJv29qDdpH9vwDbUSA&s",
    teamName: "Lucknow Super Giants",
    captainName: "KL Rahul",
    shortName:"LSG",
    city: "Lucknow, Uttar Pradesh",
    homeGround: "BRSABV Ekana Stadium",
    owner: "RPSG Group",
    founded: 2022,
    iplTitles: 0
  }
];

let head=document.querySelector('h1');
let main=document.querySelector('main');
let innerImg=document.querySelector('#cptimg');
let btn=document.querySelector('button');

let shortName=document.querySelector('#team');
let captian=document.querySelector('#captian');
let city=document.querySelector('#city');
let owner=document.querySelector('#owner');
let founded=document.querySelector('#founded');
let iplTitles=document.querySelector('#iplTitles');

btn.addEventListener("click",function(){
    let team=iplTeams[Math.floor(Math.random()*iplTeams.length)];
    head.innerHTML=team.teamName;
    shortName.innerHTML=`Team: ${team.shortName}`;
    captian.innerHTML=`Captian: ${team.captainName}`;
    city.innerHTML=`City: ${team.city}`;
    owner.innerHTML=`Owner: ${team.owner}`;
    founded.innerHTML=`Founded: ${team.founded}`;
    iplTitles.innerHTML=`Winnig: ${team.iplTitles}`;

    main.style.backgroundImage=`url(${team.teamImg})`;
    innerImg.src=team.captianImg;


});

