import '../styles/Farmer.css';
import API_BASE_URL from '../config';
import { useEffect, useState } from 'react';

function Account() {
  const [accounts, setAccounts] = useState([]);
  
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/accounts`);
        const data = await response.json();
        setAccounts(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>District ID</th>
            <th>Province ID</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={account.id}>
              {/* <td>{index + 1}</td> */}
              <td>{account.id}</td>
              <td>{account.first_name}</td>
              <td>{account.last_name}</td>
              <td>{account.email}</td>
              <td>{account.password}</td>
              <td>{account.district_id}</td>
              <td>{account.province_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Account
;