import React, {useState} from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import LaunchIcon from '@material-ui/icons/Launch';
import DialogDisplay from "./Dialog"

const History = () => {
    const [modalContent, setModalContent] = useState({isOpen: false, result: {isMatch: true, matchText: ""}})

    const handleOnClick = () => {
        setModalContent({...modalContent, isOpen: !modalContent.isOpen})
    }

    const handleOnCancel = () => {
        setModalContent({...modalContent, isOpen: !modalContent.isOpen})
    }

    
    let historyUrl =
    "https://723b8d87-dcd0-4838-a931-5641717a52d8.mock.pstmn.io/history";
  
  let box = document.getElementById("history");
  function findHistory(input) {
    
    let search = input.value;
    fetch(`${historyUrl}${search}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        result.data.forEach(function(text) {
          let img = document.createElement("text");

        });
        console.log(result.data[0]);
      })
      .catch(function(err) {
        console.log(err, "error");
      });
  }


    return (
        <>
            <DialogDisplay modalContent={modalContent} onCancel={handleOnCancel} />
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Student Name </Table.HeaderCell>
                    <Table.HeaderCell>Percentage Similarity % </Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row>
                    <Table.Cell>
                    <Label ribbon>Kelechi Bruce</Label>
                    </Table.Cell>
                    <Table.Cell>20</Table.Cell>
                    <Table.Cell>{<FlipCameraAndroidIcon style={{cursor: "pointer"}} onClick={handleOnClick} />} {<LaunchIcon style={{cursor: "alias"}} onClick={handleOnClick} />}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Obinna Ozurumba</Table.Cell>
                    <Table.Cell>10</Table.Cell>
                    <Table.Cell>{<FlipCameraAndroidIcon style={{cursor: "pointer"}} onClick={handleOnClick} />}  {<LaunchIcon style={{cursor: "alias"}} onClick={handleOnClick}/>}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Emma Smart</Table.Cell>
                    <Table.Cell>15</Table.Cell>
                    <Table.Cell>{<FlipCameraAndroidIcon style={{cursor: "pointer"}} onClick={handleOnClick} />}  {<LaunchIcon style={{cursor: "alias"}} onClick={handleOnClick}/>}</Table.Cell>
                </Table.Row>
                </Table.Body>

                <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                        </Menu.Item>
                    </Menu>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table>
        </>
    )
}

export default History