// services/github.ts
import type { RandomUserProps } from "../types/randomUser";

export const fetchRandomUsers = async (
  perPage = 10
): Promise<RandomUserProps[]> => {
  const randomSince = Math.floor(Math.random() * 5000);
  const res = await fetch(
    `https://api.github.com/users?per_page=${perPage}&since=${randomSince}`
  );
  if (!res.ok) throw new Error("Erro ao buscar usuários");
  return res.json();
};
