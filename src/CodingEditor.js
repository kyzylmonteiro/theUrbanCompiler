import React from "react";
import Prism from "prismjs";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-processing";
import Fab from "@material-ui/core/Fab";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "./codeEditorStyles.css";

class CodingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { code: this.props.code };
    this.demoMethod = this.demoMethod.bind(this);
  }
  demoMethod() {
    this.props.sendCode(this.state.code);
  }
  componentDidUpdate(prevProps) {
    if (this.props.userID !== prevProps.userID) {
      this.setState(
        props => ({ code: props.code }),
        () => (this.refs.myRef = this.state.code)
      );
    }
  }
  componentDidMount() {
    Prism.highlightAll();
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.code === this.state.code && nextProps.f === this.state.f) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  render() {
    // if (this.state.f !== "") {
    //   alert("here");
    //   this.setState({
    //     code: this.refs.myRef + " " + this.props.f,
    //     f: ""
    //   });
    // } else {
    //   // alert("updaaaated", this.props.code, this.props.f);
    // }

    return (
      <div className="codeEditor">
        {/* {alert(this.state.code + "snap")} */}
        {this.props.fs.length >= 1 ? (
          <div>
            {this.props.fs.map(f => {
              return (
                <div highlight={code => highlight(code, languages.processing)}>
                  <Editor
                    className="editor"
                    value={f}
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
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
        <Editor
          ref={this.myRef}
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
        <div className="playButton">
          <Fab
            color="primary"
            size="small"
            aria-label="add"
            onClick={this.demoMethod}
          >
            <PlayArrowIcon />
          </Fab>
        </div>
      </div>
    );
  }
}
export default CodingEditor;
