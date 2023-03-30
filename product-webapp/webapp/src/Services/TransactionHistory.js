import axios from "axios";

class TransactionHistory {
  getTransactionHistory = async () => {
    try {
      const response = await axios.get(
        `https://CredWiz.stackroute.io/wallet/getTransactions/${localStorage.getItem(
          "contactNumber"
        )}`
      );
      const transactionData = response.data;

      // Save each transaction to a separate object literal
      const transactionHistory = transactionData.map((transaction) => ({
        transactionId: transaction.transactionId,
        contactNumber: transaction.contactNumber,
        date: new Date(transaction.date),
        transactionType: transaction.transactionType,
        transactionStatus: transaction.transactionStatus,
        remarks: transaction.remarks,
        receiverName: transaction.receiverName,
        amount: transaction.amount,
        wallet: transaction.wallet,
      }));

      return transactionHistory;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

export default TransactionHistory;
