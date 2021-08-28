import React from "react";

class SearchBoxSurah extends React.Component {
     render() {
          return (
               <div className="border-2">
                    form
                    <select>
                         <option value="mekah">Makiyah</option>
                         <option value="madinah">Madaniyah</option>
                    </select>
               </div>
          );
     }
}

export default SearchBoxSurah;