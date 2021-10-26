import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  created_at: string;
};

export function useUsers() {
  return useQuery<User[]>("users", async () => {
    const { data } = await api.get("users");

    const users = data.users.map(
      (user: User) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: new Date(user.createdAt).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      }),
      {
        saleTime: 1000 * 60 * 5, // 5 minutes (in milliseconds)
      }
    );

    return users;
  });
}
