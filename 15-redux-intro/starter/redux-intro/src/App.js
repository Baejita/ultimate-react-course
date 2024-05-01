import CreateCustomer from "./features/customers/CreateCustomer.js";
import Customer from "./features/customers/Customer.js";
import AccountOperations from "./features/accounts/AccountOperations.js";
import BalanceDisplay from "./features/accounts/BalanceDisplay.js";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((state) => state.customer.fullName); //เพื่อดังข้อมูลชื่อมา สร้างเงื่อไข การแสดงฟอร์ม
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? ( //สร้างเงื่อนไข การแสดงฟอร์มถ้ามีกับไม่มีชื่อ
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
