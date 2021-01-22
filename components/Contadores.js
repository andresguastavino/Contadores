import React, { Component } from 'react';
import { ScrollView, View, FlatList, Button, Text, TextInput } from 'react-native';
import NewContador from './NewContador';

export default class Contadores extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contadores: [],
            showingNewButton: true,
            newContadorName: '',
        };

        this.handleNewContador = this.handleNewContador.bind(this);
        this.renderNewContador = this.renderNewContador.bind(this);
        this.handleSaveNewContador = this.handleSaveNewContador.bind(this);
    }

    handleNewContador() {
        this.setState( 
            (state) => ({
                showingNewButton: !state.showingNewButton
            }) 
        );
    }

    handleSaveNewContador() {
        let newContador = {
            name: this.state.newContadorName
        };
        this.setState( 
            (state) => ({
                contadores: state.contadores.concat(newContador),
                newContadorName: '',
                showingNewButton: true
            }) 
        );
    }

    renderNewContador() {
        if(!this.state.showingNewButton) {
            return(
                <View>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here the new contador name"
                        onChangeText={name => this.setState( (state) => ({newContadorName: name}) ) }
                        defaultValue=''
                    />
                    <Button
                        onPress={this.handleSaveNewContador}
                        title="Save"
                    />
                </View>
            );
        } else {
            return(
                <View>
                    <Button 
                        title='{+} New Contador'
                        onPress={this.handleNewContador}
                    />
                </View>
            );
        }
    }

    render() {
        return(
            <ScrollView>
                <FlatList
                    data={this.state.contadores}
                    extraData={this.state}
                    renderItem={ ({item}) => <Text>{item.name}</Text> }
                />
                {this.renderNewContador()}
            </ScrollView>
        );
    }

}