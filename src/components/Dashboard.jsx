import { Link } from 'react-router-dom';

function Dashboard() {
  const categories = [
    { name: 'Hardware: Evolution and Performance', slug: 'hardware' },
    { name: 'Cloud Storage: Scalability vs. Privacy', slug: 'cloud-storage' },
    { name: 'Storage Security: Protecting Data in a Wild World', slug: 'storage-security' },
  ];

  return (
    <main className="dashboard">
      <h1>Forum Name</h1>
      <nav className="categories">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/discussion/${category.slug}`}
            className="category-tab"
          >
            {category.name}
          </Link>
        ))}
      </nav>
      <section>
        <h2>Welcome Message</h2>
        <p>Welcome to the S.S.D. Forum! Join the conversation!</p>
      </section>
      <section>
        <h2>Forum Rules</h2>
        <ul>
          <li>Be respectful.</li>
          <li>No spam.</li>
          <li>No solicitation</li>
          <li>Stay on topic</li>
        </ul>
      </section>
    </main>
  );
}

export default Dashboard;