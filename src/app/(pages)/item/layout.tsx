import React from 'react'

export default function ItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <article>
        {children}
        <p className="back">
          <button type="button">前のページに戻る</button>
        </p>
      </article>
    </main>
  )
}
