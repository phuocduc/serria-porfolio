import React from 'react'
import {useSelector} from 'react-redux'
import '../css/dashboard.css'
import {Container, Row} from 'react-bootstrap'
import Navbarr from '../Components/Navbarr'
import Brand from '../Components/Brand'
import Footerr from '../Components/Footerr'
// import Carosell from '../Components/Carosell'

export default function Dashboard() {
    const selector = useSelector(state=>state)
    return (
        <Container fluid={true} className="dashboard-page">
            <Row className="brand-navbar">
            <Brand/>
            <Navbarr/>

            </Row>
            <div>Welcome  {selector && selector.email}</div>
            

            <Footerr />
        </Container>
    )
}
