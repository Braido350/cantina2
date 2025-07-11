"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CadastroUsuarios() {
 

  return (
      <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Cadastro de Usuario</CardTitle>
        <CardDescription>
          Insira seu nome de usuario abaixo para entrar na sua conta
        </CardDescription>
       
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="login">Login</Label>
              <Input
                id="login"
                type="login"
                placeholder="nome de Login"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="nome">Nome Completo</Label>
              <Input
                id="nome"
                type="nome"
                placeholder="Jonh Doe"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Cadastrar
        </Button>
      </CardFooter>
    </Card>
  );
}