import React from "react";
import SearchBoxSurah from "./SearchBoxSurah";

class Header extends React.Component {
     render() {
          return (
               <div className="w-full my-3 flex justify-center">
                    <div className="w-2/3 border-2 rounded-lg p-4">
                         <p>APLIKASI AL-QURAN DIGITAL</p>
                         <hr />
                         <SearchBoxSurah />
                    </div>
               </div>
          );
     }
}

export default Header;