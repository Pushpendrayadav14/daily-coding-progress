import React from "react";
import { createContext } from "react";
export const userDataContext = createContext();
const userContex = (props) => {
  const user = [
    {
      id: 1,
      userId: 101,
      username: "Aarav Sharma",
      profileImage: "https://i.pravatar.cc/150?img=11",
      postImage: "https://picsum.photos/500/300?random=1",
      caption: "Enjoying the beautiful sunset 🌅",
      likes: 245,
      comments: 18,
    },
    {
      id: 2,
      userId: 102,
      username: "Priya Verma",
      profileImage: "https://i.pravatar.cc/150?img=12",
      postImage: "https://picsum.photos/500/300?random=2",
      caption: "Coffee + Coding ☕💻",
      likes: 310,
      comments: 25,
    },
    {
      id: 3,
      userId: 103,
      username: "Rohan Mehta",
      profileImage: "https://i.pravatar.cc/150?img=13",
      postImage: "https://picsum.photos/500/300?random=3",
      caption: "Morning workout done 💪",
      likes: 190,
      comments: 12,
    },
    {
      id: 4,
      userId: 104,
      username: "Sneha Kapoor",
      profileImage: "https://i.pravatar.cc/150?img=14",
      postImage: "https://picsum.photos/500/300?random=4",
      caption: "Travel diaries ✈️🌍",
      likes: 420,
      comments: 33,
    },
    {
      id: 5,
      userId: 105,
      username: "Aditya Singh",
      profileImage: "https://i.pravatar.cc/150?img=15",
      postImage: "https://picsum.photos/500/300?random=5",
      caption: "Late night debugging 😅",
      likes: 275,
      comments: 21,
    },
  ];
  return (
    <userDataContext.Provider value={user}>
      {props.children}
    </userDataContext.Provider>
  );
};

export default userContex;
