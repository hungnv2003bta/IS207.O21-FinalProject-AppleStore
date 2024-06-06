import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Feature from "../../components/feature/Feature";
import Chart from "../../components/chart/Chart";
import { useState, useEffect } from 'react';

import "./home.css";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [earningData, setEarningData] = useState(0);
  const [balanceData, setBalanceData] = useState({});

  useEffect(() => {
    // Fetch dữ liệu người dùng
    fetchUserData();

    // Fetch dữ liệu đơn hàng
    fetchOrderData();

    // Fetch dữ liệu doanh thu
    fetchEarningData();

    // Fetch dữ liệu số dư
    fetchBalanceData();
  }, []);

  const fetchUserData = () => {
    // Thực hiện fetch dữ liệu người dùng từ cơ sở dữ liệu
    fetch('http://localhost:8000/api/users')
      .then(response => response.json())
      .then(data => {
        const filteredUserData = data.filter(user => user.role_id === 1);
        setUserData(filteredUserData);
      })
      .catch(error => console.error('Error fetching user data:', error));
  };

  const fetchOrderData = () => {
    // Thực hiện fetch dữ liệu đơn hàng từ cơ sở dữ liệu
    fetch('http://localhost:8000/api/orders')
      .then(response => response.json())
      .then(data => {
        setOrderData(data);
      })
      .catch(error => console.error('Error fetching order data:', error));
  };

  const fetchEarningData = () => {
    // Thực hiện fetch dữ liệu doanh thu từ cơ sở dữ liệu
    fetch('http://localhost:8000/api/orders')
      .then(response => response.json())
      .then(data => {
        // Lọc ra các đơn hàng có status là 3
        const filteredOrders = data.filter(order => order.status === 3);
        // Tính tổng các giá trị trong cột total_money của các đơn hàng có status là 3
        const totalEarning = filteredOrders.reduce((accumulator, currentValue) => accumulator + currentValue.total_money, 0);
        setEarningData(totalEarning);
      })
      .catch(error => console.error('Error fetching earning data:', error));
  };
  
  

  const fetchBalanceData = () => {
    // Thực hiện fetch dữ liệu số dư từ cơ sở dữ liệu
    fetch('URL_TO_BALANCE_DATA')
      .then(response => response.json())
      .then(data => {
        setBalanceData(data);
      })
      .catch(error => console.error('Error fetching balance data:', error));
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" amount={userData.length} />
          <Widget type="order" amount={orderData.length} />
          <Widget type="earning" amount={earningData} />
          <Widget type="balance" amount={balanceData.balance} />
        </div>
        <div className="charts">
          <Feature />
          <Chart /> 
        </div>
      </div>
    </div>
  )
}

export default Home;
