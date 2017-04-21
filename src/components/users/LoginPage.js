import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, FormText, Alert } from 'reactstrap';
import TextInput from '../common/TextInput';
import { signIn } from '../../actions/authActions';
import {
  onEmailChange,
  onApiTokenChange,
} from '../../actions/loginFormActions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alertVisible: true
    };
  }

  onDismiss = () => {
    this.setState({ alertVisible: false });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ alertVisible: true });
    const { signIn, email, apiToken } = this.props;
    signIn(email, apiToken)
  }

  render = () => {
    const {
      onEmailChange,
      onApiTokenChange,
      email,
      apiToken,
      isValid,
      isSubmitting,
      isSubmitted,
      history
    } = this.props;
    const account_settings_href = "https://people.devguru.co/account_settings";

    if(isSubmitted && isValid) { history.push("/") }

    return (
      <div>

        <Row>
          <Col xs={{ size: 4, push: 4, pull: 4 }}>
            <h2> Sign in </h2>
            <hr/>
          </Col>
        </Row>

        <form onSubmit={this.onSubmit}>
          {(!isValid) && (
            <Row>
              <Col xs={{ size: 4, push: 4, pull: 4 }}>
                <Alert color="danger" toggle={this.onDismiss} isOpen={this.state.alertVisible}>
                  Data is not vlaid
                </Alert>
              </Col>
            </Row>
          )}

          <Row>
            <Col xs={{ size: 4, push: 4, pull: 4 }}>
              <TextInput
                name='email'
                type='email'
                value={email}
                onChange={(event) => onEmailChange(event.target.value)}
                placeholder="Provide your email"
              />
              <hr/>
            </Col>
          </Row>

          <Row>
            <Col xs={{ size: 4, push: 4, pull: 4 }}>
              <TextInput
                name='api_token'
                value={apiToken}
                onChange={(event) => onApiTokenChange(event.target.value)}
                placeholder="Provide your api token from People app"
              />
               <FormText color="muted">
                You can find your api_token in People App here:&nbsp;
                <a href={account_settings_href} target="_blank">
                  Account Settings
                </a>
              </FormText>
              <hr/>
            </Col>
          </Row>

          <Row>
            <Col xs={{ size: 4, push: 4, pull: 4 }}>
              <Button
                className="btn-full-width"
                color="secondary"
                type="submit"
                disabled={!email || !apiToken || isSubmitting}
              >
                Sing in
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.loginForm,
  }),
  {
    signIn,
    onEmailChange,
    onApiTokenChange,
  },
)(LoginPage);
