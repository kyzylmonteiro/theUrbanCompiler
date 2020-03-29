import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-processing";
import "./codeEditorStyles.css";

const code = `rect(100,100,20,100);
`;
class CodingEditor extends React.Component {
  state = { code };
  render() {
    return (
      <Editor
        className="editor"
        value={this.state.code}
        onValueChange={code => this.setState({ code })}
        highlight={code => highlight(code, languages.processing)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          //   height: "100%",
          //   minHeight: "80%",
          maxHeight: "100%"
        }}
      />
    );
  }
}
export default CodingEditor;
