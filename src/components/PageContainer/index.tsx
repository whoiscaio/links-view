import { ReactNode } from 'react'

import PageContainerBox from './styles'

type PageContainerProps = {
  title: string,
  children: ReactNode
}

function PageContainer({ title, children }: PageContainerProps) {
  return (
    <PageContainerBox>
      <h1>{title}</h1>
      <div className="content">
        {children}
      </div>
    </PageContainerBox>
  )
}

export default PageContainer