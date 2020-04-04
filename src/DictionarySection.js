import React from "react";
import meanings from "./meanings";
import "./dictionarySection.css";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const meaningsList = meanings;

class DictionarySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { word: "" };
    // this.meaningSelected = "yooo";
    this.demoMethod = this.demoMethod.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    // setWord(event.target.value);
    this.setState({ word: event.target.value });
  };
  demoMethod(val) {
    this.props.sendData(val);
  }
  render() {
    return (
      <div className="dictionarySection">
        <div className="heading">
          <FormControl className="formControl">
            <InputLabel id="demo-simple-select-helper-label">
              Choose Slang
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={this.state.word}
              onChange={this.handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Hella"}>Hella</MenuItem>
              <MenuItem value={"Lit"}>Lit</MenuItem>
              <MenuItem disabled value={""}>
                More Coming up
              </MenuItem>
            </Select>
            <FormHelperText>
              All definitions from urban Dictionary
            </FormHelperText>
          </FormControl>
        </div>

        <div className="meaningsDisplay">
          {meaningsList.map(defObject => {
            return (
              <div key={defObject.defid}>
                {defObject.word.toUpperCase() ===
                this.state.word.toUpperCase() ? (
                  <div className="meaningBlock" id={defObject.defid}>
                    {defObject.definition
                      .split("[")
                      .join(" ")
                      .split("]")
                      .join(" ")}
                    <Button
                      disableElevation
                      variant="contained"
                      color="primary"
                      onClick={() => this.demoMethod(defObject.functions)}
                      style={{ float: "right", margin: "10px" }}
                    >
                      Select
                    </Button>
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
