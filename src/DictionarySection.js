import React from "react";
import meanings from "./meanings";
import "./dictionarySection.css";

const meaningsList = meanings;

class DictionarySection extends React.Component {
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
                  <div className="meaningBlock" id={defObject.defid}>
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
