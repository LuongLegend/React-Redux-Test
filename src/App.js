import "./App.css";
import { connect } from "react-redux";

import { useEffect, useState } from "react"; //

import { getList, generateNewList } from "./actions/index";

const listExample = ["goku", "bulma", "krillin", "yamcha", "broly"];

function App({ list, onGetList, onGenerateNewList }) {//props co dinh
  //state thay doi. a = 1 -> a =2 a=3; react -> setA(2) ->a =2 -> cay DOM -> cap nhat
  
  const [a, setA] = useState(() => list);
  
  useEffect(() => { //lay du lieu ra. []
    onGetList(listExample); //update Store
    //khi lay duoc danh sach dia chi -> setA
  }, [onGetList]);

  const handleCheckBoxClick = (e) => {
    const checkedBox = e.target.checked;

    if (checkedBox) {
      onGenerateNewList(["goku", "bulma", "krillin", "yamcha"]);
    } else {
      onGetList(listExample);
    }
  };

  const handleClickP = (aItem) => {
    const aChange = list.filter(i => i !== aItem); //goku
    setA(aChange)
  }
  return (
    <div className="App">
      <h1>React Redux</h1>
      <input type="checkbox" onClick={handleCheckBoxClick} />

      {
        list.map(i => <p key={i} onClick={() => handleClickP(i)}>{i}</p>)
      }
        <input type="checkbox" onClick={() => handleClickP('goku')} />
        <input type="checkbox" onClick={handleClickP} />
        <input type="checkbox" onClick={handleClickP} />
      {a.toString()}
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
