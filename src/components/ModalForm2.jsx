import { X } from "lucide-react";
import { useState } from "react";


export default function ModalPaymentForm({ closeModal }) {
  const [name, setName] = useState("");
  const [paymentSchedule, setPaymentSchedule] = useState("");
  const [billNumber, setBillNumber] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [balanceAmount, setBalanceAmount] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState("");


  const handleNameChange = (event) => setName(event.target.value);
  const handlePaymentScheduleChange = (event) => setPaymentSchedule(event.target.value);
  const handleBillNumberChange = (event) => setBillNumber(event.target.value);
  const handleAmountPaidChange = (event) => setAmountPaid(event.target.value);
  const handleBalanceAmountChange = (event) => setBalanceAmount(event.target.value);
  const handleDayChange = (event) => setDay(event.target.value);

  
  const handleSubmit = async () => {
    const paymentData = {
      name,
      paymentSchedule,
      billNumber,
      amountPaid,
      balanceAmount,
      day,
    };

    try {
     
      const response = await fetch(
        "https://crud-backend-react.onrender.com/usuarios",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        }
      );

      if (!response.ok) {
        throw new Error("Error while adding payment.");
      }

      
      setName("");
      setPaymentSchedule("");
      setBillNumber("");
      setAmountPaid("");
      setBalanceAmount("");
      setDay("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-darkYellow border-2 border-solid border-darkYellow flex flex-col justify-center items-center gap-4 p-8 rounded-md w-[400px] h-[500px]">
        <div className="flex items-baseline h-10 gap-2">
          <p className="font-bold text-white text-xl">Payment Details</p>
          <button onClick={closeModal}>
            <X color="white" strokeWidth={3} />
          </button>
        </div>
        
        <div className="flex flex-col gap-3 w-full">
          <input
            type="text"
            placeholder="Name"
            className="border border-lightGray rounded-md text-sm p-3"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="Payment Schedule"
            className="border border-lightGray rounded-md text-sm p-3"
            value={paymentSchedule}
            onChange={handlePaymentScheduleChange}
          />
          <input
            type="text"
            placeholder="Bill Number"
            className="border border-lightGray rounded-md text-sm p-3"
            value={billNumber}
            onChange={handleBillNumberChange}
          />
          <input
            type="number"
            placeholder="Amount Paid"
            className="border border-lightGray rounded-md text-sm p-3"
            value={amountPaid}
            onChange={handleAmountPaidChange}
          />
          <input
            type="number"
            placeholder="Balance Amount"
            className="border border-lightGray rounded-md text-sm p-3"
            value={balanceAmount}
            onChange={handleBalanceAmountChange}
          />
          <input
            type="date"
            placeholder="Day"
            className="border border-lightGray rounded-md text-sm p-3"
            value={day}
            onChange={handleDayChange}
          />
        </div>
      </div>
    </div>
  );
}
