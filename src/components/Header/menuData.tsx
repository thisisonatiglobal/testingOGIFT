import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About us",
    path: "/about",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Founder's Mission",
        path: "/founder",
        newTab: false,
      },
      {
        id: 62,
        title: "Founder's Vision",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 63,
        title: "Why OGIFT?",
        path: "/whyogift",
        newTab: false,
      },]
  },
  {
    id: 3,
    title: "Courses",
    // path: "/about",
    newTab: false,
    submenu:[

      {
        id: 31,
        title: "Diploma in Fashion Designing ",
        path: "/diploma-6-month",
        newTab: false,
      },
      {
        id: 32,
        title: "Advance Diploma in Fashion Designing ",
        path: "/advance-diploma",
        newTab: false,
      },
      {
        id: 33,
        title: "Vocational Course in Garment making & Tailoring ",
        path: "/vocational",
        newTab: false,
      },
      {
        id: 34,
        title: " Vocational Embroidery & Craft Course ",
        path: "/vocational_embroidery",
        newTab: false,
      },
      {
        id: 35,
        title: "Advance Vocational Course in Garment making & Tailoring ",
        path: "/advance.vocational",
        newTab: false,
      }
      
    ]
  },
  {
    id: 4,
    title: "Placement",
    path: "/placements",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "Shop our Designs",
    path: "https://www.onati-global.com/",
    newTab: true,
  },
  {
    id: 7,
    title: "Admission",
    path: "/admissions",
    newTab: false,
  },



  
];
export default menuData;
