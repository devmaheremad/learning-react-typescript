import { PureComponent, ReactNode } from "react";

interface Props {
  msg: string;
}
interface State {
  count: number;
}

class TestPropsState extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render(): ReactNode {
    return (
      <>
        <h3>{this.state.count}</h3>
        <h3>{this.props.msg}</h3>
      </>
    );
  }
}

export default TestPropsState;
