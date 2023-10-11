import AnimalIconNavLink, {
  AnimalIconNavLinkProps,
} from '@/components/atoms/AnimalIconNavLink/AnimalIconNavLink';

interface AnimalIconNavListProps {
  nav: AnimalIconNavLinkProps[];
  className?: string;
}

export default function AnimalIconNavList({
  nav,
  className,
}: AnimalIconNavListProps) {
  return (
    <nav className={className}>
      <ul className="flex">
        {nav.map(({ href, type, description }) => (
          <li key={type} className="flex-1">
            <AnimalIconNavLink
              href={href}
              type={type}
              description={description}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
