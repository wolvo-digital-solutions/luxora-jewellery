export default function SectionHeading({ eyebrow, title, id, children, align = 'left' }) {
  return (
    <div className={`section-head section-head--${align}`}>
      <div className="section-head__titles">
        <p className="eyebrow" data-reveal="head">
          {eyebrow}
        </p>
        <h2 id={id} className="section-title" data-reveal="head">
          {title}
        </h2>
      </div>
      {children && (
        <div className="section-head__aside" data-reveal="head">
          {children}
        </div>
      )}
    </div>
  )
}
