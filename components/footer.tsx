import React from 'react'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
        <small className="mb-2 block text-xs">
            &copy; {currentYear} Jean-Pierre. All Rights Reserved.
        </small>
        <p className="text-xs">
            <span className="font-semibold">About this website:</span> built with React & Nextd.js (App Router & Server Actions), TypesScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
    </footer>
  )
}
