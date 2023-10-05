import HeaderNavLink, {
  HeaderNavLinkProps,
} from '@/components/atoms/HeaderNavLink/HeaderNavLink';

interface HeaderNavigationProps {
  nav: HeaderNavLinkProps[];
}

export default function HeaderNavigation({ nav }: HeaderNavigationProps) {
  return (
    <nav>
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
