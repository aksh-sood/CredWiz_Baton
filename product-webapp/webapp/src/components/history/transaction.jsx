import Card from 'react-bootstrap/Card';
import HistoryTable from '../history/history';
export default function Transaction() {
    return (
        <div style={{ backgroundColor: 'rgb(223, 219, 218)', minHeight: "100vh",margin:'0rem' }}>
            <div style={{marginLeft:'25rem',padding:'5rem'}}>
            <Card style={{ width: '20rem', height: '7rem',padding: '1rem', backgroundColor: "white", fontFamily: 'FredokaOne', borderRadius: '25px' }}>
                <Card.Body>
                    <Card.Title style={{ fontSize: '30px' }}>Balance</Card.Title>
                    <Card.Text style={{ fontSize: '40px' }}>
                        10000
                    </Card.Text>

                </Card.Body>
            </Card>
            </div>
            <div style={{alignItems:'center',marginLeft:'25rem'}}>
                
                        <h1 style={{ textAlign:'left',float:'left',marginLeft:'2rem'}}>Recent transactions</h1><br></br>
                        
                            <Card style={{ width: '55rem', height: '30rem', margin:'2rem',padding: '1rem', backgroundColor: "white",borderRadius: '50px' }}>
                                <Card.Body>
                                    <Card.Text style={{alignContent:'center'}}>
                                        <HistoryTable />
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
        </div >
    )
}