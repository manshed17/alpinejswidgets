function transportFee (price){
    switch (price.trim()) {
      case "morning":
        return "R20";
        break;
      case 'afternoon':
        return "R10";
        break;
      case 'nightshift':
        return 'free';
        break;
      default:
        return"shift can either be morning, afternoon or nightshift"  
    } 
   }