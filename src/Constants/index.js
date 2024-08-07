import project1 from "../assets/projects/threads.png";
import project2 from "../assets/projects/drive.png";

export const HERO_CONTENT = `
As an INFJ with a passion for web development, I’m dedicated to crafting dynamic and scalable websites. With a solid foundation in the MERN_stack= [MongoDB, Express.js, React.js, Node.js]; I’m excited to apply my skills to real-world projects. As a recent graduate, I’m committed to continuous learning, currently diving into Next.js to further enhance my expertise. I thrive on solving problems and love engaging with the tech community. Explore my projects on GitHub and connect with me on X as I embark on this exciting journey and seek opportunities to grow and contribute in the tech world.`;

export const ABOUT_TEXT = `I’m Avinash Manigam, a passionate Full Stack Web Developer and problem solver with a deep enthusiasm for exploring the tech world and learning new technologies. I specialize in Web Development, utilizing my skills in HTML, CSS, JavaScript, React, Node.js, and more to create dynamic and scalable applications.\nEducation: Bachelor of Computer Applications (BCA) from GITAM University, Visakhapatnam (2020 - 2023) - CGPA: 7.29/10.\nAs a recent graduate, I’m eager to embrace new opportunities and collaborations. Feel free to reach out and connect!`;




export const PROJECTS = [
  {
    title: "Threads",
    image: project1,
    github: "https://github.com/Avinash01-GIT/Thread_Clone",
    link: "https://thread-clone-i33s.onrender.com",
    description:
      "ThreadClone is a versatile discussion platform that replicates the functionality of thread-based discussions, built using a robust Node.js backend and a dynamic React frontend. User Authentication: Implemented secure login and signup processes to manage user access. Thread and Message Management: Enabled users to create, view, and manage threads and messages, facilitating engaging discussions. File Uploads: Utilized Cloudinary for efficient and scalable file handling, supporting various media types. This project combines a seamless user experience with powerful backend capabilities to deliver an engaging discussion platform.",
    technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Cloudinary"],
  },
  {
    title: " Google drive",
    image: project2,
    github: "https://github.com/Avinash01-GIT/driveClone",
    link: "https://drive-clone-nine.vercel.app/",
    description:
      "DriveClone is a modern web application that replicates the core functionalities of Google Drive, built using a cutting-edge stack that includes Vite, React, TailwindCSS, React Icons, Emotion, MUI, and Firebase. This project focuses on delivering a seamless user experience with robust features such as user authentication, file upload, storage, and retrieval. By leveraging Firebase for authentication and storage, DriveClone provides a secure and efficient platform for managing files, while the combination of React, TailwindCSS, and other technologies ensures an intuitive and responsive interface.",
    technologies: ["ReactJs", "Firebase", "More.."],
  },
];

export const CONTACT = {
  phoneNo: "+91-7287873162",
  email: "avinash.m1302@gmail.com",
  address: "Hyderabad Telangana - India",
};
