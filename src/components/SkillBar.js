import React, {Component} from 'react';
import TimelineItem from './TimelineItem';

export default class SkillBar extends Component {

  render() {
    var bgClass = this.GetBackgroundClass();
    return (
      <div className="progress">
        <div className={"progress-bar " + bgClass} style={{flex: this.props.value}}>
          <span>{this.props.text}</span>
        </div>
      </div>
    );
  }

  GetBackgroundClass()
  {
    debugger;
    if(this.props.value >= 0.7)
    {
      return "bg-success";
    }
    else if(this.props.value >= 0.4)
    {
      return "bg-warning";
    }
    else return "bg-danger";
  }
}
