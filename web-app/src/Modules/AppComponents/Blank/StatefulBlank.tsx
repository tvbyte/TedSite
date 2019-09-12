import React from 'react';

interface IProps{}
interface IState{
    x:number;
}

class STATEFUL extends React.Component<IProps,IState> {
    constructor(props:IProps) {
        super(props);
        this.state ={
            x:2
        }
      }
    render() {
      return (
        <div>
          Got Me Some State
        </div>
      );
    }
  }

export default STATEFUL;