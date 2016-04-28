/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import Colors from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';
import TextField from 'material-ui/lib/text-field';
import AppBar from 'material-ui/lib/app-bar';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  accent1Color: Colors.deepOrange500,
});

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Okey"
        secondary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (

      <div>
        <AppBar
          title="Title"
          showMenuIconButton={false}
        />
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Super Secret Password3"
            actions={standardActions}
            modal={true}
            onRequestClose={this.handleRequestClose}
            autoScrollBodyContent={true}
            fullWidth={false}
            fullHeight={true}
          >
            <div>
              <TextField
                hintText="Hint Text"
              /><br/>
              <br/>
              <TextField
                hintText="The hint text can be as long as you want, it will wrap."
              /><br/>
              <TextField
                defaultValue="Default Value"
              /><br/>
              <TextField
                hintText="Hint Text"
                floatingLabelText="Floating Label Text"
              /><br/>
              <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
              /><br/>
              <TextField
                hintText="MultiLine with rows: 2 and rowsMax: 4"
                multiLine={true}
                rows={2}
                rowsMax={4}
              /><br/>
              <TextField
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                multiLine={true}
                rows={2}
              />
            </div>
          </Dialog>
          <div style={{height:"1000px",backgroundColor: "#0b97c4",border: "dotted 1px #0000FF"}}>dummy</div>
          <h1>material-ui</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            primary={true}
            onTouchTap={this.handleTouchTap}
          />
          <div style={{height:"1000px",backgroundColor: "#0b97c4",border: "dotted 1px #0000FF"}}>dummy</div>
        </div>
      </div>
    );
  }
}

export default themeDecorator(muiTheme)(Main);
