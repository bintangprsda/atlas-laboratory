// tubeColor.js

export const getTubeColorClass = (tubeCode) => {
    switch (tubeCode) {
      case '30':
        return 'bg-purple-500'; 
      case '10':
        return 'bg-rose-500'; 
      case '11':
        return 'bg-yellow-500';
      case '40':
        return 'bg-blue-500';  
      case '45':
        return 'bg-blue-500';
      // Add more cases for other tube codes if needed
      default:
        return 'bg-gray-500'; 
    }
  };
  