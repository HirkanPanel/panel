import { FC } from 'react'

const FooterContent = () => {
  return (
    <p className="text-muted-foreground inline-block flex-grow text-center text-xs">
      Made with ❤️ by &nbsp;
      <a className="text-primary hover:underline" href="/statics/hirkan-source.zip">
        Hirkan
      </a>{' '}
      Team
    </p>
  )
}

export const Footer: FC = ({ ...props }) => {
  return (
    <div className="relative flex w-full pt-1 pb-3" {...props}>
      <FooterContent />
    </div>
  )
}
