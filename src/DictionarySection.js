import React from "react";
import meanings from "./meanings";
import "./dictionarySection.css";

const meaningsList = meanings;

class DictionarySection extends React.Component {
  constructor(props) {
    super(props);
    // this.meaningSelected = "yooo";
    this.demoMethod = this.demoMethod.bind(this);
  }
  demoMethod(val) {
    this.props.sendData(val);
  }
  render() {
    return (
      <div className="dictionarySection">
        <div className="heading">From Urban Dictionary</div>
        <div className="meaningsDisplay">
          <div className="word">hella</div>
          {meaningsList.map(defObject => {
            return (
              <div>
                {defObject.word.toUpperCase() === "hella".toUpperCase() ? (
                  <div
                    className="meaningBlock"
                    onClick={() => this.demoMethod(defObject.functions)}
                    id={defObject.defid}
                  >
                    {defObject.definition
                      .split("[")
                      .join(" ")
                      .split("]")
                      .join(" ")}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default DictionarySection;
