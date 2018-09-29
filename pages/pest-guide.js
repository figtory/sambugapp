import React,{
    Component
} from 'react';

import {
    StyleSheet,
    View
} from 'react-native';

import PDFView from 'react-native-pdf-view';

export default class PDF extends Component {
    constructor(props) {
        super(props);
    }
    // hide default headers
    static navigationOptions = () => ({
    headerStyle: {
      display:'none',
        height: 0
    }
    })

    render(){
        return(
        // this will load pdf file
          <PDFView ref={(pdf)=>{this.pdfView = pdf;}}
                             asset={"pest-guide-doc.pdf"}
                             pageNumber={1}
                             onLoadComplete = {(pageCount)=>{
                                this.pdfView.setNativeProps({
                                    zoom: 1.0
                                });
                             }}
                             style={styles.pdf}/>
                             );
    }
}
var styles = StyleSheet.create({
    pdf: {
        flex:1
    }
});