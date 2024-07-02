const Payment = require('../../Models/payments');
const {getUserId} = require('../../Middleware/fireBase/Auth');
const savePayment = async (req, res) => {
  try {
      const userId = await getUserId(req);
      const newData = new Payment({
          paymentId: req.body.paymentId,
          userID: userId,
          paymentStatus: req.body.paymentStatus,
          paymentType: req.body.paymentType,
          paymentAmount: req.body.paymentAmount,
      });

      const response = await newData.save();

      if(response){
          res.status(200).send({ message: 'Payment saved successfully' });
      } else {
          res.status(500).send({ message: 'Failed to save payment' });
      }
  } catch (e) {
      console.log(e);
      res.status(500).send({ message: 'Internal Server Error', error: e.message });
  }
};

const getPayments = async (req, res) => {
    try {

      const response = await Payment.find();
      if(response){
          res.status(200).send(response);
      } else {
          res.status(200).send({ message: 'NoPaymentsFound' });
      }
  }
  catch (e) {
      console.log(e);
      res.status(500).send({ message: 'Internal Server Error', error: e.message });
  }
}

const getPaymentsById = async (req, res) => {
    try {
        const userId = await getUserId(req); // Added await here
        const response = await Payment.find({ userID: userId });
        if (response && response.length > 0) {
            res.status(200).send(response);
        } else {
            res.status(200).send({ message: 'NoPaymentsFound' });
        }
    } catch (e) {
        res.status(500).send({ message: 'Internal Server Error', error: e.message });
    }
}

module.exports={
    savePayment,
    getPayments,
    getPaymentsById,
}