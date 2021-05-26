import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../actions/orderActions";
import './Orders.scss';

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }
    render() {
        const { orders } = this.props;
        return !orders ? (
            <div>Orders</div>
            ) : (
        <div className="orders">
            <h2 className="orders__head">Orders</h2>
            <table>
                <thead>
                    <tr>
                    <th className="orders__header-cells">ID</th>
                    <th className="orders__header-cells">DATE</th>
                    <th className="orders__header-cells">TOTAL</th>
                    <th className="orders__header-cells">NAME</th>
                    <th className="orders__header-cells">EMAIL</th>
                    <th className="orders__header-cells">ADDRESS</th>
                    <th className="orders__header-cells">ITEMS</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                    <tr className="orders__rows">
                        <td className="orders__cells">{order._id}</td>
                        <td className="orders__cells">{order.createdAt}</td>
                        <td className="orders__cells"> ${order.total}</td>
                        <td className="orders__cells">{order.name}</td>
                        <td className="orders__cells">{order.email}</td>
                        <td className="orders__cells">{order.address}</td>
                        <td className="orders__cells">
                        {order.cartItems.map((item) => (
                            <div>
                            {item.count} {" x "} {item.title}
                            </div>
                        ))}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
    }
}
export default connect(
    (state) => ({
    orders: state.order.orders,
    }),
    {
    fetchOrders,
    }
)(Orders);
