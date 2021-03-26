import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'

class FileUpload extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){
    return (
        <div style={{marginTop: '10px'}}>
            <DropzoneArea
            dropzoneText="Drag and drop or click to upload student's assignment"
            filesLimit={1}
            acceptedFiles={['application/*']}
                onChange={this.handleChange.bind(this)}
                />
        </div>
    )  
  }
} 

export default FileUpload;