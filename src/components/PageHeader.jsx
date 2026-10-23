import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PageHeader({ eyebrow, title, crumbs = [], children }) {
  return (
    <div className="page-header">
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ol className="crumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label}>
                <ChevronRight size={12} aria-hidden="true" />
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-header__title">{title}</h1>
        {children}
      </div>
    </div>
  )
}
