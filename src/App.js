import "./App.css";
import { connect } from "react-redux";

import { useEffect } from "react";

import { getList, generateNewList } from "./actions/index";

const listExample = ["goku", "bulma", "krillin", "yamcha", "broly"];

function App({ list, onGetList, onGenerateNewList }) {
  useEffect(() => {
    onGetList(listExample);
  }, [onGetList]);

  const handleCheckBoxClick = (e) => {
    const checkedBox = e.target.checked;

    if (checkedBox) {
      onGenerateNewList(["goku", "bulma", "krillin", "yamcha"]);
    } else {
      onGetList(listExample);
    }
  };
  return (
    <div className="App">
      <h1>React Redux</h1>
      <input type="checkbox" onClick={handleCheckBoxClick} />

      {
        list.map(i => <p key={i}>{i}</p>)
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  const { list } = state;
  return { list };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetList: (list) => dispatch(getList(list)),
    onGenerateNewList: (newList) => dispatch(generateNewList(newList)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
