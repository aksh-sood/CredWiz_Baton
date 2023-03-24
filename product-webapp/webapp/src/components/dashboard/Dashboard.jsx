import CreateWallet from "../createWallet/CreateWallet";
import Transaction from "../history/Transaction";

const Dashboard = () => {
  const iswalletadded = false
  return (
    <>
      {
        iswalletadded == false ? (<CreateWallet></CreateWallet>) : (
          <Transaction />)
      }
    </>
  );
};

export default Dashboard;

