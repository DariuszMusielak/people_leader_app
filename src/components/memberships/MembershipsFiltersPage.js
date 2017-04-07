import React from 'react';
import {connect} from 'react-redux';
import { toggleProject } from '../../actions/projectActions';
import { Row, Col } from 'reactstrap';

const MembershipsFiltersPage = ({ projects, toggleProject }) => (
  <Row>
    <hr/>
    <Col xs="12" md="2">
      <h3>Filters</h3>
    </Col>
    <Col xs="12" md="10">
      <ul className="list-inline">
        {
          projects.map(project => {
            return (
              <li key={project.name} className='list__element--maring'>

                <input
                  id={project.name}
                  className="checkbox-custom"
                  name="checkbox"
                  type="checkbox"
                  checked={project.visible}
                  onChange={() => toggleProject(project)}
                />
                <label htmlFor={project.name} className="checkbox-custom-label">
                  {project.name}
                </label>
              </li>
            )
          })
        }
      </ul>
    </Col>
    <hr/>
  </Row>
)

export default connect(
  state => ({
    projects: state.projects,
  }),
  { toggleProject },
)(MembershipsFiltersPage);
