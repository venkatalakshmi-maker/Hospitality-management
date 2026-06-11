import "./Billing.css";

const bills = [
  {
    id: 1,
    billNo: "#BILL001",
    date: "2026-01-03",
    total: "₹1,155",
    paid: "₹1,155",
    balance: "₹0",
    status: "paid",
  },
  
];

export default function Billing() {
  return (
    <div className="bill-page">
      <div className="content-header">
        <div>
          <h1 className="welcome-title">Billing & Payments</h1>
          <p className="welcome-sub">View bills and make payments</p>
        </div>
      </div>

      <div className="bill-list">
        {bills.map(bill => (
          <div key={bill.id} className="bill-row">

            <div className="bill-row-top">
              <div>
                <div className="bill-number">Bill {bill.billNo}</div>
                <div className="bill-date">{bill.date}</div>
              </div>
              <span className={`bill-badge ${bill.status === "paid" ? "bill-badge--paid" : "bill-badge--pending"}`}>
                {bill.status}
              </span>
            </div>

            <div className="bill-row-bottom">
              <div className="bill-col">
                <div className="bill-col-label">Total Amount</div>
                <div className="bill-col-value">{bill.total}</div>
              </div>
              <div className="bill-col">
                <div className="bill-col-label">Paid</div>
                <div className="bill-col-value">{bill.paid}</div>
              </div>
              <div className="bill-col">
                <div className="bill-col-label">Balance</div>
                <div className={`bill-col-value ${bill.balance !== "₹0" ? "bill-col-value--due" : ""}`}>
                  {bill.balance}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}