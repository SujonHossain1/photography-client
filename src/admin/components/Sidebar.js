import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="col-md-2">
            <div className="admin__sidebar">
                <ul className="admin__sidebar__links">
                    <li className="admin__sidebar__link">
                        <NavLink exact="true" to="/admin/dashboard/">
                            Home
                        </NavLink>
                    </li>
                    <li className="admin__sidebar__link">
                        <NavLink exact="true" to="/admin/dashboard/orders">
                            Orders
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
