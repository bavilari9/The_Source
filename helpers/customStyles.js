export const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? '#ff4848' : "#eef0f2",
      // match with the menu
      borderRadius: 0,
      // Overwrittes the different states of border
      borderColor:  "none",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      background:"#eef0f2",
      marginTop:-10,
      
    
      border: "solid 2px #0d1b1e",
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "none" : "none"
      }
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
      hyphens: "auto",
      // kill the gap
      marginTop: 0,
      textAlign: "left",
      // prevent menu to scroll y
      wordWrap: "break-word",

    }), placeholder: (base) => ({
      ...base,
        color: '#0d1b1e',
      }),
    menuList: (base,state) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
      background:"#eef0f2",
      backgroundColor:state.isSelected ? 'none' : 'none',
      marginTop:-20,
      border: "solid 2px #0d1b1e",

    }),
    option: (base, state) => ({
           ...base,
           backgroundColor:state.isSelected ? 'none' : 'none',
           color: state.isSelected ? '#ff4848' : '#0d1b1e',
           "&:hover": {
            // Overwrittes the different states of border
            color:'#ff4848',
            cursor:'pointer'
            
          }
    })
  };