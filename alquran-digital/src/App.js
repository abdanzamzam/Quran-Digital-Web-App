import React from "react";
import AyatCard from "./components/AyatCard";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quran: [],
    }
  }

  fetchData = () => {
    fetch("https://api.npoint.io/99c279bb173a6e28359c/data")
      .then((res) => res.json())
      .then((quran) => {
        this.setState({
          quran: quran,
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.quran.map((q, index) => (
          <AyatCard title={q} key={index} />
        ))}
      </div>
    );
  }
}

export default App