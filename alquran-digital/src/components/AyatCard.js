import React from "react";
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link
} from "react-router-dom";

class AyatCard extends React.Component {
     render() {
          console.log(this.props.title);
          return (
               <div className="w-full my-3 flex justify-center">
                    <div className="w-2/3 border-2 rounded-lg p-4">
                         <Router>
                              <Link to="https://api.npoint.io/99c279bb173a6e28359c/surat/1">
                                   <p>Surah: {this.props.title.nama}/ {this.props.title.asma}/ {this.props.title.arti}</p>
                              </Link>
                         </Router>
                         <p>Kategori: {this.props.title.type}</p>
                         <p>Ayat: 1 - {this.props.title.ayat}</p>
                         <audio className="h-10 mt-2 w-full" src={this.props.title.audio} controls />
                    </div>
               </div >
          );
     }
}

export default AyatCard