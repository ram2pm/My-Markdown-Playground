import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Markdown from "marked-react";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

export default function App() {
  const [isInside, setIsInside] = useState(false);
  const [docName, setDocName] = useState("Untitled.md");

  const defaultState = `
# Life isn't that complicated 
### Unless you want it to be 
Which in that case, [try this](https://www.google.com/search?q=what%27s+wrong+with+me)

Sometimes in life you have to be **bold**
Or a bit *unique*
\`\<p>Most important thing is to keep learning</p>\`\

\`\`\`\`
const learning = (information) => {
  let brain = []
  brain.push(information)
  console.log('Voilà')
}
\`\`\`\`

Organise your thoughts with a list:
1. Numbered
* Bulleted

And maybe one day you'll end up in a block quote:
> Visualise it into fruition


Made possible by React ![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`;

  const [text, setText] = useState(defaultState.trim());

  return (
    <div id="appContainer">
      <div className="header">
        <div style={{ fontSize: "12px" }}>DOCUMENT NAME</div>
        <input
          type="text"
          value={docName}
          onChange={(e) => setDocName(e.target.value)}
        />
      </div>
      <div id="decor"></div>

      <div id="container">
        <div id="preview" style={{ backgroundColor: "#212121" }}>
          <Markdown breaks={true}>{text}</Markdown>
        </div>
        <div id="editorContainer" style={{ borderRadius: "3px" }}>
          <textarea
            id="editor"
            value={text}
            style={{ fontSize: "14px" }}
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
      </div>
    </div>
  );
}
