import React from 'react'
import {Nav} from 'react-bootstrap'
 
 function Navvbar () {
     return (
     <div>
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item>
            <Nav.Link href="/home">A props </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1"> Contact </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2"> Listes  </Nav.Link>
        </Nav.Item>
        </Nav>
    </div>
     )
 }

 export default Navvbar 