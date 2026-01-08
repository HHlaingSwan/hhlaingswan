export const env = {
  NEXT_PUBLIC_FORMSPREE_ID: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
} satisfies {
  NEXT_PUBLIC_FORMSPREE_ID: string;
};

export type Env = typeof env;
