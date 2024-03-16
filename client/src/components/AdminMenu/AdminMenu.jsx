import { NavLink, Outlet } from "react-router-dom";
import "./AdminMenu.scss"

const AdminMenu = () => {
    return (
        <div className="admin-menu-container">
           <div className="menu">
             <h2>DashBoard</h2>
             <NavLink className="link btn link1" to="/admin/products">Product</NavLink>
             <NavLink className="link btn link1" to="/admin/customers">Customer</NavLink>
             <NavLink className="link btn link1" to="/admin/transaction">Transaction</NavLink>
             <NavLink className="link btn link1" to="/admin/coupon">Coupon</NavLink>
           </div>
           <div className="outlet">
           <Outlet/>
           </div>
           
        </div>
    )
}

export default AdminMenu;