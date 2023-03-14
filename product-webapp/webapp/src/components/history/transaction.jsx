import DisplayCard from '../card/displaycard';
import HistoryTable from '../history/history';
export default function Transaction() {
    return (
        <div>
            <h1>Recent transactions</h1>
            <div className='column'>
                <DisplayCard variant="outlined" sx={{ width: 250 }} head="Balance" value="$4000">
                </DisplayCard>
            </div>
            <div >

                <div variant="outlined" className="row" style={{ backgroundColor: "white" }}>
                    <HistoryTable />
                </div>

            </div>
            </div>
            )
}