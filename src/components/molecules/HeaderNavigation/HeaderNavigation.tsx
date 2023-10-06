import HeaderNavLink, {
  HeaderNavLinkProps,
} from '@/components/atoms/HeaderNavLink/HeaderNavLink';

interface HeaderNavigationProps {
  nav: HeaderNavLinkProps[];
  className?: string;
}

export default function HeaderNavigation({
  nav,
  className,
}: HeaderNavigationProps) {
  return (
    <nav className={className}>
      <ul className="flex">
        {nav.map(({ href, type, description }) => (
          <li key={type} className="flex-1">
            <HeaderNavLink href={href} type={type} description={description} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
