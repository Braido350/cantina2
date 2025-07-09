import Link from "next/link";
import { ModeToggle } from "../theme-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { LoginHome } from "../login";


export default function Header() {

 const autenticado: boolean = false;


  return (
    <header className="backgroundHeader">
<div className="flex items-center justify-between max-w-7xl p-4 mx-auto">
<Link href="/" className="hidden md:flex">
        <h1 className="textoPrincipal">
          Cantina
        </h1>
      </Link>
      {autenticado ? (
<NavigationMenu viewport={false}>
  <NavigationMenuList>
<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Vender</Link>
          </NavigationMenuLink>    
    <NavigationMenuItem >
      <NavigationMenuTrigger>Cadastro</NavigationMenuTrigger>
      <NavigationMenuContent>
            <ul >
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="hover:bg-blue-200 dark:hover:bg-blue-800"
                    > Produtos
                  </Link>
                </NavigationMenuLink>
                 <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="hover:bg-blue-200 dark:hover:bg-blue-800"
                    > Cliente
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="hover:bg-blue-200 dark:hover:bg-blue-800"
                    > Funcionario
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Relatorios</Link>
          </NavigationMenuLink> 
  </NavigationMenuList>
</NavigationMenu>
): (
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Produtos</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Sobre</Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
)
}
<div className="flex items-center gap-1">
<LoginHome/>
<ModeToggle/>
</div>
</div>
    </header>
  );
}