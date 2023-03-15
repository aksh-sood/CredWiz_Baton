import HistoryTable from '../history/history';
import './dashboard.css'
import { Container, TextField } from "@mui/material";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { borderRadius } from '@mui/system';
export default function Dashboard() {
    return (
        <>
            <div className='body' style={{ minHeight: "100vh" }}>
                <div className='row'  >
                    <div className="column" id="main-div" >
                        <div className="row ">
                            <div className="column" style={{ width: 750, fontSize: '2rem' }}>
                                <h1>Dashboard</h1>
                            </div>
                            <div className="column" >
                                <Container maxWidth="md" sx={{ mt: 2 }}>
                                    <TextField type="search" id="search" label="Search" sx={{ width: 200 }} />
                                </Container>
                            </div>
                        </div>
                        <div className="row" style={{ margin: '3rem' }} >
                            <div className='column' >
                                <Card style={{ width: '20rem', height: '7rem', padding: '1rem', backgroundColor: "white",fontFamily: 'FredokaOne', borderRadius: '25px'}}>
                                    <Card.Body>
                                        <Card.Title style={{  fontSize: '30px' }}>Balance</Card.Title>
                                        <Card.Text style={{  fontSize: '40px' }}>
                                            10000
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='column ' style={{ marginLeft: "2rem" }}>
                                <Card style={{ width: '20rem', height: '7rem', padding: '1rem', backgroundColor: "white",fontFamily: 'FredokaOne' ,borderRadius: '25px'}}>
                                    <Card.Body>
                                        <Card.Title style={{  fontSize: '30px' }}>Funds Transfered</Card.Title>
                                        <Card.Text style={{  fontSize: '40px' }}>
                                        1000
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div style={{alignItems:'center', marginLeft:'13rem'}}>
                            <h1 style={{ textAlign:'left',float:'left',marginLeft:'2rem'}}>Recent transactions</h1>
                           <h3> <Link to="/transaction">Show more</Link> </h3>
                            <Card style={{ width: '55rem', height: '30rem', margin:'2rem',padding: '1rem', backgroundColor: "white",borderRadius: '50px' }}>
                                <Card.Body>
                                    <Card.Text style={{alignContent:'center'}}>
                                        <HistoryTable />
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="column" id="notification-div" >
                        <h1 className='float-left'>Notifications</h1>
                      
                        <div variant="outlined" style={{ width: '320', backgroundColor: "white",borderRadius: '35px' }}>
                            {/* <Avatar alt="Remy Sharp" src="../images/1.jpg" /> */}
                            <span level="h2" fontSize="md" sx={{ mb: 0.5 }}>Anu</span><br></br>
                            <span level="h2" fontSize="md" sx={{ mb: 0.5 }}>Abc</span><br></br>
                            <span level="h2" fontSize="md" sx={{ mb: 0.5 }}>Mr.X</span><br></br>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
