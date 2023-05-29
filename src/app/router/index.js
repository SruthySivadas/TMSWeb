import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout';

import Dashboard from '../pages/Dashboard/DashBoard';
import TicketSummary from '../pages/Ticket/TicketSummary';
import EmployeeList from '../pages/Employee/EmployeeList';
import EmployeeRoster from '../pages/Employee/EmployeeRoster';
import EmployeeTickets from '../pages/Ticket/EmployeeTickets';


export const LayoutRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Tickets" element={<TicketSummary />} />
      <Route path="/EmployeeList" element={<EmployeeList />} />
      <Route path="/EmployeeRoster" element={<EmployeeRoster />} />
      <Route path="/EmployeeTickets" element={<EmployeeTickets />} />
    </Routes>
  );
};

const ProjectRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ProjectRoutes;
