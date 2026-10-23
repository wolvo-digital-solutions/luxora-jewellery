import { useUI } from '../hooks/useStore'

export default function Toast() {
  const { toast } = useUI()
  return (
    <div className="toast-region" role="status" aria-live="polite">
      {toast && (
        <div key={toast.key} className="toast">
          {toast.message}
        </div>
      )}
    </div>
  )
}
