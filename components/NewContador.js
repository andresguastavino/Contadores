import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class NewContador extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showing: false,
        };

        this.getText = this.getText.bind(this);
        this.changeShowing = this.changeShowing.bind(this);
    }

    changeShowing() {
        this.setState( (state) => ({showing: !state.showing}) );
    }

    getText() {
        if(this.state.showing) {
            return(
                <Text>Showing</Text>
            );
        } else {
            return(
                <Text>Not showing</Text>
            );
        }
    }

    render() {
        return(
            <View>
                {this.getText()}
                <Button 
                    title='Showing/Not showing'
                    onPress={this.changeShowing}
                />
            </View>
        );
    }
    
}