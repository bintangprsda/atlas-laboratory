// tubeColor.js

export const getTubeColorClass = (tubeCode) => {
    switch (tubeCode) {
      case '30':
        return 'bg-purple-500'; 
      case '10':
        return 'bg-red-500'; 
      case '11':
        return 'bg-red-500';
      case '11':
        return 'bg-red-500';  
      // Add more cases for other tube codes if needed
      default:
        return 'bg-gray-500'; 
    }
  };
  