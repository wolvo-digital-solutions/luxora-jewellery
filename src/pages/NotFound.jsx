import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="404" title="This page has moved on" crumbs={[{ label: 'Not found' }]} />
      <div className="container page-body empty-state empty-state--page">
        <p>The piece or page you were looking for isn&rsquo;t here.</p>
        <Link to="/collections" className="btn btn--primary">
          Explore Collections
        </Link>
      </div>
    </>
  )
}
