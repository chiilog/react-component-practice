import AnimalIconNavLink, {
  AnimalIconNavLinkProps,
} from '@/components/atoms/AnimalIconNavLink/AnimalIconNavLink';

interface AnimalIconNavListProps {
  nav: AnimalIconNavLinkProps[];
  className?: string;
  direction?: 'vertical' | 'horizontal';
  itemHasBackground?: boolean;
}

export default function AnimalIconNavList({
  nav,
  className,
  direction = 'horizontal',
  itemHasBackground = true,
}: AnimalIconNavListProps) {
  const navItem = nav.map(({ href, type, description }) => (
    <li key={type} className="flex-1">
      <AnimalIconNavLink
        href={href}
        type={type}
        description={description}
        hasBackground={itemHasBackground}
      />
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
