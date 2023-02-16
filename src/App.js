import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Markdown from "marked-react";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

export default function App() {
  const [width, setWidth] = useState(50);
  const [isInside, setIsInside] = useState(false);
  const [docName, setDocName] = useState("Untitled.md");

  const handleChangeWidth = () => {
    if (width === 50) {
      setWidth(25);
    } else {
      setWidth(50);
    }
  };

  const defaultState = `
# Life isn't that complicated 
## Unless you want it to be 
Which in that case, [try this](https://www.google.com/search?q=what%27s+wrong+with+me)

Sometimes in life you have to be **bold**
Or a bit *unique*
and thats okay.
\`\<p>Most important thing is to keep learning</p>\`\

\`\`\`\`
const learning = (information) => {
  let brain = []
  brain.push(information)
  console.log('Voilà')
}
\`\`\`\`

> Block Quotes!
1. Numbered List
* Bulleted List


Made possible by React ![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`;

  const [text, setText] = useState(defaultState.trim());

  return (
    <div className="App container-fluid d-flex justify-content-center align-items-center flex-column">
      <div className="header">
        <div style={{fontSize: '12px'}}>DOCUMENT NAME</div>
        <input type='text' value={docName} onChange={(e) => setDocName(e.target.value)} />
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "95%", height: "38em" }}
      >
        <div
          onClick={handleChangeWidth}
          style={{
            backgroundColor: "pink",
            width: "1em",
            height: "100%",
            borderRadius: "2px",
          }}
        ></div>
        <div
          style={{ borderRadius: "3px" }}
          className={`w-${width} h-100 mx-2 overflow-auto position-relative position-relative`}
        >
          <textarea
            id="editor"
            value={text}
            style={{ fontSize: "14px" }}
            className={`w-100 h-100 mx-2 p-3 overflow-auto position-relative`}
            onChange={(e) => setText(e.target.value)}
            onMouseOver={() => setIsInside(true)}
            onMouseLeave={() => setIsInside(false)}
          />
          {isInside && text.length > 0 && (
            <MdOutlineDelete
              onMouseOver={() => setIsInside(true)}
              onClick={() => setText("")}
              id="delete"
              style={{ color: "grey", display: "block" }}
            />
          )}
        </div>
        <div
          id="preview"
          className="h-100 w-50 mx-2 p-3 text-white overflow-auto"
          style={{ backgroundColor: "#212121" }}
        >
          <Markdown breaks={true}>{text}</Markdown>
        </div>
      </div>
    </div>
  );
}
