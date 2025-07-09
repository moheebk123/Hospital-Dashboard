import Layout from '../../components/layout/Layout';
import Card from '../../components/common/Card';
import {
  FaUser,
  FaCalendarAlt,
  FaUserMd,
  FaFileInvoice,
  FaUniversity,
  FaClipboardCheck,
  FaWpforms,
  FaBookMedical,
  FaUsersCog,
  FaNewspaper,
  FaFolderOpen,
  FaMoneyBillWave,
} from "react-icons/fa";
import { MdChecklistRtl, MdAssignment } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";

const cards = [
  { title: "Patient", icon: <FaUser /> },
  { title: "Appointment", icon: <FaCalendarAlt /> },
  { title: "Doctor", icon: <FaUserMd /> },
  { title: "Billing", icon: <FaFileInvoice /> },
  { title: "Insurance", icon: <FaUniversity /> },
  { title: "Master Data", icon: <FaFolderOpen /> },
  { title: "Facility Management", icon: <FaClipboardCheck /> },
  { title: "Human Resources", icon: <FaUsersCog /> },
  { title: "Finance Policy", icon: <MdAssignment /> },
  { title: "Finance", icon: <FaMoneyBillWave /> },
  { title: "Inspection Checklist", icon: <MdChecklistRtl /> },
  { title: "Forms and Daily Checklist", icon: <FaWpforms /> },
  { title: "Audit Reports", icon: <FaRegFileAlt /> },
  { title: "Roles and Management", icon: <FaUsersCog /> },
  { title: "News Letters", icon: <FaNewspaper /> },
];

export default function Home() {
  return (
    <Layout page="Home">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {cards.map((card, idx) => (
          <Card key={idx} title={card.title} icon={card.icon} />
        ))}
      </div>
    </Layout>
  );
}



