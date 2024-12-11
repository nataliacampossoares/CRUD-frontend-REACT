import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";

export default function Payment() {
  const payments = [
    {
      name: "John Doe",
      paymentSchedule: "Monthly",
      billNumber: "12345",
      amountPaid: "$500",
      balanceAmount: "$100",
      day: "2024-12-10",
    },
    {
      name: "Nati Campos",
      paymentSchedule: "Weekly",
      billNumber: "67890",
      amountPaid: "$200",
      balanceAmount: "$50",
      day: "2024-12-11",
    },
    {
      name: "Lara Deitos",
      paymentSchedule: "Weekly",
      billNumber: "67890",
      amountPaid: "$200",
      balanceAmount: "$50",
      day: "2024-12-11",
    },
    {
      name: "Sara Guiaume",
      paymentSchedule: "Weekly",
      billNumber: "11290",
      amountPaid: "$200",
      balanceAmount: "$50",
      day: "2024-12-11",
    },
    {
      name: "Pedro Utumi",
      paymentSchedule: "Weekly",
      billNumber: "657890",
      amountPaid: "$200",
      balanceAmount: "$50",
      day: "2024-12-11",
    },
    {
      name: "Rafael Liberato",
      paymentSchedule: "Weekly",
      billNumber: "6990",
      amountPaid: "$200",
      balanceAmount: "$50",
      day: "2024-12-11",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <SearchBar />

      <div className="ml-[280px] flex flex-col p-4 gap-4 w-full relative">
        <div className="flex justify-between items-center m-5 w-full h-fit pb-4 border-solid border-b-2 border-whiteGray">
          <p className="font-bold text-xl">Payment Details</p>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex justify-between py-2 text-lightGray2 font-semibold text-sm bg-lightGray1 px-4 rounded-t-lg">
            <span className="w-[15%]">Name</span>
            <span className="w-[20%]">Payment Schedule</span>
            <span className="w-[15%]">Bill Number</span>
            <span className="w-[15%]">Amount Paid</span>
            <span className="w-[20%]">Balance Amount</span>
            <span className="w-[15%]">Day</span>
          </div>

          <div className="flex flex-col bg-white w-full">
            {payments.map((payment, index) => (
              <div
                key={index}
                className="flex justify-between py-3 text-sm text-darkGray2 px-4 hover:bg-lightGray1"
              >
                <span className="w-[15%]">{payment.name}</span>
                <span className="w-[20%]">{payment.paymentSchedule}</span>
                <span className="w-[15%]">{payment.billNumber}</span>
                <span className="w-[15%]">{payment.amountPaid}</span>
                <span className="w-[20%]">{payment.balanceAmount}</span>
                <span className="w-[15%]">{payment.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
