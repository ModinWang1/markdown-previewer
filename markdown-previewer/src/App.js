import Preview from './Preview';
import Text  from './Text';
import {useState} from "react";
import './App.css';


function App() {
  const [text, setText] = useState("# Welcome to my React Markdown Previewer! \n ## This is a sub-heading...\n### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n}\n}\n```\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\nAnd if you want to get really crazy, even tables:\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n- And of course there are lists.\n- Some are bulleted.\n- With different indentation levels.\n- That look like this.\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)");

  const handleChange = function(value) {
    setText(value);
  }




  return (
    <div className="App">
      <p className='title'>Markdown Previewer</p>
      <div className='body'>
        <Text handleChange={handleChange} value={text}/>
        <Preview value={text} />
      </div>
      <p style={{fontFamily: "Century Gothic", textAlign: 'center', padding: "25px"}}>By Modin</p>
    </div>
  );
}

export default App;
