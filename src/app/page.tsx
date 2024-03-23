import { redirect } from 'next/navigation'
import React from 'react'

export const RootPage = () => {
  return (
    redirect('/en')
  )
}
