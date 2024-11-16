// propertyData.js
const propertyData = [
    { 
      title: "House", 
      location: "31 Pent Area, New Delhi", 
      rooms: 4, 
      baths: 3, 
      area: "900 m²", 
      label: "House", 
      price: "$750,000", 
      extraImages: "+8" 
    },
    { 
      title: "Villa", 
      location: "31 Pent Area, New Delhi", 
      rooms: 8, 
      baths: 8, 
      area: "1,800 m²", 
      label: "Villa", 
      price: "$2,900,000", 
      extraImages: "+2" 
    },
    { 
      title: "House", 
      location: "31 Pent Area, New Delhi", 
      rooms: 4, 
      baths: 3, 
      area: "550 m²", 
      label: "House", 
      price: "$520,000", 
      extraImages: "+5" 
    },
    { 
      title: "House", 
      location: "31 Pent Area, New Delhi", 
      rooms: 5, 
      baths: 4, 
      area: "520 m²", 
      label: "House", 
      price: "$638,800", 
      extraImages: "+8" 
    },
    
    { 
      title: "House", 
      location: "31 Pent Area, New Delhi", 
      rooms: 4, 
      baths: 3, 
      area: "900 m²", 
      label: "House", 
      price: "$750,000", 
      extraImages: "+8" 
    },
    { 
      title: "Villa", 
      location: "31 Pent Area, New Delhi", 
      rooms: 8, 
      baths: 8, 
      area: "1,800 m²", 
      label: "Villa", 
      price: "$2,900,000", 
      extraImages: "+2" 
    },
    { 
      title: "House", 
      location: "31 Pent Area, New Delhi", 
      rooms: 4, 
      baths: 3, 
      area: "550 m²", 
      label: "House", 
      price: "$520,000", 
      extraImages: "+5" 
    },
    { 
      title: "House", 
      location: "31 Pent Area, New Delhi", 
      rooms: 5, 
      baths: 4, 
      area: "520 m²", 
      label: "House", 
      price: "$638,800", 
      extraImages: "+8" ,
    }
  ];
  
  if (!Array.isArray(propertyData) || propertyData.length === 0) {
    throw new Error("No data found for the propertyData array.");
  }
  
  export default propertyData;
  


