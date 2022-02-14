import { withRouter } from 'react-router-dom';
import './IssuesDashboard.css';

function IssuesDashboard() {
    const tags = [{name: "bug", color: "red"}, {name: "co-team", color: "yellow"}, {name: "feature/enhancement", color: "blue"}, {name: "question", color: "green"}, {name: "help wanted", color: "green"}, {name: "not labeled", color: "gray"}];
    const tagsArray = tags.map((tag) => {
      return <div className="tag" style={{backgroundColor: tag.color, height: "150px", width: "150px"}}>{tag.name}</div>
    });

    return (
      <div className="dashboard">
        {tagsArray }

      </div>
    );
  }
  
export default withRouter(IssuesDashboard);
