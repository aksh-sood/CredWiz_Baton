import CreateWallet from "../createWallet/CreateWallet";
import Transaction from "../history/Transaction";

const Dashboard = () => {
  return (
    <>
      {
        localStorage.getItem("iswalletadded") ? (<CreateWallet></CreateWallet>) : (
          <Transaction />)
      }
    </>
  );
};

export default Dashboard;

