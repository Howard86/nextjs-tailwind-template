import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import { Link, LinkProps } from '@chakra-ui/react';

interface RouteLinkProps extends LinkProps {
  href: string;
  children: ReactNode;
}

const RouteLink = ({
  href,
  children,
  ...props
}: RouteLinkProps): JSX.Element => (
  <NextLink href={href} passHref>
    <Link {...props}>{children}</Link>
  </NextLink>
);

export default RouteLink;
