import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <h2>Not Found</h2>
        <p>The requested resource cannot be found</p>
        <Link href='/'>Return home</Link>
    </div>
  )
}
