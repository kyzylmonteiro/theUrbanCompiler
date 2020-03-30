import React from "react";
import Sketch from "react-p5";

class Output extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  x = 50;
  y = 50;

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(200, 200).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
  draw = p5 => {
    p5.clear();
    this.props.fs.length >= 2
      ? eval(this.props.fs.join("\n"))
      : eval(this.props.code);
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
export default Output;
