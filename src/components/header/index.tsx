import Link from "next/link";
import Image from "next/image";
import Produtos from "../../../public/produtos2.png";
import Cliente from "../../../public/cliente.png";
import Inventario from "../../../public/inventario.png";
import Etiqueta from "../../../public/etiqueta-de-venda.png";

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

export default function Header() {
  return (
    <header className="size-full bg-blue-300 dark:bg-blue-950">
{/*         
      
        <Link href="/vender">
          <button className="bg-blue-500 mx-2 text-white p-2 rounded">
            <Image
              src={Etiqueta}
              alt="Pagina de Vendas"
              title="Vendas"
              className="w-10 min-w-5"
            />
          </button>
        </Link>
        <Link href="/cadastro/produtos">
          <button className="bg-blue-500 mx-2 text-white p-2 rounded">
            <Image
              src={Produtos}
              alt="Pagina de Produtos"
              title="Produtos"
              className="w-10 min-w-5"
            />
          </button>
        </Link>
        <Link href="/cadastro/clientes">
          <button className="hover:basis mx-2 bg-green-600 text-white p-2 rounded">
            <Image
              src={Cliente}
              alt="Cadastrar Cliente"
              title="Cadastrar Cliente"
              className="w-10 min-w-5"
            />
          </button>
        </Link>
        <Link href="/relatorios">
          <button className="hover:basis mx-2 bg-amber-500 text-white p-2 rounded">
            <Image
              src={Inventario}
              alt="Inventario"
              title="Inventario"
              className="w-10 min-w-5"
            />
          </button>
        </Link>
         */}

<div className="flex items-center justify-between p-4  mx-auto"
><Link href="/">
        <h1 className="text-black dark:text-white text-2xl">
          Cantina 2.0
        </h1>
      </Link>
<NavigationMenu viewport={false}>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="hover:bg-blue-200 dark:hover:bg-blue-800"
                  > top
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Vender</Link>
          </NavigationMenuLink>    
          </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
</div>
    </header>
  );
}