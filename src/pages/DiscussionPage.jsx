import { useParams } from 'react-router-dom';
import DiscussionBoard from '../components/DiscussionBoard.jsx';

function DiscussionPage() {
  const { category } = useParams();
  const categoryData = {
    hardware: {
      name: 'Hardware: Evolution and Performance',
      tabs: ['SSD', 'HDD', 'NVMe'],
    },
    'cloud-storage': {
      name: 'Cloud Storage: Scalability vs. Privacy',
      tabs: ['AWS', 'Google Cloud', 'Azure'],
    },
    'storage-security': {
      name: 'Storage Security: Protecting Data in a Wild World',
      tabs: ['Encryption', 'Access Controls', 'Zero Trust'],
    },
  };

  const currentCategory = categoryData[category] || categoryData.hardware;

  return (
    <main className="discussion-page">
      <h1>{currentCategory.name}</h1>
      <DiscussionBoard tabs={currentCategory.tabs} category={category} />
    </main>
  );
}

export default DiscussionPage;