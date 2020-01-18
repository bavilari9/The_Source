export const queryString =(string)=>{
    string = Object.values(string)
    let queryString=[];
    string.forEach(element => {
      if(element !== undefined){  
        if(typeof element== 'string'){
          if(element !==''){
            queryString = [element.replace(/^\w/, c => c.toUpperCase()),...queryString]
          }
         }else if(typeof element == 'object'){
            if(element.min !== '' || element.max !== ''){
              queryString=[...queryString,`Age ( ${element.min}-${element.max} )`]
            } 
         }
      }
    });
      return  queryString.length ?  queryString.join(' / ', '')  : 'All';
  }