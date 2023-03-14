import HistoryTable from '../history/history';
import './dashboard.css'
import { Container, TextField } from "@mui/material";
import DisplayCard from '../card/displaycard';

export default function Dashboard() {
    return (
        <>
            <div className='body'  style={{ minHeight: "100vh" }}>


                <div className='row'  >

                    <div className="column" id="main-div" >

                        <div className="row ">
                            <div className="column" style={{width:850}}>
                                <h1>Dashboard</h1>
                            </div>
                            <div className="column"> 
                                <Container maxWidth="md" sx={{ mt: 2 }}>
                                    <TextField type="search" id="search" label="Search" sx={{ width: 200 }} />
                                </Container>
                            </div>
                        </div>
                        <div className="row justify-content-center" style={{align:"center"}}>
                            <div className='column'>
                                <DisplayCard variant="outlined" sx={{ width: 250 }} head="Balance" value="$4000">
                                </DisplayCard>
                            </div>
                            <div className='column ' sx={{ml:10}}>
                            <DisplayCard variant="outlined" sx={{ width: 250 }} head="Funds Transfered" value="$4000">
                                </DisplayCard>
                            </div>
                        </div>
                        <div >
                            <h1>Recent transactions</h1>
                            <div variant="outlined" className="row" style={{ backgroundColor:"white" }}>
                                 <HistoryTable/>   
                            </div>
                            </div>
                        

                    </div>
                    <div className="column" id="notification-div" >

                        <h1 className='float-left'>Notifications</h1>

                        <div variant="outlined" style={{ width: '320',backgroundColor:"white" }}>
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
