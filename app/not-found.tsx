import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Not Found</h2>
        <p className="mb-4">Could not find requested resource</p>
        <Link
          href="/"
          className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

