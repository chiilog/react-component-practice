import AnimalIconNavLink, {
  AnimalIconNavLinkProps,
} from '@/components/atoms/AnimalIconNavLink/AnimalIconNavLink';

interface AnimalIconNavListProps {
  nav: AnimalIconNavLinkProps[];
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

export default function AnimalIconNavList({
  nav,
  className,
  direction = 'horizontal',
}: AnimalIconNavListProps) {
  const navItem = nav.map(({ href, type, description }) => (
    <li key={type} className="flex-1">
      <AnimalIconNavLink href={href} type={type} description={description} />
    </li>
  ));

  if (direction === 'vertical') {
    return (
      <nav className={className}>
        <ul className="flex flex-col">{navItem}</ul>
      </nav>
    );
  }

  return (
    <nav className={className}>
      <ul className="flex">{navItem}</ul>
    </nav>
  );
}
