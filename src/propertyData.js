// propertyData.js
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import img7 from "./assets/7.png";
import img8 from "./assets/8.png";
import img9 from "./assets/9.png";
import img10 from "./assets/10.png";
import img11 from "./assets/11.png";
import img12 from "./assets/12.png";
import img13 from "./assets/13.png";
import img14 from "./assets/14.png";
import img15 from "./assets/15.png";
import img16 from "./assets/16.png";
import img17 from "./assets/17.png";
import img18 from "./assets/18.png";
import img19 from "./assets/19.png";
// import img20 from "./assets/20.png";
import img21 from "./assets/21.png";
import img22 from "./assets/22.png";
import img23 from "./assets/23.png";
import img24 from "./assets/24.png";
import img25 from "./assets/25.png";
import img26 from "./assets/26.png";
import img27 from "./assets/27.png";
import img28 from "./assets/28.png";
import img29 from "./assets/29.png";
import img30 from "./assets/30.png";










const propertyData = [
  {
    title: "ACE HANEI",
    location: "Sector 12, Greater Noida West",
    
    img: img1,
  },
  {
    title: "MAHAGUN 2.0",
    location: "Sector 12, Greater Noida West",
    
    img: img2,
  },

  {
    title: "ELDECO LA VIDA BELA",
    location: "Sector 12, Greater Noida West",
    img: img3,
  },
  { title: "BROOK & RIVULET", location: "Sector 12, Greater Noida West", img: img4 }, 
  { title: "SPRING ELMAS", location: "Sector 12, Greater Noida West" , img: img5 },
  { title: "VVIP", location: "Sector 12, Greater Noida West" , img: img7 },
  { title: "CIVITECH STRINGS", location: "Sector 12, Greater Noida West" , img: img6 },
  { title: "IRISH PLATINUM", location: "Sector 10" , img: img8 },
  { title: "ARIHANT ADOBE", location: "Sector 10" , img: img9 },
  { title: "CRC JOYOUS", location: "Sector Techzone 4" , img: img10 },
  { title: "PANCHSHEEL GREENS 2", location: "Sector 16B" , img: img12 },
  { title: "R.G. LUXURY", location: "Sector 16B" , img: img14 },
  { title: "ELITE X", location: "Sector 10" , img: img15 },
  { title: "FRENCH APARTMENT", location: "Sector 16B" , img: img16 },
  { title: "FUSION HOMES", location: "Sector Techzone 4" , img: img11 },
  { title: "PANCHSHEEL GREENS", location: "Sector 16B" , img: img13 },
  { title: "NIRALE ASPIRE", location: "Sector 16B" , img: img17 },
  { title: "ACE CITY", location: "Sector 1" , img: img18 },
  { title: "ROYAL COURT", location: "Sector 16B" , img: img19},
  { title: "CHERRY COUNTY", location: "Sector 16 Techzone 4" , img: img21 },
  { title: "S.K.A GREEN ARCH", location: "Sector 16B" , img: img22 },
  { title: "S.K.A DIVYA", location: "Sector 16B" , img: img23 },
  { title: "AMRAPALI LEISURE PARK", location: "Techzone 4" , img: img24 },
  { title: "AMRAPALI RIVER VIEW", location: "Techzone 4" , img: img25 },
  { title: "AMRAPALI GOLF HOMES", location: "Sector 4" , img: img26 },
  { title: "AMRAPALI CENTURIYAN PARK O2 VALLEY", location: "Techzone 4" , img: img27 },
  { title: "AMRAPALI CENTURIYAN PARK LOW RISE", location: "Techzone 4" , img: img28 },
  {
    title: "AMRAPALI CENTURIYAN PARK TERRACE HOMES",
    location: "Techzone 4",  img: img29
  },
  { title: "AMRAPALI DREAM VALLEY", location: "Techzone 4" , img: img30 },
];

if (!Array.isArray(propertyData) || propertyData.length === 0) {
  throw new Error("No data found for the propertyData array.");
}

export default propertyData;
