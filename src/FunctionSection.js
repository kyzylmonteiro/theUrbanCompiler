import React from "react";
import meanings from "./meanings";
import "./functionSection.css";

const meaningsList = meanings;

class FunctionSection extends React.Component {
  render() {
    return (
      <div className="dictionarySection">
        <div className="heading">Functions</div>
        <div className="meaningsDisplay">
          <div className="word">for the selected definition</div>
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
export default FunctionSection;
